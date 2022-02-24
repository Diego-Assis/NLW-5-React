import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '../../services/api';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import styles from '../episodes/episode.module.scss';
import { PlayerContext, usePlayer } from '../../contexts/PlayerContext';
import Head from 'next/head';

type Episode = {
    id: string;
    title: string;
    members: string;
    thumbnail: string;
    publishedAT: string;
    duration: number;
    durationAsString: string;
    description: string;
    url: string;
}

type EpisodeProps = {
    episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
    const { play } = usePlayer();

    return (
        <div className={styles.episode}>
            <Head>
                <title>{episode.title} | Podcastr</title>
            </Head>

            <div className={styles.thumbnailContainer}>
                <Link href='/'>
                    <button type='button'>
                        <img src='/arrow-left.svg' alt='Voltar' />
                    </button>
                </Link>
                <Image
                    width={700}
                    height={160}
                    src={episode.thumbnail}
                    objectFit="cover"
                />
                <button type='button' onClick={() => play(episode)}>
                    <img src='/play.svg' alt='Tocar episódio' />
                </button>
            </div>

            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.publishedAT}</span>
                <span>{episode.durationAsString}</span>
            </header>

            <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: episode.description }}
            />

        </div>// dangerouslySetInnerHTML: Converte a descrição para HTMl.
    )
}

export const getStaticPaths: GetStaticPaths = async () => { // Toda rota que tiver [] é necessário usar esse método. Caso for utilizar uma página com geração estática e tiver parametros dinâmicos. 
    const { data } = await api.get('episodes', { // ?_limit=12 limita a quantidade de registros que vão ser passados. &_sort=published_at ordena pela data de publicação, &_order=desc na ordem decrescente.
        params: {
            _limit: 2,
            _sort: 'published_at',
            _order: 'desc'
        }
    })

    const paths = data.map(episode => {
        return {
            params: {
                slug: episode.id,
            }
        }
    })

    return {
        paths,
        fallback: 'blocking',  // Incremental static regeneration
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const { data } = await api.get(`/episodes/${slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        members: data.members,
        thumbnail: data.thumbnail,
        publishedAT: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url,
    };

    return {
        props: {
            episode,
        },
        revalidate: 60 * 60 * 24, // 24 horas.
    }
}