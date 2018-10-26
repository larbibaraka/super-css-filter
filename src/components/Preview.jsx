import React, { Component } from 'react'
import styled from 'styled-components';
import atx from './atx.jpg'
import {connect} from 'react-redux';
 
class Preview extends Component {
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

    const Image = styled.img`
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
                    ;`
        ;  

        console.log('this is contrast : ', this.props.contrast)
    return (
      <PREVIEW>

          <nav className="level">
              <div className="level-left">
                <div className="level-item">
                <p className="level-item"><a className=" is-black"><i className="	fas fa-shield-alt"></i>Upload Image</a></p>
                </div>
                 </div>
              <div className="level-right">
                  <p className="level-item"><a className=" is-success">Show Css</a></p>
              </div>
          </nav>
          <hr style={{background: '#eee'}}/>

          <figure className="imagePreview">
              <Image src={atx} alt={""}/>
          </figure>
      </PREVIEW>
    )
  }
}

const mapStateToProps  = state => ({
    blur : state.Filter.blur,
    hueRotate : state.Filter.hueRotate,
    invert : state.Filter.invert,
    grayScale : state.Filter.grayScale,
    sepia : state.Filter.sepia,
    saturation : state.Filter.saturation,
    brightness : state.Filter.brightness,
    contrast : state.Filter.contrast,
    typeChosen : state.Filter.typeChosen
})


export default  connect(mapStateToProps, {})(Preview);