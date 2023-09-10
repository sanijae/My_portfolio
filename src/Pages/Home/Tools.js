import React from 'react'
import { Card, ToolsGrid, ToolsImg } from './Styled'
import { ToolsData } from '../../Assets/ToolsData'

export default function ToolsCard() {
  return (
    <>
      <ToolsGrid>
        {ToolsData.map((data,i)=>{
          return(
            <Card key={i}>
              <ToolsImg src={data.image} alt='Dashboard' />
            </Card>
          )
        })}
      </ToolsGrid>
    </>
  )
}
