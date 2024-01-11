

import UseFetchCryptosApi from '../FetchCryptosApi';


const Home = () => {
    const cryptos = UseFetchCryptosApi();

  return (
    <div className='home'>
        {cryptos.map((crypto) => (
            <div className='crypto' key={crypto.id}>
               <div className='crypto-id'> 
               <p className='crypto-rating'>{crypto.market_cap_rank}</p>
                
                <img className="crypto-logo" src={crypto.image} alt='crypto'/>
                
                <h2>{crypto.name}</h2>
                </div>
                <p>{crypto.current_price}</p>
                <p className={crypto.price_change_percentage_24h < 0 ? 'negative' : 'positive'}><p className='price-text'>24H Change:</p> {crypto.price_change_percentage_24h.toFixed(2)}%</p>
                <p>Market Cap: {crypto.market_cap}</p>
            </div>
            )
        )}
    </div>
  )
}

export default Home