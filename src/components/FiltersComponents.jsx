import React, { Component } from 'react'
import PanelOption from './PanelOption';
import RangeItem  from './RangeItem';
import RadioItem  from './RadioItem';
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

      switch (e.target.name) {
        case 'none':
          this.setState({none:true, solidBackground : false , linearGradient : false, radialGradient : false , typeChosen : 'none'});
          break;
        case 'solidBackground' :
          this.setState({none:false, solidBackground : true , linearGradient : false, radialGradient : false , typeChosen : 'solidBackground'});
          break;
        case 'linearGradient':
          this.setState({none:false, solidBackground : false , linearGradient : true, radialGradient : false , typeChosen : 'linearGradient'});
          break;
        case 'radialGradient' :
          this.setState({none:false, solidBackground : false , linearGradient : false, radialGradient : true , typeChosen : 'radialGradient'});
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
   return (
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
           <RangeItem
              value={this.state.blur}
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
              value={this.state.hueRotate}
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
              value={this.state.invert}
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
              value={this.state.grayScale}
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
              value={this.state.sepia}
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
              value={this.state.saturation}
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
              value={this.state.brightness}
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
              value={this.state.contrast}
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
                name = "none"
                value={this.state.none}
                onChange={this.onChange}
                label="None"
                />
              <RadioItem
                name = "solidBackground"
                value={this.state.solidBackground}
                onChange={this.onChange}
                label="Solid Background"
              />
              <RadioItem
                name = "linearGradient"
                value={this.state.linearGradient}
                onChange={this.onChange}
                label="Linear Gradient"
              />
              <RadioItem
                name = "radialGradient"
                value={this.state.radialGradient}
                onChange={this.onChange}
                label="Radial Gradient"
              />
              <div className="div-wrapper">
                <PanelOption type= {this.state.typeChosen}/>
              </div>
              
            </div>
          </div>
       </nav>
    )
  }
}
export default FiltersComponents;