import React from 'react'
import styled from "styled-components"

const Container = styled.div`
width: 100vw ;
height: 100vh ;
display: flex ;
flex-direction: column ;
justify-content: center ;
align-items: center ;
`

const Text = styled.h1`

`


const ErrorPage = () => {
  return (
   <Container>
     <Text>Ops... Error Page 🙈</Text>
     <a href='https://e-undang.herokuapp.com/'>Kembali</a>
   </Container>
  )
}

export default ErrorPage