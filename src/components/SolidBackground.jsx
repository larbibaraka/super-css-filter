import React, { Component } from 'react';
import SelectItem from './SelectItem';   
import RangeItem  from './RangeItem';
import {connect} from 'react-redux';
import 
    {
      change_background_color,
      change_opacity_value,
      change_mix_blend_mode
    } 
    from '../actions/FiltersAction';

 class SolidBackground extends Component {

  onChange = (e) =>{
    console.log('mode name is  : ', e.target.name)
    console.log('mode is : ', e.target.value)
    
    switch (e.target.name) {
      case 'backgroundColor':
        this.props.change_background_color(e.target.value);
        break;
      case 'mode':
        this.props.change_mix_blend_mode(e.target.value);
        break;
      case 'opacity' :
        this.props.change_opacity_value(e.target.value);
        break;   
      default:
        break;
    }

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
                 defaultValue={this.props.backgroundColor}  
                 onChange = {this.onChange}
                 name="backgroundColor"
                 />
                </label>
          </div>
         
          <div className="div-wrapper">
                <label className="label">
                Mix Blend Mode :  
                <SelectItem modes={modes} onChange={this.onChange} name="mode"/>
               </label>
          </div>    

          <RangeItem
            value={this.props.opacity}
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

const mapStateToProps = (state) => ({
    opacity : state.Filter.opacity,
    mode : state.Filter.mode,
    backgroundColor: state.Filter.backgroundColor
});

 


export default connect(mapStateToProps ,
   {
     change_background_color,
     change_opacity_value,
     change_mix_blend_mode
  }
  )
(SolidBackground);