import { currencyIcons } from "./currencyicons";
import styles from "./CurrencyListItem.module.scss";
function CurrencyListItem({
  name,
  symbol,
  rank,
  price_usd,
  percent_change_24h,
  percent_change_1h,
  percent_change_7d,
  market_cap_usd,
  volume24a,
}) {
  const market_cap_crypto = Math.round(volume24a / price_usd);
  const market_cap_usd_round = Math.round(market_cap_usd);

  return (
    <tr>
      <td className={styles.rank}>{rank}</td>
      <td className={styles.imgCurrBox}>
        <img src={currencyIcons[symbol]} alt="" className={styles.imagesCurrency} />
      </td>
      <td className={styles.name}>{name}</td>
      <td className={styles.symbol}>{symbol}</td>
      {percent_change_1h > 0 && <p style={{color: "green"}} className={styles.priceRes}>↑{price_usd} $</p>}
      {percent_change_1h < 0 && <p style={{color: "red"}} className={styles.priceRes}>↓{price_usd} $</p>}
      {percent_change_1h == 0 && <p style={{color: "black"}} className={styles.priceRes}>{price_usd} $</p>}
      <td className={styles.price_usd}>{price_usd} $</td>
      <td className={styles.pc1}>
        {percent_change_1h > 0 && <p className={styles.percent_change_1h_gr}>↑{percent_change_1h}</p>}
        {percent_change_1h < 0 && <p className={styles.percent_change_1h_re}>↓{percent_change_1h}</p>}
        {percent_change_1h == 0 && <p className={styles.percent_change_1h_bl}>{percent_change_1h}</p>}
      </td>
      <td className={styles.pc24}>
        {percent_change_24h > 0 && <p className={styles.percent_change_24h_gr}>↑{percent_change_24h}</p>}
        {percent_change_24h < 0 && <p className={styles.percent_change_24h_re}>↓{percent_change_24h}</p>}
        {percent_change_24h == 0 && <p className={styles.percent_change_24h_bl}>{percent_change_24h}</p>}
      </td>
      <td className={styles.pc7}>
        {percent_change_7d > 0 && <p className={styles.percent_change_7d_gr}>↑{percent_change_7d}</p>}
        {percent_change_7d < 0 && <p className={styles.percent_change_7d_re}>↓{percent_change_7d}</p>}
        {percent_change_7d == 0 && <p className={styles.percent_change_7d_bl}>{percent_change_7d}</p>}
      </td>
      <br className={styles.brRes}/>
      <td className={styles.marketcap}>{market_cap_usd_round} $</td>
      <td className={styles.crypto}>{market_cap_crypto} {symbol}</td>
    </tr>
  );
}
export default CurrencyListItem;
