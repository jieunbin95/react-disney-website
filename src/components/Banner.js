import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../api/axios'
import request from '../api/request'
import "./Banner.css";
import styled from 'styled-components'

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [isClicked,setIsClicked]=useState(false)

  useEffect(()=>{
    fetchData()
  },[])

  // 현재 상영중인 영화 정보 가져오기
  const fetchData= async () =>{
    const response=await axios.get(request.fetchNowPlaying)
    
    // 현재 상영중인 영화 중 하나의 id를 가져오기
    const movieId=response.data.results[
     Math.floor(Math.random() * response.data.results.length)].id
    
    // 가져온 id를 이용해 비디오도 가져오기
    const { data : movieDetails } = await axios.get(`movie/${movieId}`,
    {params: {append_to_response:"videos"}})
    setMovies(movieDetails);
  }

  if(isClicked){
    return(
      <>
      <button className="banner_button" onClick={()=>setIsClicked(false)}>닫기</button>
      <Container>
        <HomeContainer>
          <Iframe
           src={`https://www.youtube.com/embed/${movies?.videos.results[0].key}?autoplay=true`}
           width='640'
           height='360'
           frameborder='0'
           allow='autoplay;'>
          </Iframe>
        </HomeContainer>
      </Container>
      </>
    )
  }else{
    return (
    <header 
      className="banner"  style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover"
      }}>

      <div className="banner_contents">
       <h1 className="banner_title">{movies.title}</h1>
       <div className="banner_buttons" onClick={()=>setIsClicked(true)}>
        {movies?.videos?.results[0]?.key && <button className="banner_button play">play</button>}
       </div>

       <p className="banner_description">
        {movies?.overview?.length>200? movies.overview.substring(0,200)+'...':movies.overview}
       </p>
      </div>

      <div className='banner_fadeBottom'></div>
    </header>
  )
  }

}

export default Banner

const Container=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
  height:100vh;
`
const HomeContainer=styled.div`
  width:100%;
  height:100vh;
`

const Iframe =styled.iframe`
  width:100%;
  height:100%;
  border:none;


  // play버튼시 영상이 나오는 css
  &::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`