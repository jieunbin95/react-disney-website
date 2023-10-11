import axios from '../../api/axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const DetailPage = () => {
  const {movieId}=useParams()
  const [movies,setMovies]=useState({})
  const [movieDetail,setMovieDetail]=useState(false)
  const navigate=useNavigate()

  const fetchDate=async()=>{
    const request=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`)
    setMovies(request.data)
  }

  const ref=useRef(null)
  useOnClickOutside(ref,()=>{
    navigate('/main')
  })

  useEffect(()=>{
    fetchDate()
  },[movieId])

  if(!movies)return null
  console.log(movies)

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <img
            className="modal_poster-img"
            src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
          />

          <div className="modal_content">
            <p className="modal_details">
              <span className="modal_user_per">100% for you</span>{" "}
              {movies.release_date ? movies.release_date : movies.first_air_date}
            </p>

            <h2 className="modal_title">{movies.title ? movies.title : movies.name}</h2>
            <p className="modal_overview">평점:{movies.vote_average}</p>
            <p className="modal_overview">{movies.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
