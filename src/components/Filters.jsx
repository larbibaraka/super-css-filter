import React, { Component } from 'react'
import styled from 'styled-components';

class Filters extends Component {

  
  render() {
    const FILTERS = styled.div`
        border: 1px solid green;
        height: 100px;
       `;
    return (
      <FILTERS>
       <h1 className="text-center text-info">filters</h1>


      </FILTERS>
    )
  }
}
export default Filters;