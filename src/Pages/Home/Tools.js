import React from 'react'
import { Card, DashWrapper, Title,ToolsGrid, ToolsImg} from './Styled'
import { ToolsData } from '../../Assets/ToolsData'

export default function ToolsCard() {
  return (
    <>
      <DashWrapper>
      <Title>Capable to use this tools</Title>
      <ToolsGrid>
        {ToolsData.map((data,i)=>{
          return(
            <Card key={i}>
              <ToolsImg src={data.image} alt='Dashboard' />
            </Card>
          )
        })}
      </ToolsGrid>
      </DashWrapper>
    </>
  )
}
