import React from 'react'
import { ButtonMore, Card, CardButton, CardHeader, CardText,BWrapper, CardTitle, Grid, Wrapper } from './Styled'
import { ProjectData } from '../../Assets/ProjectData'

export default function ProjectCard() {

  return (
    <>
      <Wrapper>
      <CardTitle>My Projects</CardTitle>
      <Grid>
        {ProjectData.map((data,i)=>{
          return(
            <Card key={i}>
              <CardHeader> 
                <CardTitle>{data.name}</CardTitle>
              </CardHeader>
              <CardText>{data.description}</CardText>
              <CardButton to={data.url} target='_blank'>Check This Projects</CardButton>
            </Card>
          )
        })}
      </Grid>
      <BWrapper>
        <ButtonMore to='https://github.com/sanijae?tab=repositories' target='_blank'>More Projects</ButtonMore>
      </BWrapper>
      </Wrapper>
    </>
  )
}
