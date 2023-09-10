import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Contaniner = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
color: rgba(0,0,0,.6);
margin-top: 2em;
`

export const Wrapper = styled.div`
width: 80%;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
flex-direction: column;
`
export const Button = styled(Link)`
font-size: 20px;
font-weight: bold;
margin: 2em auto;
border: none;
border-radius: 1em;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
width: 100%;
background: rgba(0,0,0,.6);
text-decoration: none;
list-style: none;
color: #fff;
cursor: pointer;
`
export const Card = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;
border-radius: 2em;
margin: 10px auto;
padding: 1em;
box-shadow: 1em 1em 1em 1px rgba(0,0,0,.3);
`
export const CardHeader = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: left;
border: none;
border-radius: 2em;
margin: 10px auto;
`
export const CardContent = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;
margin: 10px auto;
`
export const CardTitle = styled.h2`
padding: 10px;
font-weight: bold;
`
export const CardButton = styled(Link)`
padding: 10px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
margin: 10px auto;
border-radius: 1em;
color: inherit;
width: 90%;
list-style: none;
text-decoration: none;
cursor: pointer;
background-color: rgba(0,0,0,.3);
`
export const CardText = styled.p`
padding: 10px;
font-weight: bold;
`
export const Grid = styled.div`
display: grid;
width: 100%;
grid-gap: 10px;
align-items: center;
margin: 3em auto;
justify-content: center;
grid-template-columns: repeat(3,auto);

@media screen and (max-width:900px) {
    grid-template-columns: repeat(2,auto);
}
@media screen and (max-width:600px) {
    grid-template-columns: repeat(1,auto);
}
`
