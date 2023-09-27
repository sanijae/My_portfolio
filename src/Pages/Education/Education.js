import React from 'react'
import { Contaniner,Wrapper} from './Styled'
import EduCard from './EduCard'
import CertCard from './CertCard'

export default function Education() {
  return (
    <>
     <Contaniner>
        <Wrapper>
           <EduCard/>
           <CertCard/>
        </Wrapper>
     </Contaniner>
    </>
  )
} 
