import React, { Component } from 'react'
import styled from 'styled-components';
import atx from './atx.jpg';
import Images  from './Images';
 
class Filters extends Component {

  
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
              <input className="slider has-output is-fullwidth"  type="range" />
              <output>50px</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Hue Rotate :</label>
              <input className="slider has-output is-fullwidth"  type="range" />
              <output>50dg</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Invert :</label>
              <input className="slider has-output is-fullwidth"  type="range" />
              <output>50%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Grayscale :</label>
              <input className="slider has-output is-fullwidth"  type="range" />
              <output className="">50%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Sepia :</label>
              <input className="slider has-output is-fullwidth"  type="range" />
              <output>50%</output>
            </div>
          </div>

          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Saturation :</label>
              <input className="slider has-output is-fullwidth"  type="range" />
              <output>50%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Brightness :</label>
              <input className="slider has-output is-fullwidth"  type="range" />
              <output>50%</output>
            </div>
          </div>
          <div className="panel-block"> 
            <div className="div-wrapper">
              <label className="label">Contrast :</label>
              <input className="slider has-output is-fullwidth"  type="range" />
              <output>50%</output>
            </div>
          </div>
       </nav>
      </FILTERS>
 
     
    )
  }
}
export default Filters;