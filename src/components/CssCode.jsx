import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

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

   const BlockQuote = styled.blockquote `
                     border : 1px solid red; 
                     border-left-color: #E91E63!important;
                `;
  

     

    return (
      <CSSCODE >
          <div className="box">
            <div className="content">     
                <h1>CSS</h1>      
                <BlockQuote>
                  <div dangerouslySetInnerHTML={{__html: '.YOUR_CLASS { '}} /> 
                  <div dangerouslySetInnerHTML={{__html: 'position: relative;'}} /> 
                  <div dangerouslySetInnerHTML={{__html: '-webkit-filter: sepia(48%) grayscale(41%) invert(50%); '}} /> 
                  <div dangerouslySetInnerHTML={{__html: 'filter: sepia(48%) grayscale(41%) invert(50%);'}} /> 
                  <div dangerouslySetInnerHTML={{__html: '}'}} /> 
                </BlockQuote>
            </div>
          </div>  

           <div className="box">
            <div className="content">     
                <h1>HTML</h1>      
                <BlockQuote>
                 &lt;div class="YOUR_CLASS"&gt;
                  <br/>
                      &lt;img src="..." alt="..."&gt;   
                  <br/>             
                  &lt;/div&gt;
              
                </BlockQuote>
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
