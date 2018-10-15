import React, { Component } from 'react'
import styled from 'styled-components';
class cssCode extends Component {
  render() {
    const CSSCODE = styled.div`
    border: 1px solid blue;
    height: 100%;
   `;
    return (
      <CSSCODE>
          <h1 className="text-center text-warning">csscode</h1>


      </CSSCODE>
    )
  }
}
export default cssCode;