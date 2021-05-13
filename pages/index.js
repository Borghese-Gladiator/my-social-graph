import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
// utils
import mockData from '../utils/mock_data';
import { generateRandomNetwork } from '../utils/helpers';

export async function getStaticProps() {
  return {
    props: {
      mockData: mockData
    }
  }
}

export default function Home({ userGraph=[], setUserGraph, mockData }) {
  console.log(mockData)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Graph - Home</title>
        <meta name="description" content="Social network graph to display contact groups. Use default data through the home page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>BLAH</div>
      </main>
    </div>
  )
}