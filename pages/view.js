import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/View.module.css'

export default function Home({ userGraph = [], setUserGraph }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Graph - Home</title>
        <meta name="description" content="Social network graph to display contact groups. View network graph here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>BLAH</div>
      </main>
    </div>
  )
}