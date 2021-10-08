import React, { useState, useEffect } from "react";
import styled,{keyframes} from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const kf = keyframes`
0% {
    color: #0cbe13;
}
33% {
  color: #0f37b3;
}
66% {
  color: #9f0d0d;
}
100% {
    color: #0cbe13;
}
`

const Style = styled.p`
font-family: "Comic Sans MS";
text-align: center;
max-width: 100%;
margin-right: 20%;
margin-left: 20%;
h2:hover{
    cursor: pointer;
    animation: ${kf} 3s infinite;
}
`

const TitleList = styled.h2`
font-family: "Comic Sans MS";
text-align: center;
max-width: 100%;
margin-right: 20%;
margin-left: 20%;
`


export default function Character({info}) {
    const [visible, setVisible] = React.useState(false);
    return (
        <Style>
        <TitleList onClick={() => setVisible(!visible)}>
        <h2>{info.name}</h2>
        {visible ? "" : ""}
    </TitleList>
      {visible && <div>
            <p>Gender: {info.gender}</p>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Birth Year: {info.birth_year}</p>
            <p>Eye Color: {info.eye_color}</p>
            <p>Hair Color: {info.hair_color}</p>
            <p>Skin Color: {info.skin_color}</p>
        </div>}
        </Style>
    )
}