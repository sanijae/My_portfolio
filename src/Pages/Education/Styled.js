import styled from 'styled-components'

export const Contaniner = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: rgba(0,0,0,.6);
background-color: transparent;
margin: 2em auto;
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
`
export const HeaderRow = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px;
align-items: center;
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
export const HeaderButton = styled.button`
font-size: 20px;
font-weight: bold;
margin: 5px auto;
border: none;
border-radius: 1em;
padding: 10px;
width: 100%;
background: rgba(0,0,0,.6);
color: #fff;
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
padding: 1em;
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
border: none;
margin: 10px auto;
`
export const CardTitle = styled.h2`
padding: 10px;
font-weight: bold;
`
export const CardNames = styled.h4`
padding: 10px;
font-weight: bold;
`
export const CardText = styled.div`
padding: 10px;
text-align: left;
font-weight: bold;
`
export const CardWrapper = styled.div`
width: 100%;
margin: 4em auto;
`
export const ItemsGrid = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(2,50%);

@media screen and (max-width:700px) {
    grid-template-columns: repeat(1,100%);
}
` 
export const CardImg = styled.img`
width: 90%;
height: auto;
border-radius: 2em;
padding: 10px;
object-fit: cover;
`
export const ItmCard = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;
border-radius: 2em;
margin: 10px auto;
`
export const Title = styled.h2`
font-weight: bold;
text-align: left;
width: 100%;
`