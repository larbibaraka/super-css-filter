import React, { Component } from 'react';
import SelectItem from './SelectItem';   
import RangeItem  from './RangeItem';
import Incrementer from './Incrementer';
 class LinearGradient extends Component {

  constructor(props){
    super(props);
    this.state = {
      initialColor : '#00d1b2',
      opacity : 100,
      IncrementColor1 : 0,
      IncrementColor2 : 0,
      mode : '',
      gradientdirection : ''

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
    console.log(this.state)
    this.setState({
        mode : e.target.value
    })
  }


  onChangeSelectgradientDirection = (e) =>{
    console.log(this.state)
    this.setState({
      gradientdirection : e.target.value
    })
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

    const gradientsDirection = [
      {id: 1 , mode :'To Top' , name : 'totop'},
      {id: 2 , mode :'To Top Left' , name : 'totopleft'},
      {id: 3 , mode :'To Top Right' , name : 'totopright'},
      {id: 4 , mode :'To Left' , name : 'toleft'},
      {id: 5 , mode :'To Right' , name : 'toright'},
      {id: 6 , mode :'To Bottom' , name : 'tobottom'},
      {id: 7 , mode :'To Bottom Left' , name : 'tobottomleft'},
      {id: 8 , mode :'To Bottom Right' , name : 'tobottomright'}
  
    ]
    return (
      <div className="field-wrapper">
       
          <div className="div-wrapper">
                <label className="label  options">
                Color 1 :  
                </label>
                <input
                 type="color"
                 defaultValue={this.state.initialColor}  
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
                 defaultValue={this.state.initialColor}  
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
                Gradient Direction
                  </label> 
                <SelectItem modes={gradientsDirection} onChange = {this.onChangeSelectgradientDirection}/>
              
          </div>  
          <div className="div-wrapper">
                <label className="label options">
                Mix Blend Mode
                </label> 
                <SelectItem modes={modes} onChange= {this.onChangeSelectModes}  currentValue="Normal"/>
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
export default LinearGradient;