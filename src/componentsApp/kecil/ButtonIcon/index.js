import React from 'react'
import styled from 'styled-components'
import { fonts, mobile } from '../../../utils'
import { Link } from 'react-router-dom'

const Container = styled(Link)`
cursor: pointer;
text-decoration: none ;
:hover{
  background-color: #bcbcbc ;
}
${mobile({height: "30px"})}
`
const ContainerIcon = styled.div``

const Label = styled.p`
  font-family: ${fonts.montserrat} ;
  ${mobile({fontSize: "12px"})}
`

const ButtonIcon = ({label, icon, styleLabel, ...rest}) => {
  return (
   <Container {...rest}>
     <ContainerIcon>
       {icon}
     </ContainerIcon>
     <Label style={styleLabel}>{label}</Label>
   </Container>
  )
}

export default ButtonIcon