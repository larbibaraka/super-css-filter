import React, { Component } from 'react'
import styled from 'styled-components';
import SolidBackground from './SolidBackground';
 
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
          none : true,
          solidBackground : false,
          linearGradient  : false,
          radialGradient  : false,
       }
    }

    onChange = (e)=>{
        console.log('--->' , e.target.name) 

        switch (e.target.name) {
          case 'none':
            this.setState({none:true, solidBackground : false , linearGradient : false, radialGradient : false});
            break;
          case 'solidBackground' :
            this.setState({none:false, solidBackground : true , linearGradient : false, radialGradient : false});
            break;
          case 'linearGradient':
            this.setState({none:false, solidBackground : false , linearGradient : true, radialGradient : false});
            break;
          case 'radialGradient' :
            this.setState({none:false, solidBackground : false , linearGradient : false, radialGradient : true});
            break;  
          default:
            break;
        }

        this.setState(
          {
            [e.target.name] : e.target.value,
          }
        )   
    }

    onClick = () =>{
      this.setState({
          blur : 0,
          hueRotate : 0,
          invert : 0,
          grayScale : 0,
          sepia : 0,
          saturation : 0,
          brightness : 0 ,
          contrast : 0,
          none : true,
          solidBackground : false,
          linearGradient  : false,
          radialGradient  : false,
      })
    }


     

  render() {
   
    const FILTERS = styled.div`
  
    `;
    return (
      <FILTERS>
        <nav className="panel">
          <div  className="panel-heading">
              <h1 className="title is-4 is-centered">Settings</h1>
           
              <p 
              className="button is-danger is-centered"
              onClick={this.onClick}
              >
              ClearAll</p>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Blur :</label>
              <input 
                className="slider has-output is-fullwidth"  
                type="range"
                onInput={this.onChange}
                name ="blur"
                min = "0"
                max ="10"
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
                <input 
                  className="is-" 
                  type="radio" 
                  name="none" 
                  checked={this.state.none} 
                  onChange={this.onChange}
                  />
                <label >None</label>
              </div>
              <div className="field">
                <input 
                  className="is-" 
                  type="radio" 
                  name="solidBackground" 
                  checked={this.state.solidBackground}
                  onChange={this.onChange}
                 
                />
                <label >Solid Background</label>
              </div>
              <div className="field">
                <input 
                  className="is-" 
                  type="radio" 
                  name="linearGradient" 
                  checked={this.state.linearGradient}
                  onChange={this.onChange}
                   
                />
                <label >Linear Gradient</label>
              </div>
              <div className="field">
                <input 
                  className="is-" 
                  type="radio" 
                  name="radialGradient" 
                  checked={this.state.radialGradient}
                  onChange={this.onChange}
                />
                <label >Radial Gradient</label>
              </div>
              <div className="div-wrapper">
                <SolidBackground/>
              </div>
            </div>
          </div>
       </nav>
      </FILTERS>
     
    )
  }
}
export default Filters;