import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
        <video autoPlay loop muted>
          <source src='/videos/disney.mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png'/>
        <video autoPlay loop muted>
          <source src='/videos/marvel.mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png'/>
        <video autoPlay loop muted>
          <source src='/videos/national-geographic.mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png'/>
        <video autoPlay loop muted>
          <source src='/videos/star-wars.mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png'/>
        <video autoPlay loop muted>
          <source src='/videos/pixar.mp4'/>
        </video>
      </Wrap>
    </Container>
  )
}

export default Category

const Container=styled.div`
  margin-top:30px;
  padding:30px 0px 26px;
  display:grid;
  gap:25px;
  grid-template-columns:repeat(5,1fr);

  @media(max-width:768px){
    grid-template-columns:repeat(1,1fr);
  }
`

const Wrap = styled.div`
 padding-top:56.25%;
 border-radius:10px;
 cursor:pointer;
 overflow:hidden;
 box-shadow:rgba(0 0 0/69%) 0px 26px 30px -10px;
 position:relative;
 border:3px solid rgba(249,249,249,.1);
 transition: 2.5s cubic-bezier(.25, .46, .45, .94) .2s;

 img{
  inset:0;
  opacity:1;
  display:block;
  height:100%;
  object-fit:cover;
  width:100%;
  z-index:1;
  position:absolute;
  transition: opacity .5s ease-in-out;
 }

 video{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  opacity:0;
  z-index:0;
 }

 &:hover{
  box-shadow: rgba(0 0 0/80%) 0 40px 58px -16px;
  transform:scale(1.05);
  border-color:rgba(249,249,249,.8);

  video {
    opacity: 1;
  }
 }
`