import React from 'react';
import { useEffect, useState } from 'react';

function Coin() {
  const [loading, setLoading] = useState(true);
  //coins의 기본값으로 []최소 빈배열을 주는 이유는 .length했을 때 undefined는 길이를 갖고 있지 않기 때문이다.
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=100')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading ... </strong>
      ) : (
        <ul>
          {coins.map((coin, id) => (
            <li key={id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Coin;
