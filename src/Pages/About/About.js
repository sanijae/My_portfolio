import React from 'react'
import { Contaniner, Header, HeaderRow, HeaderColumn,HeaderTitle, Wrapper, HeaderText, HeaderImg, HeaderImgs, Title, Text, CardIcons, Icon, IconEmail } from './Styled'
import { Aboutme, ContactData } from '../../Assets/data'
import {MdEmail,MdWhatsapp} from 'react-icons/md'
import {BiLogoTelegram,BiLogoLinkedin,BiLogoGithub} from 'react-icons/bi'
import { Media } from '../../Assets/data'
import EduCard from '../Education/EduCard'
import CertCard from '../Education/CertCard'

export default function About() {
  return (
    <>
     <Contaniner>
        <Wrapper>
        <Header>
            <HeaderRow>
                <HeaderImgs>
                    <HeaderImg alt='My Picture' src={Aboutme.picture} />
                </HeaderImgs>
                <HeaderColumn>
                    <HeaderTitle>{Aboutme.title}</HeaderTitle>
                    <Title>{Aboutme.subtitle}</Title>
                    <HeaderText>{Aboutme.description}</HeaderText>
                    <CardIcons>
                        <IconEmail href={`mailto:${Media.email}`}>
                           <MdEmail/>
                        </IconEmail>
                        <Icon to={Media.whatsapp} target='_blank'>
                           <MdWhatsapp/>
                        </Icon>
                        <Icon to={Media.telegram} target='_blank'>
                           <BiLogoTelegram/>
                        </Icon>
                        <Icon to={Media.git} target='_blank'>
                           <BiLogoGithub/>
                        </Icon>
                        <Icon to={Media.linkIn} target='_blank'>
                           <BiLogoLinkedin/>
                        </Icon>
                    </CardIcons>
                </HeaderColumn>
            </HeaderRow>
            <EduCard/>
            <CertCard/>
            <HeaderRow>
                <HeaderImgs>
                    <HeaderImg alt='My Picture' src={ContactData.picture} />
                </HeaderImgs>
                <HeaderColumn>
                    <Title>{ContactData.title}</Title>
                    <Text>Phone: &nbsp;{ContactData.subtitle}</Text>
                    <Text>Email: &nbsp;{Media.email}</Text>
                    <Text>LinkedIn: &nbsp;{Media.linkIn}</Text>
                    <Text>Github: &nbsp;{Media.git}</Text>
                    <Text>City: &nbsp;{ContactData.city}</Text>
                    <Text>Postal Code: &nbsp;{ContactData.postalCode}</Text>
                    <Text>Nationality: &nbsp;{ContactData.locality}</Text>
                </HeaderColumn>
            </HeaderRow>
        </Header>
        </Wrapper>
     </Contaniner>
    </>
  )
}
