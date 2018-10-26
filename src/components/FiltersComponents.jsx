import React, { Component } from 'react'
import PanelOption from './PanelOption';
import RangeItem  from './RangeItem';
import RadioItem  from './RadioItem';
//** adding the redux part */
import {connect} from 'react-redux';
/** action part */
import 
{
    change_blur_filter,
    change_hue_rotate_filter,
    change_invert_filter,
    change_gray_scale_filter,
    change_sepia_filter,
    change_satuation_filter,
    change_brightness_filter,
    change_contrast_filter,
    change_none_filter,
    change_solid_background_filter,
    change_linear_gradient_filter,
    change_radial_gradient_filter,
    change_type_chosen_filter,
    clear_all
}  from '../actions/FiltersAction';

class FiltersComponents extends Component {
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
        typeChosen : 'none'
     }

  }

  onChange = (e)=>{
      console.log('--->' , e.target.name) 

      if(e.target.name === 'blur'){
        this.props.change_blur_filter(e.target.value);
      }




      switch (e.target.name) {
        case 'blur' :
          this.props.change_blur_filter(e.target.value);
          break;
        case 'hueRotate' :
          this.props.change_hue_rotate_filter(e.target.value);
          break;
        case 'invert' : 
          this.props.change_invert_filter(e.target.value);
          break;
        case 'grayScale' : 
          this.props.change_gray_scale_filter(e.target.value);
          break;
        case 'sepia' :
          this.props.change_sepia_filter(e.target.value);
          break;
        case 'saturation' :
          this.props.change_satuation_filter(e.target.value);
          break;
        case 'brightness' :
          this.props.change_brightness_filter(e.target.value);
          break;
        case 'contrast' :
          this.props.change_contrast_filter(e.target.value);
          break;

        case 'radioPanel':
          this.props.change_type_chosen_filter(e.target.value);
          break;
        default :
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
    console.log('the reducer is ', this.props.FilterReducer)

   return (
      <nav className="panel">
          <div  className="panel-heading">
              <h1 className="title is-4 is-centered">Filters</h1>
              <p 
              className="button is-danger is-centered"
              onClick={this.onClick}
              >
              ClearAll</p>
          </div>
          <div className="panel-block"> 
           <RangeItem
              value={this.props.blur}
              name = "blur"
              min  = "0"
              max  = "10"
              onChange = {this.onChange}
              unit = "px"
              label = "Blur"
            />
          </div>
          <div className="panel-block"> 
            <RangeItem
              value={this.props.hueRotate}
              name = "hueRotate"
              min  = "0"
              max  = "360"
              onChange = {this.onChange}
              unit = "dg"
              label = "Hue Rotate"
            />
          </div>
          <div className="panel-block"> 
             <RangeItem
              value={this.props.invert}
              name = "invert"
              min  = "0"
              max  = "100"
              onChange = {this.onChange}
              unit = "%"
              label = "Invert"
            />
          </div>
          <div className="panel-block"> 
            <RangeItem
              value={this.props.grayScale}
              name = "grayScale"
              min  = "0"
              max  = "100"
              onChange = {this.onChange}
              unit = "%"
              label = "Grayscale"
            />
          </div>
          <div className="panel-block"> 
            <RangeItem
              value={this.props.sepia}
              name = "sepia"
              min  = "0"
              max  = "100"
              onChange = {this.onChange}
              unit = "%"
              label = "Sepia"
            />
          </div>
          <div className="panel-block"> 
            <RangeItem
              value={this.props.saturation}
              name = "saturation"
              min  = "0"
              max  = "200"
              onChange = {this.onChange}
              unit = "%"
              label = "Saturation"
            />

          </div>
          <div className="panel-block"> 
            <RangeItem
              value={this.props.brightness}
              name = "brightness"
              min  = "0"
              max  = "200"
              onChange = {this.onChange}
              unit = "%"
              label = "Brightness"
            />
          </div>
          <div className="panel-block"> 
            <RangeItem
              value={this.props.contrast}
              name = "contrast"
              min  = "0"
              max  = "200"
              onChange = {this.onChange}
              unit = "%"
              label = "Contrast"
            />
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">OVERLAY :</label>
              <RadioItem
                value = "none"
                name = "radioPanel"
                onChange={this.onChange}
                label="None"
                />
              <RadioItem
                value = "solidBackground"
                name  = "radioPanel"  
                onChange={this.onChange}
                label="Solid Background"
              />
              <RadioItem
                value = "linearGradient"
                name  = "radioPanel"
                onChange={this.onChange}
                label="Linear Gradient"
              />
              <RadioItem
                value = "radialGradient"
                name  = "radioPanel" 
                onChange={this.onChange}
                label="Radial Gradient"
              />
              <div className="div-wrapper">
                <PanelOption type= {this.props.typeChosen}/>
              </div>
              
            </div>
          </div>
       </nav>
    )
  }
}

const mapStateToProps = (state) =>({
 
     blur : state.Filter.blur,
     hueRotate : state.Filter.hueRotate,
     invert : state.Filter.invert,
     grayScale : state.Filter.grayScale,
     sepia : state.Filter.sepia,
     saturation : state.Filter.saturation,
     brightness : state.Filter.brightness,
     contrast : state.Filter.contrast,
     none : state.Filter.none,
     solidBackground : state.Filter.solidBackground,
     linearGradient  : state.Filter.linearGradient,
     radialGradient  : state.Filter.radialGradient,
     typeChosen : state.Filter.typeChosen

})


export default connect(
  mapStateToProps,
  { 
    change_blur_filter,
    change_hue_rotate_filter,
    change_invert_filter,
    change_gray_scale_filter,
    change_sepia_filter,
    change_satuation_filter,
    change_brightness_filter,
    change_contrast_filter,
    change_none_filter,
    change_solid_background_filter,
    change_linear_gradient_filter,
    change_radial_gradient_filter,
    change_type_chosen_filter,
    clear_all
  }
  )
  (FiltersComponents);