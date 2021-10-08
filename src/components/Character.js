import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const DropDown = styled.h3`
font-family: "Comic Sans MS";
`
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onClick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

export default function Character({info}) {
    console.log(info)
    return (
        <div>
            <h2>{info.name}</h2>
            <h3>Gender: {info.gender}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Birth Year: {info.birth_year}</h3>
            <h3>Eye Color: {info.eye_color}</h3>
            <h3>Hair Color: {info.hair_color}</h3>
            <h3>Skin Color: {info.skin_color}</h3>
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                    <div id="myDropdown" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div>
        </div>
    )
}