import React, { useEffect, useState } from 'react';
import './TableLeaders.css';

interface Player {
  username: string;
  score: number;
}

const TableLeaders = () => {
  const [leaderData, setLeaderData] = useState<Player[]>([]);

  const giveLeaderData = async () => {
    try {
      const response = await fetch('http://localhost:3100/api/all/users');
      const data: Player[] = await response.json();
      const sortedData = data.sort((a, b) => b.score - a.score).slice(0, 10);
      setLeaderData(sortedData);
    } catch (error) {
      console.log('err', error);
    }
  };

  useEffect(() => {
    giveLeaderData();
  }, []);

  return (
    <div className="table-container">
      <div>
        <h2 className='tableName'>Таблица Лидеров</h2>
        <table>
          <thead>
            <tr>
              <th>Место</th>
              <th>Имя Игрока</th>
              <th>Счёт</th>
            </tr>
          </thead>
          <tbody>
            {leaderData.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableLeaders;
