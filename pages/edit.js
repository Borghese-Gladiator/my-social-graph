import Head from 'next/head'
import styles from '../styles/Edit.module.css';

export default function EditPage({ userGraph={}, setUserGraph }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Graph - Edit Data</title>
        <meta name="description" content="Social network graph to display contact groups. Edit the content displayed by the graph." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>EDIT</div>
      </main>
    </div>
  )
}