import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Contaniner = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
color: rgba(0,0,0,.6);
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
padding-top: 3em;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
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

@media screen and (max-width:800px){
    margin: 2em auto;
}
`
export const HeaderImgs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const HeaderImg = styled.img`
width: 90%;
height: 23em;
object-fit: cover;
border-radius: 2em;

@media screen and (max-width:800px){
    width: 90%;
    height: 20em;
}
`
export const HeaderTitle = styled.div`
font-size: 3em;
letter-spacing: 1.5px;
font-weight: bold;
margin: 5px auto;
`
export const AuthorTitle = styled.div`
font-size: 2em;
font-weight: bold;
`
export const HeaderText = styled.div`
font-size: 18px;
margin: 2em auto;
font-weight: bold;
text-align: left;
width: 100%;
`

export const HeaderButton = styled.div`
background: rgba(0,0,0,.6);
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 10px auto;
border-radius: 1em;
`
export const Links = styled(Link)`
font-size: 20px;
font-weight: bold;
border: none;
padding: 1em;
list-style: none;
text-decoration: none;
color: #fff;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const Card = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;
border-radius: 2em;
margin: 10px auto;
`
export const CardTools = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;
border-radius: 2em;
margin: 10px auto;
`
export const CardWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px auto;
background-color: transparent;
`
export const CardImg = styled.img`
width: 90%;
height: auto;
border-radius: 2em;
padding: 10px;
object-fit: cover;
box-shadow: .5em .5em .5em 0px rgba(0,0,0,.6);
`
export const ToolsImg = styled.img`
width: 5em;
height: 5em;
border-radius: 2em;
`
export const Title = styled.div`
font-size: 17px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: left;
border: none;
background: transparent;
color: inherit;
border-radius: 10px;
margin: 2em auto;

@media screen and (max-width:800px){
    padding: 1em;
    width: 80%;
}
`
export const ItemsGrid = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(2,50%);

@media screen and (max-width:700px) {
    grid-template-columns: repeat(1,100%);
}
`
export const ToolsGrid = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(6,auto);

@media screen and (max-width:800px) {
    grid-template-columns: repeat(5,auto);
}
@media screen and (max-width:600px) {
    grid-template-columns: repeat(4,auto);
}
@media screen and (max-width:400px) {
    grid-template-columns: repeat(3,auto);
}
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