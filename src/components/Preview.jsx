import React, { Component } from 'react'
import styled from 'styled-components';
class Preview extends Component {
  render() {
    const PREVIEW = styled.div`
        border: 1px solid red;
        height: 100px;
       `;
    return (
      <PREVIEW>
        <h1 className="text-center text-primary">preview</h1>


      </PREVIEW>
    )
  }
}
export default  Preview;