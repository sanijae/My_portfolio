import React from 'react'
import { Card, CardButton, CardHeader, CardText, CardTitle, Grid } from './Styled'
import { ProjectData } from '../../Assets/ProjectData'

export default function ProjectCard() {

  return (
    <>
      <Grid>
        {ProjectData.map((data,i)=>{
          return(
            <Card key={i}>
              <CardHeader>
                <CardTitle>{data.name}</CardTitle>
              </CardHeader>
              <CardText>{data.language}</CardText>
              <CardButton to={data.url} target='_blank'>Check This Projects</CardButton>
            </Card>
          )
        })}
      </Grid>
    </>
  )
}
