import React, { Component } from 'react'
import styled from 'styled-components';
import atx from './atx.jpg'

 
class Preview extends Component {
  render() {
    const PREVIEW = styled.div`
            margin-top: 2%;
            background: #fff;
            height: 100%;
            width: 100%;
            padding: 2%;
            max-height: 725px;
      
       `;
    return (
      <PREVIEW>
          <nav className="level">
              <div className="level-left">
                <div className="level-item">
                <p className="level-item"><a className=" is-black"><i className="	fas fa-shield-alt"></i>Upload Image</a></p>
                </div>
                 </div>
              <div className="level-right">
                  <p className="level-item"><a className=" is-success">Show Css</a></p>
              </div>
          </nav>

          <div className="imagePreview">
              <img src={atx}/>

          </div>
      </PREVIEW>
    )
  }
}
export default  Preview;