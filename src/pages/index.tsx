/* SPA : é carregado depois que a página é mostrada. Usando o JavaScript do Browseer
  useEffect(() => { fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data)) }, [])
*/

/* SSR : para isso é necesário exportar a função getServerSideProps(), isso permite que os dados sejam solicitados antes de exibir a página.
  Dessa forma a solicitação é na camda do servidor Node e não no Browser.
  export default function Home(props) {
  console.log(props.episodes)

    return (
      <h1>Index</h1>
    )
  }

  export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()

    return {
      props: {
        episodes: data,
      }
    }
  }
*/
/*SSG : é gerada uma versão estática da página em html puro, é usada para todos os usuários que acessarem a mesma página, depois dessa primeira pessoa. 
 Evitando ter que fazer a solicitação toda vez que uma pessoa acessar a página. Evitando gastar rescursos desnecessários.
 Para isso basta trocar a função getServerSideProps() para a função getStaticProps().
*/

import { GetStaticProps } from 'next'; //Tipagem da função.
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { api } from '../services/api'
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';
import styles from '../pages/home.module.scss';
import { usePlayer } from '../contexts/PlayerContext';

type Episodes = {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  publishedAT: string;
  duration: number;
  durationAsString: string;
  url: string;
}

type HomeProps = {
  latestEpisodes: Array<Episodes> // Ou Episodes[] para declarar um Array.
  allEpisodes: Array<Episodes>
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes];

  return (
    <div className={styles.homePage}>
      <Head>
        <title>Home | Podcastr</title>
      </Head>

      <section className={styles.latestEpisodes}>
        <h2>Últimos lançamentos</h2>

        <ul>
          {latestEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit='cover'
                />

                <div className={styles.episodeDetails}>
                  <Link href={`/episodes/${episode.id}`}>
                    <a >{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAT}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type='button' onClick={() => playList(episodeList, index)} >
                  <img src="/play-green.svg" alt="Tocar episódio" />
                </button>
              </li>
            )
          })
          }
        </ul>
      </section>
      <section className={styles.allEpisodes}>
        <h2>Todos episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit='cover'
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`} prefetch>
                      <a >{episode.title}</a>
                    </Link>
                  </td>
                  <td>{episode.members}</td>
                  <td style={{ width: 100 }}>{episode.publishedAT}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <button type='button' onClick={() => playList(episodeList, index + latestEpisodes.length)}>
                      <img src='/play-green.svg' alt='Tocar episódio' />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => { //api.get() para pegar informações, api.post() para salvar algum dado, api.put() para atualizar e api.delet para deletar.
  /*const response = await fetch('http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc');
  const data = await response.json();*/

  const { data } = await api.get('episodes', { // ?_limit=12 limita a quantidade de registros que vão ser passados. &_sort=published_at ordena pela data de publicação, &_order=desc na ordem decrescente.
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  //axios é uma biblioteca para fazer requisições http, porem tem algumas funcionalidades a mais que o fetch.

  //Fazer formatação dos dados vindos da API, apos a chamada da API evita de ter que executar toda vez que o componente sofer uma renderização.

  const episodes = data.map(episodes => {
    return {
      id: episodes.id,
      title: episodes.title,
      members: episodes.members,
      thumbnail: episodes.thumbnail,
      publishedAT: format(parseISO(episodes.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episodes.file.duration),
      durationAsString: convertDurationToTimeString(Number(episodes.file.duration)),
      url: episodes.file.url,
    };
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.lenght);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
      revalidate: 60 * 60 * 8 // A cada 8 hrs é feita uma nova solicitação de dados.
    }
  }
}