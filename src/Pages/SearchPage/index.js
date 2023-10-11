import axios from '../../api/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './SearchPage.css'
import { useDebounce } from '../../hooks/useDebounce'

const SearchPage = () => {
  const [searchResults,setSearchResults]=useState([])
  const [keyWords,setKeywords]=useSearchParams()
  const navigate=useNavigate()

  const keyValue=keyWords.get('q')
  const debounceSearchTerm=useDebounce(keyValue,500)

  const fetchSearchMovie=async()=>{
    try{
     const request=await axios.get(`/search/multi?include_adult=false&query=${keyValue}`)
     setSearchResults(request.data.results)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    if(debounceSearchTerm){
      fetchSearchMovie(debounceSearchTerm)
    }
  },[debounceSearchTerm])


  if(searchResults.length>0){
      return (
        <section className='search-container'>
          {searchResults.map(item=>{
            if(item.backdrop_path !== null){
            const movieUrl='https://image.tmdb.org/t/p/w500'+item.backdrop_path;

            return (
              <div className="movie">
            <div onClick={()=>navigate(`/${item.id}`)} className="movie_column-poster">
              <img
                className="movie_poster"
                src={movieUrl}
              />
            </div>
          </div>
            )
          }}
            )}
        </section>
      )
  }else{
    return (
      <section className="no-results">
        <div className='no-results__text'>
          <p>
            찾고자 하는 검색어 '{keyValue}' 에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }
}

export default SearchPage
