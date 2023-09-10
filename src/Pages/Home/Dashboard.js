import React from 'react'
import { Card, CardImg, ItemsGrid } from './Styled'
import { Dash } from '../../Assets/dashData'

export default function Dashboard() {
  return (
    <>
      <ItemsGrid>
        {Dash.map((data,i)=>{
          return(
            <Card key={i}>
              <CardImg src={data.image} alt='Dashboard' />
            </Card>
          )
        })}
      </ItemsGrid>
    </>
  )
}
