import React from 'react'
// Next.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// utils
import mockData from '../utils/mock_data';
// custom components
import ForceGraph from '../components/ForceGraph';

export async function getStaticProps() {
  return {
    props: {
      mockData: mockData
    }
  }
}

export default function Home({ userGraph = {}, setUserGraph, mockData }) {
  const data = mockData

  const nodeHoverTooltip = React.useCallback((node) => {
    console.log(node)
    return `<div>${node.name}</div>`;
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Social Graph - Home</title>
        <meta name="description" content="Social network graph to display contact groups. Use default data through the home page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>HOME</div>
        <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
      </main>
    </div>
  )
}