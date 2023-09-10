import React from 'react'
import { Card, CardContent, CardHeader, CardNames, CardText, CardTitle, CardWrapper, Title } from './Styled'
import { degrees } from '../../Assets/data'

export default function EduCard() {
  return (
    <>
      <CardWrapper>
        <Title>Education</Title>
        {degrees.map((data,i)=>{
          return(
            <Card key={i}>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardNames>{data.subtitle}</CardNames>
                <CardNames>{data.duration}</CardNames>
              </CardHeader>
              <CardContent>
                {data.descriptions.map((desc,i)=>{
                  return <CardText key={i}>{desc}</CardText>
                })
                }
              </CardContent>
              <CardText>{data.description}</CardText>
            </Card>
          )
        })}
      </CardWrapper>
    </>
  )
}
