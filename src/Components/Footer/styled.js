import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container  = styled.div`
width:100%;
padding: 0px;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #4B1073;
align-items: center;
`
export const Wrapper = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
padding: 2em;
` 
export const Row = styled.div`
display: flex;
width: fit-content;
align-items: center;
background-color: transparent;
`
export const Rows = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
padding: 10px;
background-color: transparent;

@media screen and (max-width:700px){
    flex-direction: column;
}
`
export const Title = styled.div`
font-size: 1em;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
`
export const Icon = styled(Link)`
cursor: pointer;
padding: 10px;
background-color: transparent;
color: #fff;
display: flex;
align-items: center;
font-size: 30px;
font-weight: bold;
cursor: pointer; 
list-style: none;
text-decoration: none;
`
export const IconEmail = styled.a`
cursor: pointer;
color: #fff;
padding: 10px;
background-color: transparent;
display: flex;
align-items: center;
font-size: 30px;
font-weight: bold;
cursor: pointer;
list-style: none;
text-decoration: none;
`