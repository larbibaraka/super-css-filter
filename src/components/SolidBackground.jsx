import React, { Component } from 'react';
import MixBlendMode from './MixBlendMode';   
 class SolidBackground extends Component {

  constructor(props){
    super(props);
    this.state = {
      initialColor : '#00d1b2',
      opacity : 0
    }
  }

  onChange = (e) =>{
    this.setState({
      opacity :  e.target.value
    })
  }


  render() {
    return (
      <div className="field-wrapper">
       
          <div className="div-wrapper">
                <label className="label">
                Background color :  
                <input
                 type="color"
                 defaultValue={this.state.initialColor}  
                 />
                </label>
          </div>
         
          <div className="div-wrapper">
                <label className="label">
                Mix Blend Mode :  
                <MixBlendMode/>
               </label>
          </div>

          <div className="div-wrapper">
                <label className="label">
                Opacity:  
                </label>
                <input 
                className="slider has-output is-fullwidth"  
                type="range" 
                onChange={this.onChange}
                name ="opacity"
                min ="0"
                max ="100"
               defaultValue={this.state.opacity}
              />
              <output>{this.state.opacity}%</output>
              
          </div>


        </div>
     
    )
  }
}
export default SolidBackground;