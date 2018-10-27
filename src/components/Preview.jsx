import React, {Component} from 'react'
import styled from 'styled-components'
import atx from './atx.jpg';
import {connect} from 'react-redux';
import NAVForImage from './NavForImage';

class Preview extends Component {

    constructor(props){
        super(props);
        this.state = {
            typeOfDiv : this.props.typeChosen
        }
    }

  render() {
    const PREVIEW = styled.div`
      margin-top: 2%;
      background: #fff;
      height: 100%;
      width: 100%;
      padding: 2%;
      max-height: 725px;
      border: 3px solid #eee;
    `;


    const FigureNone = styled.div `
    
    -webkit-filter : 
                     blur(${this.props.blur}px)     
                     contrast(${this.props.contrast}%)
                     brightness(${this.props.brightness}%) 
                     grayscale(${this.props.grayScale}%) 
                     hue-rotate(${this.props.hueRotate}deg) 
                     invert(${this.props.invert}%)
                     saturate(${this.props.saturation}%)
                     sepia(${this.props.sepia}%) 
             ;  
             filter :
                     blur(${this.props.blur}px)     
                     contrast(${this.props.contrast}%)
                     brightness(${this.props.brightness}%) 
                     grayscale(${this.props.grayScale}%) 
                     hue-rotate(${this.props.hueRotate}deg) 
                     invert(${this.props.invert}%)
                     saturate(${this.props.saturation}%)
                     sepia(${this.props.sepia}%) 
                ;             
              position: relative;  
       `;


    const FigureSolidBackground = styled.div` 
            -webkit-filter : 
                     blur(${this.props.blur}px)     
                     contrast(${this.props.contrast}%)
                     brightness(${this.props.brightness}%) 
                     grayscale(${this.props.grayScale}%) 
                     hue-rotate(${this.props.hueRotate}deg) 
                     invert(${this.props.invert}%)
                     saturate(${this.props.saturation}%)
                     sepia(${this.props.sepia}%) 
             ;  
             filter :
                     blur(${this.props.blur}px)     
                     contrast(${this.props.contrast}%)
                     brightness(${this.props.brightness}%) 
                     grayscale(${this.props.grayScale}%) 
                     hue-rotate(${this.props.hueRotate}deg) 
                     invert(${this.props.invert}%)
                     saturate(${this.props.saturation}%)
                     sepia(${this.props.sepia}%) 
                ;             
               position: relative;  

                ::before {
                    content: "";
                    display: block;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                    position: absolute;
                    pointer-events: none;
                    opacity: ${this.props.opacity};
                    background: ${this.props.backgroundColor};
                    mix-blend-mode: ${this.props.mode};
                }
            `;

    console.log('this  state : ', this.state.typeOfDiv)
    
    switch (this.props.typeChosen) {
        case 'none':
        return (
           <PREVIEW>
                <NAVForImage/>
                <hr style={{background: '#eee'}} />
                <FigureNone className="filter">
                    <img src={atx} />
                </FigureNone>
            </PREVIEW>
        )
        
        case 'solidBackground':
        return (
            <PREVIEW>
                <NAVForImage/>
                <hr style={{background: '#eee'}} />
                <FigureSolidBackground className="filter">
                    <img src={atx} />
                </FigureSolidBackground>
            </PREVIEW>
        )
        
        default:
        return (true)
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
  backgroundColor: state.Filter.backgroundColor
})

export default connect(
  mapStateToProps,
  {},
)(Preview)
