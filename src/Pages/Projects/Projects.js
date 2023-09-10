import React from 'react'
import { Contaniner, Wrapper, Button } from './Styled'
import ProjectCard from './Projectcard'

export default function Projects() {
  return (
    <>
     <Contaniner>
        <Wrapper>
           <ProjectCard/>
           <Button to = 'https://github.com/sanijae' target='_blank'>More Projects</Button>
        </Wrapper>
     </Contaniner>
    </>
  )
}
