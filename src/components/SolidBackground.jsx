import React, { Component } from 'react';
import SelectItem from './SelectItem';   
import RangeItem  from './RangeItem';
 class SolidBackground extends Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundColor : '#00d1b2',
      opacity : 100,
      mixblendmode : 'normal'
    }
  }

  onChange = (e) =>{
    console.log('mode is : ', e.target.value)
    
    this.setState({
      [e.target.name] : e.target.value,
     
      mixblendmode : e.target.value
    })
  }


  render() {
    const modes = [
      {id: 1 , mode :'Overlay'},
      {id: 2 , mode :'Normal'},
      {id: 3 , mode :'Multiply'},
      {id: 4 , mode :'Screen'},
      {id: 5 , mode :'Darken'},
      {id: 6 , mode :'Lighten'},
      {id: 7 , mode :'Color-dodge'},
      {id: 8 , mode :'Color-burn'},
      {id: 9 , mode :'Hard-light'},
      {id: 10 , mode :'Soft-light'},
      {id: 11 , mode :'Difference'},
      {id: 12 , mode :'Exclusion'},
      {id: 13 , mode :'Hue'},
      {id: 14 , mode :'Saturation'},
      {id: 15 , mode :'Color'},
      {id: 16 , mode :'Luminosity'},
      {id: 17 , mode :'Initial'},
      {id: 18 , mode :'Inherit'},
      {id: 19 , mode :'Unset'}
    ]
    return (
      <div className="field-wrapper">
       
          <div className="div-wrapper">
                <label className="label">
                Background color :  
                <input
                 type="color"
                 defaultValue={this.state.backgroundColor}  
                 onChange = {this.onChange}
                 name="backgroundColor"
                 />
                </label>
          </div>
         
          <div className="div-wrapper">
                <label className="label">
                Mix Blend Mode :  
                <SelectItem modes={modes} onChange={this.onChange} />
               </label>
          </div>    

          <RangeItem
            value={this.state.opacity}
            name = "opacity"
            min  = "0"
            max  = "100"
            onChange = {this.onChange}
            unit = "%"
            label = "Opacity"
          />


        </div>
     
    )
  }
}
export default SolidBackground;