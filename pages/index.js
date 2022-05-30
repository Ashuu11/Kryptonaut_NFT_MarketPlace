import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Head from 'next/head'
import Main from '../components/Home/index'

const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-white px-10 py-5 transition-all hover:bg-white hover:text-black`,
}

const Home = () => {

  const connectWithMetamask  = useMetamask()
  const address = useAddress()

  console.log(address)

  const Auth = () => {
    return(
    <div className={style.wrapper}>
      <Head>
        <title>Kryponaut NFT MarketPlace</title>
      </Head>
       <video src='/nft.mp4' type="video/mp4" loop controls={false} muted autoPlay className='fixed object-cover w-full h-ful -z-10'/>
        <button onClick={connectWithMetamask} className={style.connectWalletButton}>Connect MetaMask</button>
      </div>
    )
  }

  return <>{address ? <div><Main/></div> : Auth()}</>

}

export default Home
