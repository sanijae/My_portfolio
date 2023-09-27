import React from 'react'
import { Card, CardImg, DashWrapper, ItemsGrid,BWrapper,Button, Title } from './Styled'
import { Dash } from '../../Assets/dashData'

export default function Dashboard() {
  return (
    <>
      <DashWrapper>
        <Title>Dashboard</Title>
      <ItemsGrid>
        {Dash.map((data,i)=>{
          return(
            <Card key={i}>
              <CardImg src={data.image} alt='Dashboard' />
            </Card>
          )
        })}
      </ItemsGrid>
      <BWrapper>
        <Button to='https://github.com/sanijae/Data-Analysis_Report-June-2023' target='_blank'>More Dashboard</Button>
      </BWrapper>
      </DashWrapper>
    </>
  ) 
}
