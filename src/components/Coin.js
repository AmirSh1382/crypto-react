import React from "react";

// Styles
import styles from "./Coin.module.css"

const Coin = ({ coinData }) => {
  const {
    image,
    name,
    symbol,
    current_price,
    market_cap,
    price_change_percentage_24h,
  } = coinData;

  return (
    <div className={
      `${styles.container} 
      ${price_change_percentage_24h < 0 ?
      styles.redPriceChange :
      styles.greenPriceChange
    }`}>
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>{symbol.toUpperCase()}</span>
      <span>$ {current_price.toLocaleString()}</span>
      <span>{price_change_percentage_24h.toFixed(2)}%</span>
      <span>{market_cap.toLocaleString()}</span>
    </div>
  )
};

export default Coin;