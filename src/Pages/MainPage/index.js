import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Row from '../../components/Row';
import request from '../../api/request';


const MainPage = () => {
  return (
      <Container>
      <Nav/>
      <Banner/>
      <Category/>
      <Row title='Trending Now' id='TN' fetchUrl={request.fetchTrending}/>
      <Row title='Top Rated' id='TR' fetchUrl={request.fetchTopRated}/>
      <Row title='Action Movies' id='AN' fetchUrl={request.fetchActionMovies}/>
      <Row title='Comedy Movies' id='CM' fetchUrl={request.fetchComedyMovies}/>
    </Container>
  )
}

export default MainPage

const Container=styled.main`
  position: relative;
  min-height:calc(100vh - 250px);
  overflow-x: hidden;
  top:72px;
  padding: 0 40px;
  
  &:after{
    background:url('/images/home-background.png');
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    position:absolute;
    inset:0;
    // absolute로 띄운 상태에서 0을 주면 가용공간이 relative전체로 늘어난다
    content:'';
    z-index:-1;
    // 배너에 영화 이미지가 들어야가 함으로 -1를 넣어준다
  }
`