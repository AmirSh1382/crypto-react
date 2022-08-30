import React , { useState , useEffect } from 'react';

// Components
import Coin from './Coin';
import Loading from './Loading';

// Api
import getCoins from '../services/api';

// Styles
import styles from "./Landing.module.css"

const Landing = () => {

    const [ search , setSearch ] = useState("")
    const [ coins , setCoins ] = useState([])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            setCoins(await getCoins())
        }

        fetchData()
    } , [])

    const searchedCoins = coins.filter(coin => coin.name.toUpperCase().includes(search.toUpperCase()))

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input type="text" placeholder='Search' value={search} onChange={searchHandler}/>
            </div>

            {
                coins.length ? 
                    <div className={styles.coinsContainer}>
                        {searchedCoins.map(coin => <Coin key={coin.id} coinData={coin} />)}
                    </div> :

                    <Loading />
            }
        </div>            
    );
};

export default Landing