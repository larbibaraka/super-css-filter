import React, { Component } from 'react';
import SelectItem from './SelectItem';
import RangeItem  from './RangeItem';
import Incrementer from './Incrementer';
import {connect} from 'react-redux';
import 
    {
      change_background1_color,
      change_background2_color,
      change_opacity_value,
      change_mix_blend_mode,
      change_increment1_color,
      change_increment2_color,
      change_gradient_position,
      change_gradient_size
    } 
    from '../actions/FiltersAction';

 class RadialGradient extends Component {

  

  onChange = (e) =>{
   
    switch (e.target.name) {
      case 'backgroundColor1':
        this.props.change_background1_color(e.target.value);
        break;

      case 'backgroundColor2':
        this.props.change_background2_color(e.target.value);
        break;   

      case 'IncrementColor1' :
       this.props.change_increment1_color(e.target.value);
       break;   

      case 'IncrementColor2' :
       this.props.change_increment2_color(e.target.value);
       break;   
      case 'gradientsize' :
       this.props.change_gradient_size(e.target.value);
       break; 
      case 'gradientpos' :
        console.log(e.target.value.toLowerCase())
        this.props.change_gradient_position(e.target.value.toLowerCase());
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
      {id: 1 , mode :'Overlay' , name:'Overlay'},
      {id: 2 , mode :'Normal' , name:'Normal'},
      {id: 3 , mode :'Multiply' , name:'Multiply'},
      {id: 4 , mode :'Screen' , name:'Screen'},
      {id: 5 , mode :'Darken' , name:'Darken'},
      {id: 6 , mode :'Lighten' , name:'Lighten'},
      {id: 7 , mode :'Color-dodge' , name:'Color-dodge'},
      {id: 8 , mode :'Color-burn' , name:'Color-burn'},
      {id: 9 , mode :'Hard-light' , name:'Hard-light'},
      {id: 10 , mode :'Soft-light' , name:'Soft-light'},
      {id: 11 , mode :'Difference' , name:'Difference'},
      {id: 12 , mode :'Exclusion' , name:'Exclusion'},
      {id: 13 , mode :'Hue' , name:'Hue'},
      {id: 14 , mode :'Saturation' , name:'Saturation'},
      {id: 15 , mode :'Color' , name:'Color'},
      {id: 16 , mode :'Luminosity' , name:'Luminosity'},
      {id: 17 , mode :'Initial' , name:'Initial'},
      {id: 18 , mode :'Inherit' , name:'Inherit'},
      {id: 19 , mode :'Unset' , name:'Unset'}
    ];

    const gradientSize = [
      {id: 1 , mode :'closest-side' , name : 'Closest Side'},
      {id: 2 , mode :'closest-corner' , name : 'Closest Corner'},
      {id: 3 , mode :'fartherest-side' , name : 'Fartherest Side'},
      {id: 4 , mode :'fartherest-corner' , name : 'Fartherest Corner'},
      ]
   
    const gradientPosition = [
      {id: 1 , mode :'Left Top' , name : 'Left Top'},
      {id: 2 , mode :'Center Top' , name : 'Center Top'},
      {id: 3 , mode :'Right Top' , name : 'Right Top'},
      {id: 4 , mode :'Left Center' , name : 'Left Center'},
      {id: 5 , mode :'Center Center' , name : 'Center Center'},
      {id: 6 , mode :'Right Center' , name : 'Right Center'},
      {id: 7 , mode :'Left Bottom' , name : 'Left Bottom'},
      {id: 8 , mode :'Center Bottom' , name : 'Center Bottom'},
      {id: 9 , mode :'Right Bottom' , name : 'Right Bottom'},
    ]

      
    return (
      <div className="field-wrapper">
           <div className="div-wrapper">
                <label className="label  options">
                Color 1 :  
                </label>
                <input
                 type="color"
                 name = "backgroundColor1"
                 defaultValue={this.props.backgroundColor1}  
                 onChange = {this.onChange}
                 />              
                <Incrementer
                  name = "IncrementColor1"
                  min = "0"
                  max = "1000"
                  value= {this.props.IncrementColor1}
                  onChange = {this.onChange}
                />
          </div>

          <div className="div-wrapper">
                <label className="label  options">
                Color 2 : 
                </label> 
                <input
                 type="color"
                 name = "backgroundColor2"
                 defaultValue={this.props.backgroundColor2}  
                 onChange = {this.onChange}
                 />
                <Incrementer
                  name = "IncrementColor2"
                  min = "0"
                  max = "1000"
                  value= {this.props.IncrementColor2}
                  onChange = {this.onChange}
                />
          </div>
         
         
          <div className="div-wrapper">
                <label className="label  options">
                Gradient Position
                  </label> 
                <SelectItem modes={gradientPosition} onChange = {this.onChange} currentValue={this.props.gradientPosition} name="gradientpos"/>
              
          </div>  

          <div className="div-wrapper">
                <label className="label  options">
                Gradient Size
                  </label> 
                <SelectItem modes={gradientSize} onChange = {this.onChange} currentValue={this.props.gradientSize} name="gradientsize"/>
              
          </div>  
          <div className="div-wrapper">
                <label className="label options">
                Mix Blend Mode
                </label> 
                <SelectItem modes={modes} onChange= {this.onChange}  currentValue={this.props.mode} name="mode"/>
          </div> 
             
          <RangeItem
            value={this.props.opacity}
            name = "opacity"
            min  = "0"
            step="0.1"
            max  = "1"
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
  backgroundColor1: state.Filter.backgroundColor1,
  backgroundColor2: state.Filter.backgroundColor2,
  IncrementColor1:state.Filter.IncrementColor1,
  IncrementColor2: state.Filter.IncrementColor2,
  gradientPosition : state.Filter.gradientPosition,
  gradientSize : state.Filter.gradientSize
});




export default connect(mapStateToProps ,
 {
    change_background1_color,
    change_background2_color,
    change_opacity_value,
    change_mix_blend_mode,
    change_increment1_color,
    change_increment2_color,
    change_gradient_position,
    change_gradient_size
  }
)(RadialGradient);

