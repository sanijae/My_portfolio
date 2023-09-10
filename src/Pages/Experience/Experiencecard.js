import React from 'react'
import { Card, CardHeader, CardNames, CardText, CardTitle, CardWrapper } from './Styled'
import { experiences } from '../../Assets/data'

export default function ExpCard() {
  return (
    <>
      <CardWrapper>
        {experiences.map((data,i)=>{
          return(
            <Card key={i}>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardNames>{data.company}</CardNames>
                <CardNames>{data.duration}</CardNames>
              </CardHeader>
              <CardText>{data.description}</CardText>
            </Card>
          )
        })}
      </CardWrapper>
    </>
  )
}
