import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Contaniner = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
color: rgba(0,0,0,.6);// #2A8BED;
margin: 10em auto;
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
export const Header = styled.div`
width: 100%; 
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 2em auto;
justify-content: center;

@media screen and (max-width:800px){
    height: auto;
}
`
export const HeaderRow = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px;
align-items: center;

@media screen and (max-width:800px){
    flex-direction: column;
}
`
export const HeaderColumn = styled.div`
width: 100%;
flex-direction: column;
justify-content: left;
`
export const HeaderImgs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeaderImg = styled.img`
width: 70%;
height: 20em;
object-fit: cover;
border-radius: 2em;

@media screen and (max-width:800px){
    height: auto;
    width: 100%;
}
`
export const HeaderTitle = styled.div`
font-size: 3em;
letter-spacing: 1.5px;
font-weight: bold;
margin: 5px auto;
`
export const Title = styled.div`
font-size: 3em;
letter-spacing: 1.5px;
font-weight: bold;
margin: 5px auto;
`

export const HeaderText = styled.div`
font-size: 18px;
margin: 2em auto;
font-weight: bold;
text-align: left;
width: 100%;
`
export const Text = styled.p`
font-size: 14px;
font-weight: bold;
padding: 5px;
`
export const Icon = styled(Link)`
cursor: pointer;
padding: 10px;
background-color: transparent;
color: #000;
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
color: #000;
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
export const CardIcons = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-around;
border: none;
border-radius: 2em;
margin: 10px auto;
`