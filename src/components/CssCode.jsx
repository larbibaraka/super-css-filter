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

   const BlockQuote1 = styled.blockquote `
                     border : 1px solid red; 
                     background: #d4faff!important;
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
                <BlockQuote1>
                   { 
                     ".your_class {"
                   }
                   <br/>
                   {
                    'position: relative;'
                   }
                   <br/>
                   {
                    
                    <p>filter :
                     { (this.props.sepia !== 0) ? <div>sepia({this.props.sepia}%)</div> : null }
                     { (this.props.brightness !== 100) ? <div>brightness({this.props.brightness}%)</div> : null }
                     { (this.props.contrast !== 100) ? <div>contrast({this.props.contrast}%)</div> : null }
                     { (this.props.saturation !== 100) ? <div>saturation({this.props.saturation}%)</div> : null }
                     { (this.props.grayScale !== 0) ? <div>grayscale({this.props.grayScale}%)</div> : null }
                     { (this.props.invert !== 0) ? <div>invert({this.props.invert}%)</div> : null }
                     { (this.props.hueRotate !== 0) ? <div>hue-rotate({this.props.hueRotate}deg)</div> : null }
                     { (this.props.blur !== 0) ? <div>blur({this.props.blur}px)</div> : null }
                    </p>
                    }
                           
                   {
                    "}"
                   }
                   <br/>
                   {
                     ".your_class::before {"
                   }
                   <br/>
                   {
                    <p>
                    <div>content: "";</div>
                     <div>display: block;</div>
                     <div>height: 100%;</div>
                     <div>width: 100%;</div>
                     <div>top: 0;</div>
                     <div>left: 0;</div>
                     <div>position: absolute;</div>
                     <div>pointer-events: none;</div>
                     <div>opacity: 0.5;</div>
                     <div>background: rgba(62, 162, 253, 0.5);</div>
                    </p>
                   }
                   {
                    "}"
                   }
                </BlockQuote1>


                
                    
            </div>
          </div>  

           <div className="box">
            <div className="content">     
                <h1>HTML</h1>      
                
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
