
import styles from './HomePage.module.css';
import { Card } from '@chakra-ui/react';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'
import './HomePage.css';
// import { useNavigate } from 'react-router-dom'

type TState = {
  id:number | string,
  question:string | number,
  answer:string | number,
  themeId:string | number,
  topic:string | number,
}

type TData = {
  data: {cards: Record<any, any>[]}
}

export default function HomePage():ReactElement {

  const [presentCard, setPresentCard] = useState<TState[]>([]);

  const getAllCards = (): Promise<void> => {
    axios.get(
      `http://localhost:3100/api/all/cards`
    )
    .then((data: TData) => {
        const newData = data.data.cards.map((elem: Record<string, number | string>) => {
          return{
            id: elem.id,
            img: elem.img,
            name: elem.name,
          }
        })
      setPresentCard(newData)
    })
  }

  useEffect(() => {
    getAllCards();
  })
  
  return (
    <div className='homeP'>
      <div className="homeCard">
        <Card presentCard={presentCard} />
      </div>
    </div>

  )
}
