import React, { Component } from 'react'
import styled from 'styled-components';
import atx from './atx.jpg';
import Images  from './Images';
 
class Filters extends Component {

  
  render() {
   
    const FILTERS = styled.div`
          border: 1px solid #e5e5e5;
          border-raduis :0px;
       `;
    return (
      
      <FILTERS className="card" >
          <div className="card-title">
            <h2 className="text-center text-primary">Filters</h2> 
          </div>
          <div className="card-body">
          <div className="row">
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>
            <div className="col">
              <Images imageUrl = {atx}/>
            </div>       
          </div>

        
          

         
         
          </div>
         
      </FILTERS>
    )
  }
}
export default Filters;