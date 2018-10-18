import React from 'react'
import styled from 'styled-components';
const CARD = styled.div`
            /*width: 40%;
            height: 15%;*/
            margin: 2px;
             
            `;

const Images = ({imageUrl}) =>{
 
    return (
      <h1>{imageUrl}</h1>
    )
  
}
export default Images