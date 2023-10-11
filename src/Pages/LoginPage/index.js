import React from 'react'
import styled from 'styled-components'

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src='/images/cta-logo-one.svg' alt='logo-one'/>
          <SignUpLink>지금가입</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오.
            디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src='/images/cta-logo-two.png' alt='logo-two'/>
        </Center>
        <BgImage/>
      </Content>
    </Container>
  )
}

export default LoginPage

const Container=styled.section`
  display:flex;
  flex-direction:column;
  text-align:center;
  height:100vh;
  overflow:hidden;
`

const Content=styled.div`
  min-height:100vh;
  position:relative;
  min-height:100vh;
  display:flex;
  justify-content:center;
  flex-direction:column;
  padding:80px 40px;
  width:100%;
  box-sizing: border-box;
  height:100%;
  align-items: center;
`

const Center=styled.div`
  max-width:650px;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const BgImage=styled.div`
  height:100%;
  position: absolute;
  background-position:top;
  background-image: url('/images/login-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  top:0;
  right:0;
  left:0;
  z-index:-1;
`

const LogoOne=styled.img`
  width:100%;
  display:block;
  max-width:600px;
  min-height:1px;
  margin-bottom:12px;
`

const SignUpLink=styled.a`
  font-weight:bold;
  color:#f9f9f9;
  background-color:#0063e5;
  margin-bottom:12px;
  width:100%;
  letter-spacing:1.5px;
  font-size:18px;
  padding:16.5px 0;
  border:1px solid transparent;
  border-radius:4px;
  cursor:pointer;

  &:hover{
    background-color:#0483ee;
  }
`

const Description=styled.p`
  color:gray;
  font-size:11px;
  line-height:1.5;
  margin:0 0 24px;
  letter-spacing:1.5px;
`

const LogoTwo=styled.img`
 max-width:600px;
 margin-bottom:20px;
 display:inline-block;
 vertical-align:bottom;
 width:100%;
`