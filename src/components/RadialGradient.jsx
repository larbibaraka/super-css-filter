import React, { Component } from 'react';
import SelectItem from './SelectItem';
import RangeItem  from './RangeItem';
import Incrementer from './Incrementer';

 class RadialGradient extends Component {

  constructor(props){
    super(props);
    this.state = {  
      initialColor1 : '#00d1b2',
      initialColor2 : '#c4c4c4',
      opacity : 100,
      IncrementColor1 : 0,
      IncrementColor2 : 0,
      currentValuemode : 'Normal',
      currentValuegradientdirection : 'tobottom',
      currentValuegradientPosition : 'centercenter',
      currentValuegradientSize : 'closestCorner'
    }
  }

  onChange = (e) =>{
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
      [e.target.name] :  e.target.value,
    })
  }

  onChangeSelectModes = (e) =>{
     console.log(e.target.value)
    this.setState({
      currentValuemode : e.target.value
    })
    console.log(this.state)
  }


  onChangeSelectgradientDirection = (e) =>{
        console.log(e.target.value)
    this.setState({
      currentValuegradientdirection : e.target.value
    })
    console.log(this.state)
  }

      onChangegradientPosition = (e) =>{
        console.log(e.target.value)
        this.setState({
          currentValuegradientPosition : e.target.value
        })
        console.log(this.state)
    }


    onChangeSelectgradientSize = (e) =>{
      console.log(e.target.value)
      this.setState({
        currentValuegradientPosition : e.target.value
      })
      console.log(this.state)
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
      {id: 1 , mode :'Closest Side' , name : 'closestSide'},
      {id: 2 , mode :'Closest Corner' , name : 'closestCorner'},
      {id: 3 , mode :'Fartherest Side' , name : 'fartherestside'},
      {id: 4 , mode :'Fartherest Corner' , name : 'fartherestcorner'},
      ]
   
    const gradientPosition = [
      {id: 1 , mode :'Left Top' , name : 'lefttop'},
      {id: 2 , mode :'Center Top' , name : 'centertop'},
      {id: 3 , mode :'Right Top' , name : 'righttop'},
      {id: 4 , mode :'Left Center' , name : 'leftcenter'},
      {id: 5 , mode :'Center Center' , name : 'centercenter'},
      {id: 6 , mode :'Right Center' , name : 'rightcenter'},
      {id: 7 , mode :'Left Bottom' , name : 'leftbottom'},
      {id: 8 , mode :'Center Bottom' , name : 'centerbottom'},
      {id: 9 , mode :'Right Bottom' , name : 'rightbottom'},
    ]
   
   
    return (
      <div className="field-wrapper">
          <div className="div-wrapper">
                <label className="label  options">
                Color 1 :  
                </label>
                <input
                 type="color"
                 name = "initialColor1"
                 defaultValue={this.state.initialColor1}  
                 onChange = {this.onChange}
                 />              
                <Incrementer
                  name = "IncrementColor1"
                  min = "0"
                  max = "1000"
                  value= {this.state.IncrementColor1}
                  onChange = {this.onChange}
                />
          </div>

          <div className="div-wrapper">
                <label className="label  options">
                Color 2 : 
                </label> 
                <input
                 type="color"
                 name = "initialColor2"
                 defaultValue={this.state.initialColor2}  
                 onChange = {this.onChange}
                 />
                <Incrementer
                  name = "IncrementColor2"
                  min = "0"
                  max = "1000"
                  value= {this.state.IncrementColor1}
                  onChange = {this.onChange}
                />
          </div>
         
          <div className="div-wrapper">
                <label className="label  options">
                Gradient Position
                  </label> 
                <SelectItem modes={gradientPosition} onChange = {this.onChangegradientPosition} currentValue={this.state.currentValuegradientPosition}/>
              
          </div>  

          <div className="div-wrapper">
                <label className="label  options">
                Gradient Size
                  </label> 
                <SelectItem modes={gradientSize} onChange = {this.onChangeSelectgradientSize} currentValue={this.state.currentValuegradientSize}/>
              
          </div>  
          <div className="div-wrapper">
                <label className="label options">
                Mix Blend Mode
                </label> 
                <SelectItem modes={modes} onChange= {this.onChangeSelectModes}  currentValue={this.state.currentValuemode}/>
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
export default RadialGradient;