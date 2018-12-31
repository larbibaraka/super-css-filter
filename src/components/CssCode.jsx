import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';


class CssCode extends Component {

  //this method is used to return the proper component for the type chosen 
   //this is not a lazy loading :p
   getCssByTypeChosen = () => {
      let typeChosen = this.props.typeChosen;
      switch (typeChosen) {
        case 'none':
          return null;
        case 'solidBackground':
             return <div>
                <p style={{marginBottom: 0}}>content: "";</p>
                <p style={{marginBottom: 0}}>display: block;</p>
                <p style={{marginBottom: 0}}>height: 100%;</p>
                <p style={{marginBottom: 0}}>width: 100%;</p>
                <p style={{marginBottom: 0}}>top: 0;</p>
                <p style={{marginBottom: 0}}>left: 0;</p>
                <p style={{marginBottom: 0}}>position: absolute;</p>
                <p style={{marginBottom: 0}}>pointer-events: none;</p>
                <p style={{marginBottom: 0}}>opacity: {this.props.opacity};</p>
                <p style={{marginBottom: 0}}>background: {this.props.backgroundColor1};</p>
                <p style={{marginBottom: 0}}>mix-blend-mode: {this.props.mode};</p>
              </div>
        case 'linearGradient':
              return <div>
                <p style={{marginBottom: 0}}>content: "";</p>
                <p style={{marginBottom: 0}}>display: block;</p>
                <p style={{marginBottom: 0}}>height: 100%;</p>
                <p style={{marginBottom: 0}}>width: 100%;</p>
                <p style={{marginBottom: 0}}>top: 0;</p>
                <p style={{marginBottom: 0}}>left: 0;</p>
                <p style={{marginBottom: 0}}>position: absolute;</p>
                <p style={{marginBottom: 0}}>pointer-events: none;</p>
                <p style={{marginBottom: 0}}>opacity: {this.props.opacity};</p>
                <p style={{marginBottom: 0}}>mix-blend-mode: {this.props.mode};</p>
                <p style={{marginBottom: 0}}>background: -webkit-linear-gradient({this.props.gradientdirection}, {this.props.backgroundColor1} {this.props.IncrementColor1}%, {this.props.backgroundColor2} {this.props.IncrementColor2}%);</p>
                <p style={{marginBottom: 0}}>background: linear-gradient({this.props.gradientdirection}, {this.props.backgroundColor1} {this.props.IncrementColor1}%, {this.props.backgroundColor2} {this.props.IncrementColor2}%);</p>
              </div>
        case 'radialGradient':
              return <div>
                <p style={{marginBottom: 0}}>content: "";</p>
                <p style={{marginBottom: 0}}>display: block;</p>
                <p style={{marginBottom: 0}}>height: 100%;</p>
                <p style={{marginBottom: 0}}>width: 100%;</p>
                <p style={{marginBottom: 0}}>top: 0;</p>
                <p style={{marginBottom: 0}}>left: 0;</p>
                <p style={{marginBottom: 0}}>position: absolute;</p>
                <p style={{marginBottom: 0}}>pointer-events: none;</p>
                <p style={{marginBottom: 0}}>opacity: {this.props.opacity};</p>
                <p style={{marginBottom: 0}}>mix-blend-mode: {this.props.mode};</p>
                <p style={{marginBottom: 0}}>background: -webkit-radial-gradient({this.props.gradientPosition}, circle {this.props.gradientSize}, {this.props.backgroundColor1} {this.props.IncrementColor1}%, {this.props.backgroundColor2} {this.props.IncrementColor2}%);</p>
                <p style={{marginBottom: 0}}>background: radial-gradient({this.props.gradientPosition}, circle {this.props.gradientSize}, {this.props.backgroundColor1} {this.props.IncrementColor1}%, {this.props.backgroundColor2} {this.props.IncrementColor2}%);</p>
              </div>
        default:
          return null;
      }
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
                     background: #efefef!important;
                     border-left-color: #E91E63!important;
                `;
  
  const BlockQuote2= styled.blockquote `
                border : 1px solid #009688; 
                border-left-color: #009688!important;
           `;

    console.log(this.props.typeChosen)
    if(this.props.showCss){
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
                     (this.props.filtersChanged) ? 
                     <p style={{marginBottom:0}}>filter :
                     { (this.props.sepia !== 0) ? <span>  sepia({this.props.sepia}%)</span> : null }
                     { (this.props.brightness !== 100) ? <span>  brightness({this.props.brightness}%)</span> : null }
                     { (this.props.contrast !== 100) ? <span>  contrast({this.props.contrast}%)</span> : null }
                     { (this.props.saturation !== 100) ? <span>  saturation({this.props.saturation}%)</span> : null }
                     { (this.props.grayScale !== 0) ? <span>  grayscale({this.props.grayScale}%)</span> : null }
                     { (this.props.invert !== 0) ? <span>  invert({this.props.invert}%)</span> : null }
                     { (this.props.hueRotate !== 0) ? <span>  hue-rotate({this.props.hueRotate}deg)</span> : null }
                     { (this.props.blur !== 0) ? <span>  blur({this.props.blur}px)</span> : null }
                    ;</p>
                    : 
                    null
                    }
                    {
                     (this.props.filtersChanged) ? 
                     <p style={{marginBottom:0}}>-webkit-filter :
                     { (this.props.sepia !== 0) ? <span>  sepia({this.props.sepia}%)</span> : null }
                     { (this.props.brightness !== 100) ? <span>  brightness({this.props.brightness}%)</span> : null }
                     { (this.props.contrast !== 100) ? <span>  contrast({this.props.contrast}%)</span> : null }
                     { (this.props.saturation !== 100) ? <span>  saturation({this.props.saturation}%)</span> : null }
                     { (this.props.grayScale !== 0) ? <span>  grayscale({this.props.grayScale}%)</span> : null }
                     { (this.props.invert !== 0) ? <span>  invert({this.props.invert}%)</span> : null }
                     { (this.props.hueRotate !== 0) ? <span>  hue-rotate({this.props.hueRotate}deg)</span> : null }
                     { (this.props.blur !== 0) ? <span>  blur({this.props.blur}px)</span> : null }
                    ;</p>
                    : 
                    null
                    }
                    {
                      "}"   
                    }
                    {
                     (this.props.overlayChanged) ? 
                      <br/>
                      :
                      null
                    }
                    {
                    (this.props.overlayChanged) ? 
                     ".your_class::before {"
                     :
                     null
                    }
                    {
                     (this.props.overlayChanged) ? 
                      <br/>
                      :
                      null
                    }
                   {
                    (this.props.overlayChanged) ? 
                    this.getCssByTypeChosen()
                    :
                    null
                   }
                   {
                    (this.props.overlayChanged) ? 
                   "}"
                   :
                   null
                   }
                </BlockQuote1>            
            </div>
          </div>  

           <div className="box">
            <div className="content">     
                <h1>HTML</h1>
                <BlockQuote2>
                   {
                     "<figure class=\"your_class\">"
                   }
                   <br/>
                   {
                     "<img src=\"...\">"
                   }
                   <br/>
                   {
                     "</figure>"
                   }
                </BlockQuote2>      
            </div>
          </div>      
       </CSSCODE> 
    )
    }
    else{
      return null;
    }
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
  gradientSize : state.Filter.gradientSize,
  filtersChanged : state.Filter.filtersChanged,
  overlayChanged : state.Filter.overlayChanged,
  showCss :         state.PreviewReducer.showCss
  
})

export default connect( mapStateToProps, { })  (CssCode);