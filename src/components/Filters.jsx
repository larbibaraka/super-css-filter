import React, { Component } from 'react'
import styled from 'styled-components';
import atx from './atx.jpg';
import Images  from './Images';
 
class Filters extends Component {

  
    constructor(props){
      super(props);
      this.state = {
        blur : 0,
        hueRotate : 0,
        invert : 0,
        grayScale : 0,
        sepia : 0,
        saturation : 0,
        brightness : 0 ,
        contrast : 0,
        min : 0,
        max : 100

      }
    }

    onChange = (e)=>{
        console.log('--->' , e.target.name)

        this.setState(
          {
            [e.target.name] : e.target.value
          }
        )
    }
     

  render() {
   
    const FILTERS = styled.div`
  
    `;
    return (
      <FILTERS>
        <nav className="panel">
          <div  className="panel-heading">
              <h1 className="title is-2">Settings</h1>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Blur :</label>
              <input 
                className="slider has-output is-fullwidth"  
                type="range"
                onInput={this.onChange}
                name ="blur"
                min ={this.state.min}
                max ={this.state.max}
                defaultValue={this.state.blur}
              />
              <output>{this.state.blur}px</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Hue Rotate :</label>
              <input 
                className="slider has-output is-fullwidth" 
                type="range" 
                onChange={this.onChange}
                name ="hueRotate"
                min ="0"
                max ="360"
                defaultValue={this.state.hueRotate}
                />
              <output>{this.state.hueRotate}dg</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Invert :</label>
              <input 
                className="slider has-output is-fullwidth" 
                type="range" 
                onChange={this.onChange}
                name ="invert"
                min ="0"
                max ="100"
                defaultValue={this.state.invert}
               />
              <output>{this.state.invert}%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Grayscale :</label>
              <input 
                className="slider has-output is-fullwidth"  
                type="range" 
                onChange={this.onChange}
                name ="grayScale"
                min ="0"
                max ="100"
                
                defaultValue={this.state.grayScale}
              />
              <output className="">{this.state.grayScale}%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Sepia :</label>
              <input 
                className="slider has-output is-fullwidth" 
                type="range" 
                onChange={this.onChange}
                name ="sepia"
                min ="0"
                max ="100"
                defaultValue={this.state.sepia}
               />
              <output>{this.state.sepia}%</output>
            </div>
          </div>

          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Saturation :</label>
              <input 
                className="slider has-output is-fullwidth"  
                type="range" 
                onChange={this.onChange}
                name ="saturation"
                min ="0"
                max ="200"
                
                defaultValue={this.state.saturation}
              />
              <output>{this.state.saturation}%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Brightness :</label>
              <input 
                className="slider has-output is-fullwidth"  
                type="range" 
                onChange={this.onChange}
                name ="brightness"
                min ="0"
                max ="200"
                
                defaultValue={this.state.brightness}
              />
              <output>{this.state.brightness}%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Contrast :</label>
              <input 
                className="slider has-output is-fullwidth"  
                type="range" 
                onChange={this.onChange}
                name ="contrast"
                min ="0"
                max ="200"
               defaultValue={this.state.contrast}
              />
              <output>{this.state.contrast}%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">OVERLAY :</label>
              <div className="field">
                <input className="is-checkradio" type="radio" name="exampleRadioInline1" />
                <label >None</label>
              </div>
              <div className="field">
                <input className="is-checkradio" type="radio" name="exampleRadioInline2"/>
                <label >Solid Background</label>
              </div>
              <div className="field">
                <input className="is-checkradio" type="radio" name="exampleRadioInline3"/>
                <label >Linear Gradient</label>
              </div>
              <div className="field">
                <input className="is-checkradio" type="radio" name="exampleRadioInline4"/>
                <label >Radial Gradient</label>
              </div>
            </div>
          </div>
       </nav>
      </FILTERS>
     
    )
  }
}
export default Filters;