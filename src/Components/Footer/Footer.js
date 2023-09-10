import React from 'react'
import { Container, Rows,Row,Icon,IconEmail, Title, Wrapper } from './styled'
import {BiLogoTelegram,BiLogoLinkedin,BiLogoGithub} from 'react-icons/bi'
import {MdEmail,MdWhatsapp} from 'react-icons/md'
import { Media } from '../../Assets/data'

export default function Footer() {
  return (
    <>
     <Container>
      <Wrapper>
        <Rows>
          <Title>&copy;{new Date().getFullYear()}&nbsp;Sani Muhammad Sani</Title>
          <Row>
            <Icon to={Media.linkIn} target='_blank'>
              <BiLogoLinkedin/>
            </Icon>
            <Icon to={Media.git} target='_blank'>
              <BiLogoGithub/>
            </Icon>
            <IconEmail href={`mailto:${Media.email}`}>
              <MdEmail/>
            </IconEmail>
            <Icon to={Media.whatsapp} target='_blank'>
              <MdWhatsapp/>
            </Icon>
            <Icon to={Media.telegram} target='_blank'>
              <BiLogoTelegram/>
            </Icon>
          </Row>
        </Rows>
      </Wrapper>
     </Container>
    </>
  )
}
