import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const Style = styled.p`
font-family: "Comic Sans MS";
text-align: center;
max-width: 100%;
margin-right: 20%;
margin-left: 20%;
`

const TitleList = styled.p`
font-family: "Comic Sans MS";
text-align: center;
max-width: 100%;
margin-right: 20%;
margin-left: 20%;
font-size : 10rem

h2 hover{
    cursor:pointer;
}
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