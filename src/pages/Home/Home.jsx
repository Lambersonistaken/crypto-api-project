/* eslint-disable no-unused-vars */

import './Home.css'
import { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'


const Home = () => {

  const {allCoin, currency} = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])

  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin]) // 1.09

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the worlds largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form>
            <input type="text" placeholder='Search for crypto...' />
            <button type='submit'>Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className='table-layout'>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign: "center"}}>24H Change</p>
            <p className='market-cap'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home
