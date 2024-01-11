import { useState, useEffect } from "react";
import axios from "axios";

const UseFetchCryptosApi = () => { 

    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc`)
        .then(res => {
            setCryptos(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);


    return cryptos;
}

export default UseFetchCryptosApi;