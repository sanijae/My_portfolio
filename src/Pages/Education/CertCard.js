import React from 'react'
import { CardContent, CardNames, CardTitle, ItmCard,ItemsGrid, CardImg, Title } from './Styled'
import { certData } from '../../Assets/data'

export default function CertCard() {
  return (
    <>
      <Title>Certificates</Title>
      <ItemsGrid>
        {certData.map((data,i)=>{
          return(
            <ItmCard key={i}>
              <CardContent>
                <CardTitle>{data.title}</CardTitle>
                <CardNames>{data.subtitle}</CardNames>
               <CardImg alt={data.alt_name} src={data.picture} />
              </CardContent>
            </ItmCard>
          )
        })}
      </ItemsGrid>
    </>
  )
}
