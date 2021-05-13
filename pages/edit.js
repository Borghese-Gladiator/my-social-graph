import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

// Create Graph to hold data
import { Graph, Node } from '../utils/graph';
import { generateRandomNetwork } from '../utils/helpers';

export default function Home() {
  const [graph, setGraph] = useState(new Graph())
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        const mockData = generateRandomNetwork(res, graph, 150);
        setGraph(mockData)
      })
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Graph - Edit</title>
        <meta name="description" content="Social network graph to display contact groups. Edit the content displayed by the graph." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>BLAH</div>
      </main>
    </div>
  )
}
