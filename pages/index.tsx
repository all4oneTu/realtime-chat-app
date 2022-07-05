import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import MainPage from '../components/MainPage';
const Home: NextPage = () => {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  if(!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <MainPage/>
    </div>
  )
}

export default Home
