import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

class CssCode extends Component {
  render() {
    const CSSCODE = styled.div`
        margin-top: 2%;
        background: #fff;
        padding: 2%;
        border: 3px solid #eee;
        width: 100%;
        height: 100%;
        max-width: 700px;
        max-height: 800px
   `;
   const H1 = styled.h1 `
          text-align: centre!important; 
   `


    return (
      <CSSCODE >
          <H1 >Css Code</H1>
          <div className="box">
            <div className="content">
             <p>
              <code>
                  .p &copy;
              </code>

             </p>
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
