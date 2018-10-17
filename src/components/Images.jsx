import React from 'react'
import styled from 'styled-components';
const CARD = styled.div`
            /*width: 40%;
            height: 15%;*/
            margin: 2px;
             
            `;

const Images = ({imageUrl}) =>{
 
    return (
      <CARD className="card" > 
         <img className="card-img-top" src={imageUrl} alt="sss"/>
         <div className="card-body">
            <h5 className="card-title">Filter</h5>
         </div>
      </CARD>
    )
  
}
export default Images