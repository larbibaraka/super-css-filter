import React, { Component } from 'react'
import styled from 'styled-components';
class Settings extends Component {
  render() {
    const SETTINGS = styled.div`
        border: 1px solid brown;
        height: 100px;
       `;
    return (
      <SETTINGS>
        <h1 className="text-center text-danger">settings</h1>

      </SETTINGS>
    )
  }
}

export default  Settings;
