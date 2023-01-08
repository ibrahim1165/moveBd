import Head from 'next/head'
import requests from '../utils/requests'
import { Header } from '../components/Header'
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import Results from '../components/Results'

export default function Home({results}) {
  // console.log(results);
  return (
    <>
      <Head>
        <title>Move Site</title>
        <meta name="description" content="Move Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Nav />
    <HeroSection />
    <Results results={results} />
    </>
  )
}

export async function getServerSideProps (context){
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res)=> res.json());

  return{
    props: {
      results: request.results
    }
  }
}