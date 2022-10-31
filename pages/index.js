import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Invest from '../components/Invest/Invest';
import Portfolio from '../components/Portfolio/Portfolio';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Angelhub</title>
        <meta name="description" content="Angelhub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container-md">
        <Invest/>
        <Portfolio />
    </main>
    </div>
  )
}
