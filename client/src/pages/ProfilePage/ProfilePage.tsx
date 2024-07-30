import { Card } from '@chakra-ui/react';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import TableLeaders from '../../components/TableLeaders/TableLeaders';
import './ProfilePage.css';
import { useAppSelector } from '../../redux/hooks';

type TUser = {
  username: string;
  score: number;
};

export default function ProfilePage(): ReactElement {
  const [userData, setUserData] = useState<TUser | null>(null);
  const user = useAppSelector((store) => store.userSlice.user);
  
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      fetchUserData();
    } else {
      console.error('userId не найден');
    }
  }, [userId]);

  const fetchUserData = async (): Promise<void> => {
    try {
      const response = await axios.get(`http://localhost:3100/api/profile/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  };
  console.log(user, '1111');

  return (
    <div className="profile-container">
      <Card className="card">       
          <>
            <h2 className="welcome-message">Привет, {user.username}!</h2>
            <p className="user-score">Ваш счёт: {user.score || 'нет'} очков</p>
          </>
      </Card>
      <div className="table-container">
        <TableLeaders />
      </div>
    </div>
  );
}
