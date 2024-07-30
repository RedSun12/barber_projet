import YandexMaps from "../../components/YandexMaps/YandexMaps"
import styles from './Contacts.module.css';
import BarbershopPhoto from "../../components/BarbershopPhoto/BarbershopPhoto";
import BarbershopAddress from "../../components/BarbershopAddress/BarbershopAddress";


export default function Contacts() {
  return (
    <div className={styles.map}>
      <BarbershopPhoto />
      <div className={styles.horizontalWrapper}>
        <YandexMaps />
        <BarbershopAddress />
      </div>
    </div>
  )
}
