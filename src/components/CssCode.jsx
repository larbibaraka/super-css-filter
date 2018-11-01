import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import Highlight from 'react-highlight.js'

class CssCode extends Component {

  cssClass= () =>{
    console.log('hellocss')
   }

  
  render() {
    const CSSCODE = styled.div`
        margin-top: 2%;     
        border: 3px solid #eee;
        width: 100%;
        height: 100%;
        max-width: 700px;
        max-height: 800px;      
   `;

   const BlockQuote1 = styled.blockquote `
                     border : 1px solid red; 
                     border-left-color: #E91E63!important;
                `;
  
  const BlockQuote2= styled.blockquote `
                border : 1px solid #009688; 
                border-left-color: #009688!important;
           `;

                

     

    return (
      <CSSCODE >
          <div className="box">
            <div className="content">     
                <h1>CSS</h1>      
             
                <Highlight language="css">
                   { `p { color : red }`}
                </Highlight>
                    
            </div>
          </div>  

           <div className="box">
            <div className="content">     
                <h1>HTML</h1>      
                <Highlight language="css">
                   { 'p { color : red }'}
                </Highlight>
            </div>
          </div>      



       </CSSCODE> 
    )
  }
}
const mapStateToProps = state => ({
  blur: state.Filter.blur,
  hueRotate: state.Filter.hueRotate,
  invert: state.Filter.invert,
  grayScale: state.Filter.grayScale,
  sepia: state.Filter.sepia,
  saturation: state.Filter.saturation,
  brightness: state.Filter.brightness,
  contrast: state.Filter.contrast,
  typeChosen: state.Filter.typeChosen,
  opacity : state.Filter.opacity,   
  mode : state.Filter.mode,
  backgroundColor1: state.Filter.backgroundColor1,
  backgroundColor2: state.Filter.backgroundColor2,
  IncrementColor1:state.Filter.IncrementColor1,
  IncrementColor2: state.Filter.IncrementColor2,
  gradientdirection: state.Filter.gradientdirection,
  gradientPosition : state.Filter.gradientPosition,
  gradientSize : state.Filter.gradientSize
})

export default connect( mapStateToProps, { })  (CssCode);
