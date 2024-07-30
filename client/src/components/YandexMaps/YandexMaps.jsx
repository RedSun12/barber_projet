import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMaps = () => {
  const defaultCenter = [50.592515, 36.580297];
  const defaultPlacemark = [50.592515, 36.580297];

  const savedPlacemarks = JSON.parse(localStorage.getItem('placemarks')) || [
    defaultPlacemark,
  ];

  const [placemarks, setPlacemarks] = useState(savedPlacemarks);
  const [mapCenter, setMapCenter] = useState(
    savedPlacemarks[0] || defaultCenter
  );
  const [canAddPlacemarks, setCanAddPlacemarks] = useState(
    placemarks.length === 0
  );

  const handleMapClick = (event) => {
    if (canAddPlacemarks) {
      const coords = event.get('coords');
      const newPlacemarks = [...placemarks, coords];
      setPlacemarks(newPlacemarks);
      localStorage.setItem('placemarks', JSON.stringify(newPlacemarks));
      setCanAddPlacemarks(false); // Запрещаем дальнейшее добавление меток
    }
  };

  useEffect(() => {
    if (placemarks.length > 0) {
      setMapCenter(placemarks[placemarks.length - 1]);
    }
  }, [placemarks]);

  return (
    <YMaps query={{ apikey: '3933aaf8-188b-4736-a7e4-b57c2ee1baeb'}}>
      <Map
        defaultState={{ center: mapCenter, zoom: 15 }}
        width="700px"
        height="400px"
        onClick={handleMapClick}
      >
        {placemarks.map((coordinates, index) => (
          <Placemark key={index} geometry={coordinates} />
        ))}
      </Map>
    </YMaps>
  );
};

export default YandexMaps;
