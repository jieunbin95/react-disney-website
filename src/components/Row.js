import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// import swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelcted, setMovieSelcted] = useState({});

  const fetchMovieDate = async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovieDate();
  }, []);

  const handleClick = (item) => {
    setModalOpen(true);
    setMovieSelcted(item);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        loop={true} //loop기능을 사용할 것인지
        navigation //arrow버튼 사용 유무
        pagination={true}
        breakpoints={{
          1378:{
            slidesPerView:6, //한번에 보이는 슬라이드 개수
            slidesPerGroup:6,
          },
          998:{
            slidesPerView:5,  //한번에 보이는 슬라이드 개수
            slidesPerGroup:5,
          },
          625:{
            slidesPerView:4,  //한번에 보이는 슬라이드 개수
            slidesPerGroup:4,
          },
          0:{
            slidesPerView:3,  //한번에 보이는 슬라이드 개수
            slidesPerGroup:3,
          }
        }}
      >
        <Content id={id}>
          {movies.map((item) => (
            <SwiperSlide>
              <Wrap>
                <img
                  onClick={() => handleClick(item)}
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelcted} setModalOpen={setModalOpen} />
      )}
    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div``;

const Wrap = styled.div`
  width:95%;
  height:95%;
  padding-top:56.25%;
  border-radius:10px;
  cursor:pointer;
  border:3px solid rgba(249,249,249,.1);
  transition:all .5s ease-in-out;
  overflow:hidden;
  position:relative;

  img{
    inset:0;
    display:block;
    height:100%;
    width:100%;
    object-fit:cover;
    position:absolute;
    transition:all .5s ease-in-out;
    z-index:1;
  }

  &:hover{
    transform: scale(0.98);
    border-color:rgba(249,249,249,.8);
`;
