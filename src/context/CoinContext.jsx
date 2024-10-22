/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {


  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({ name: 'usd', symbol: '$' });

  const fetchAllCoin = async () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': `${import.meta.env.API_KEY}`}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }
  , [currency]);


  const contextValue = {
    allCoin,
    currency,
    setCurrency // burada setCurrency fonksiyonunu contextValue içine ekledik, bunlar birer state olduğu için setCurrency ile currency state'ini değiştirebiliriz.
  };


  return (
    <CoinContext.Provider value={{contextValue}}>
      {props.children}
    </CoinContext.Provider>
  );
}


export default CoinContextProvider;