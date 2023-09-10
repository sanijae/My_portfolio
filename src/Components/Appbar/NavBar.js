import React, { useState } from 'react'
import { AppBar, BrandTitle, Hamburger, Icon, IconEmail, Icons, Nav, NavItem, Row } from './styled'
import {MdMenuOpen,MdEmail,MdWhatsapp} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import {BiLogoTelegram,BiLogoLinkedin,BiLogoGithub} from 'react-icons/bi'
import {Headers, Media } from '../../Assets/data'

export default function NavBar() {
  const [show,setShow] = useState(false)
  const navigate = useNavigate()

  return ( 
    <>
      <AppBar>
        <Row>
          <BrandTitle onClick={()=>navigate('/')}>Muhammad Sani</BrandTitle>
          <Nav show={show} onClick={()=>setShow(!show)}>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/Experiences'>Experience</NavItem>
            <NavItem to='/Projects'>Projects</NavItem>
            <NavItem to='/Education'>Education</NavItem>
            <NavItem to='/About'>About</NavItem>
            <NavItem to={Headers.resume} target='_blank'>Resume</NavItem>
          </Nav>
          <Icons>
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
          </Icons>
          <Hamburger>
            <MdMenuOpen onClick={()=>setShow(!show)}/>
          </Hamburger>
        </Row>
      </AppBar>
    </>
  )
}
