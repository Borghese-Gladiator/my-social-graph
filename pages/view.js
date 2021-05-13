import Head from 'next/head'
import styles from '../styles/View.module.css';

export default function ViewPage({ userGraph={}, setUserGraph }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Graph - View Graph</title>
        <meta name="description" content="Social network graph to display contact groups. View network graph here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>VIEW</div>
      </main>
    </div>
  )
}