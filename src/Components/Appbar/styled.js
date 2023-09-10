import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AppBar = styled.div`
width: 100%;
display: flex;
justify-content:center;
align-items: center;
background-color: #4B1073;
color: #fff;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 500;
`
export const Row = styled.div`
width: 80%;
padding: 10px;
display: flex;
justify-content:space-between;
align-items: center;

@media screen and (max-width:800px){
    width: 100%;
}
`
export const Nav = styled.nav`
background-color: transparent;
display: flex;
align-items: center;


@media screen and (max-width:800px){
    position: fixed;
    top: 3.5em;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    flex-direction: column;
    display: ${({show})=>(show ? show : 'none')};
    justify-content: center;
    background-color: #4B1073;
}
`
export const NavItem = styled(Link)`
width: 100%;
padding: 10px;
display: flex;
justify-content:center;
align-items: center;
list-style: none;
list-style-type: none;
text-decoration: none;
font-weight: bold;
border-radius: 1em;
color: #fff;

&:hover{
    font-style: italic;
    background-color: #fff;
    color: #4B1073;
}

@media screen and (max-width:800px){
    width: 100%;
    margin: 10px auto;
}
`
export const BrandTitle = styled.div`
padding: 10px;
font-size: 16px;
font-weight: bold;
font-style: italic;
cursor: pointer;
`
export const Hamburger = styled.div`
display: none;
align-items: center;
font-size: 30px;
font-weight: bold;

@media screen and (max-width:800px){
    display: flex;
}
`
export const Icons = styled.div`
display: flex;
`
export const Icon = styled(Link)`
cursor: pointer;
padding: 10px;
background-color: transparent;
color: #fff;
display: flex;
align-items: center;
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
font-weight: bold;
cursor: pointer;
list-style: none;
text-decoration: none;
`