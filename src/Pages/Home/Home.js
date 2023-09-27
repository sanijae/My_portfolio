import React from 'react'
import { Contaniner, Header, HeaderRow, HeaderColumn,HeaderTitle,CardIcons,Icon,IconEmail,
     Wrapper, HeaderText, HeaderImg, HeaderImgs, HeaderButton, AuthorTitle, CardWrapper,
     Links } from './Styled'
import { Headers} from '../../Assets/data'
import Dashboard from './Dashboard'
import ProjectCard from '../Projects/Projectcard'
import ToolsCard from './Tools'
import {MdEmail,MdWhatsapp} from 'react-icons/md'
import {BiLogoTelegram,BiLogoLinkedin,BiLogoGithub} from 'react-icons/bi'
import { Media } from '../../Assets/data'

export default function Home() {
  return (
    <> 
     <Contaniner>
        <Wrapper>
            <Header>
                <HeaderRow>
                    <HeaderColumn>
                        <HeaderTitle>{Headers.title}</HeaderTitle>
                        <AuthorTitle>{Headers.nickname}</AuthorTitle>
                        <HeaderText>{Headers.subTitle}</HeaderText>
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
                    <HeaderButton>
                        <Links to={Headers.resume} target='_blank'>My Resume</Links>
                    </HeaderButton>
                    </HeaderColumn>
                    <HeaderImgs>
                        <HeaderImg alt='My Picture' src={Headers.logo_name} />
                    </HeaderImgs>
                </HeaderRow>
            </Header> 
            <CardWrapper>
                <Dashboard/>
            </CardWrapper>
            <CardWrapper>
                <ProjectCard/>
            </CardWrapper>
            <CardWrapper>
                <ToolsCard/>
            </CardWrapper>
        </Wrapper>
     </Contaniner>
    </>
  )
}
