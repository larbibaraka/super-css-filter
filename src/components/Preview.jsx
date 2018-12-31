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
      padding: 2%;
      border: 3px solid #eee;
      /*position: fixed;*/
        width: 100%;
        height: 100%;
        max-width: 700px;
        max-height: 800px
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
                    background: ${this.props.backgroundColor1};
                    mix-blend-mode: ${this.props.mode};
                }
            `;

    const FigurelinearGradient = styled.div` 
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
                    mix-blend-mode: ${this.props.mode};
                    background: -webkit-linear-gradient(${this.props.gradientdirection}, ${this.props.backgroundColor1} ${this.props.IncrementColor1}%, ${this.props.backgroundColor2} ${this.props.IncrementColor2}%);
                    background: linear-gradient(${this.props.gradientdirection}, ${this.props.backgroundColor1} ${this.props.IncrementColor1}%, ${this.props.backgroundColor2} ${this.props.IncrementColor2}%);
                }
            `;
            
        const FigureradialGradient = styled.div` 
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
                    mix-blend-mode: ${this.props.mode};
                    background: -webkit-radial-gradient(${this.props.gradientPosition}, circle ${this.props.gradientSize}, ${this.props.backgroundColor1} ${this.props.IncrementColor1}%, ${this.props.backgroundColor2} ${this.props.IncrementColor2}%);

                }
            `;
      


    console.log('this  state : ', this.state.typeOfDiv)
    
    switch (this.props.typeChosen) {
        case 'none':
        return (
           <PREVIEW>
                <NAVForImage/>
                <hr style={{background: '#eee'}} />
                <FigureNone>
                    <img id="output" src={atx} />
                </FigureNone>
            </PREVIEW>
        )
        
        case 'solidBackground':
        return (
            <PREVIEW>
                <NAVForImage/>
                <hr style={{background: '#eee'}} />
                <FigureSolidBackground>
                    <img src={atx} />
                </FigureSolidBackground>
            </PREVIEW>
        )
        case 'linearGradient' :
        return(
            <PREVIEW>
                <NAVForImage/>
                <hr style={{background: '#eee'}} />
                <FigurelinearGradient >
                    <img src={atx} />
                </FigurelinearGradient>
            </PREVIEW>
        )
        case 'radialGradient' :
        return(
            <PREVIEW>
                <NAVForImage/>
                <hr style={{background: '#eee'}} />
                <FigureradialGradient> 
                    <img src={atx} />
                </FigureradialGradient>
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
  backgroundColor1: state.Filter.backgroundColor1,
  backgroundColor2: state.Filter.backgroundColor2,
  IncrementColor1:state.Filter.IncrementColor1,
  IncrementColor2: state.Filter.IncrementColor2,
  gradientdirection: state.Filter.gradientdirection,
  gradientPosition : state.Filter.gradientPosition,
  gradientSize : state.Filter.gradientSize
})

export default connect(
  mapStateToProps,
  {},
)(Preview)
