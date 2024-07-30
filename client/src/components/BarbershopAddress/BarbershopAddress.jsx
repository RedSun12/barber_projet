import styles from './BarbershopAddress.module.css';
import insta from '../../assets/1.png';
import telega from '../../assets/2.png';
import wc from '../../assets/4.png';
import axiosInstance from '../../axiosInstance';
import { useEffect, useState } from 'react';
const { VITE_API } = import.meta.env;

export default function BarbershopAddress() {
  const [contacts, setContacts] = useState({
    adress: '',
    telephone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    (async function () {
      const { data } = await axiosInstance.get(`${VITE_API}/foto/contact/`);
      setContacts(data[0]);
    })();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = async () => {
    try {
      await axiosInstance.put(`${VITE_API}/foto/contact/`, contacts);
      setIsEditing(false);
    } catch (error) {
      console.error('Ошибка при сохранении изменений:', error);
    }
  };

  return (
    <div className={styles.contactInfo}>
      <h1 className={styles.heading}>Контактная информация</h1>
      {isEditing ? (
        <>
          <input
            className={styles.input}
            type="text"
            name="adress"
            value={contacts.adress}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            type="tel"
            name="telephone"
            value={contacts.telephone}
            onChange={handleInputChange}
          />
          <button className={styles.button} onClick={saveChanges}>
            Сохранить
          </button>
        </>
      ) : (
        <>
          <p className={styles.manager}>{contacts.adress}</p>
          <a className={styles.phone}>{contacts.telephone}</a>
          <button className={styles.button} onClick={toggleEdit}>
            Редактировать
          </button>
        </>
      )}
      <div className={styles.ss}>
        <img src={insta} alt="Instagram" className={styles.image} />
        <img src={telega} alt="Telegram" className={styles.image} />
        <img src={wc} alt="WeChat" className={styles.image} />
      </div>
    </div>
  );
}
