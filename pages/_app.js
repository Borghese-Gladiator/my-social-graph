import { useState } from 'react'
import '../styles/globals.css'
// layouts
import DefaultLayout from '../components/_layouts/DefaultLayout';

// Create Graph to hold data
import { Graph, Node } from '../utils/graph';
import { generateRandomNetwork } from '../utils/helpers';

function MyApp({ Component, pageProps }) {
  const [userGraph, setUserGraph] = useState(new Graph())

  const getLayout = Component.getLayout || (page => <DefaultLayout children={page} />)

  return getLayout(
    <Component {...pageProps} userGraph={userGraph} setUserGraph={setUserGraph} />
  )
}

export default MyApp;