import { getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Nav = () => {

  const initialUserData=localStorage.getItem('userData') ?
   JSON.parse(localStorage.getItem('userData')) : {};
  // string타입을 다시 객체로 변환하고자 할 때 parse를 사용

  const [showhandle,setShowHandle]=useState(false)
  const {pathname}=useLocation()
  const [searchValue,setSearchValue]=useState('')
  const navigate=useNavigate()
  const auth = getAuth()
  const provider=new GoogleAuthProvider()
  const [userData,setUserDate]=useState(initialUserData)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        if(pathname==='/'){
          navigate('/main')
        }
      }else{
        navigate('/')
      }
    })
  },[auth, navigate, pathname])

  useEffect(()=>{
    handScroll()
  },[])

  const handScroll=()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>50){
      setShowHandle(true)
    } else {
      setShowHandle(false)
    }
    })
  }

  const handleChange=(event)=>{
    setSearchValue(event.target.value)
    navigate(`/search?q=${event.target.value}`)
  }
  
  const handleAuth=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      setUserDate(result.user)
      localStorage.setItem('userData',JSON.stringify(result.user))
      // 새로고침시에도 유저의 정보가 남아있어야 함으로 localStorage에 다시 유저의 정보를 담아준다
      // 객체나 배열을 저장할 경우 JSON.stringify를 이용해 텍스트로 변환 후 저장해준다
    })
    .catch((e)=>{
      console.log(e.message)
    })
  }

  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      userData({})
      navigate('/')
    })
    .catch((e)=>{
      console.log(e.message)
    })
  }

  return (
    <NavWrapper showhandle={showhandle}>
      <Logo onClick={()=>navigate('/')}>
        <img 
        src='/images/logo.svg'/>
      </Logo>

      {pathname==="/"?<Login onClick={handleAuth}>Login</Login>:
      <>
       <Input 
      onChange={(event)=>handleChange(event)}
      className="nav_input"
      placeholder='영화를 검색해주세요'></Input>
      
      <SignOut>
        <UserImg src={userData.photoURL} alt={userData.displayName}/>
        <DropDown>
          <span onClick={handleSignOut}>Sign Out</span>
        </DropDown>
      </SignOut>
      </>
      }
    </NavWrapper>
  )
}

export default Nav

const DropDown=styled.div`
  position:absolute;
  left:-90px;
  top:20px;
  letter-spacing:3px;
  cursor:pointer;
  opacity:0;
`

const SignOut=styled.div`
  position:relative;
  height:48px;
  width:48px;
  display:flex;
  cursor:pointer;
  align-items:center;
  justify-content:center;

  &:hover{
    ${DropDown}{
      opacity:1;
      transition-duration:1s;
    }
  }

`

const UserImg=styled.img`
 width:100%;
 height:100%;
 border-radius:50%;
`

const Login=styled.a`
 background-color:rgba(0,0,0,0.6);
 padding:8px 16px;
 text-transform:uppercase;
 letter-spacing:1.5px;
 border:1px solid #f9f9f9;
 transition:.2s ease;
 cursor:pointer;

 &:hover{
  background-color:#f9f9f9;
  color:#000;
  border-color:transparent;
 }
`

const Input =styled.input`
  position:fixed;
  left:50%;
  transform:translate(-50%,0);
  // 화면 가운데 위치 시키는 법 왼쪽으로 절반 위치시킨다음 transform:translate이용해 다시 반대로 절반 이동
  background-color:rgba(0,0,0,0.582);
  color:white;
  padding:10px;
  border:none;
  outline:none;
`

const NavWrapper=styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props=>props.showhandle?'#090b13':'transparent'};
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing:16px;
  z-index:3;
`

const Logo=styled.a`
  width:80px;
  cursor:pointer;
  margin-top:4px;
  max-height:70px;
  display: inline-block;
  // 인라인으로 설정할 경우 다른 엘리먼트들이 수평으로 위치,block으로 설정할 경우 넓이나 높이,패딩등을 설정할 수 있다
 
  img{
    display:block;
    width:100%;
  }
  `