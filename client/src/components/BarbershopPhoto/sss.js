// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// const { VITE_API } = import.meta.env;
// import axiosInstance from '../../axiosInstance';

// const SliderWrapper = styled.div`
//   position: relative;
//   width: 800px;
//   height: 400px;
//   overflow: hidden;
//   border: 1px solid #ddd;
//   border-radius: 10px;
// `;

// const Slide = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   transition: transform 0.5s ease-in-out;
//   transform: ${(props) => `translateX(${props.translate}px)`};
// `;

// const SlideImage = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// const NavButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background-color: rgba(255, 255, 255, 0.5);
//   border: none;
//   cursor: pointer;
//   font-size: 2rem;
//   z-index: 2;
//   user-select: none;
//   &:focus {
//     outline: none;
//   }
// `;

// const PrevButton = styled(NavButton)`
//   left: 10px;
// `;

// const NextButton = styled(NavButton)`
//   right: 10px;
// `;

// const BarbershopPhoto = () => {
//   const [index, setIndex] = useState(0);
//   const [fotos, setFotos] = useState([]);

//   useEffect(() => {
//     const lastIndex = fotos.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     } else if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index]);


//   useEffect(() => {
//     const autoPlay = setInterval(() => setIndex((prevIndex) => prevIndex + 1), 3000);
//     return () => clearInterval(autoPlay);
//   }, []);

//     useEffect(() => {
//     (async function () {
//       const { data } = await axiosInstance.get(
//         `${import.meta.env.VITE_API}/foto`
//       );
//       setFotos(data);
//     })();
//   }, []);

//   return (
//     <SliderWrapper>
//       <Slide translate={-index * 800}>
//         {fotos.map((image, idx) => (
//           <SlideImage key={image.id} src={image.foto} alt={`Slide ${idx + 1}`} />
//         ))}
//       </Slide>
//       <PrevButton onClick={() => setIndex(index - 1)}>&#10094;</PrevButton>
//       <NextButton onClick={() => setIndex(index + 1)}>&#10095;</NextButton>
//     </SliderWrapper>
//   );
// };

// export default BarbershopPhoto;

