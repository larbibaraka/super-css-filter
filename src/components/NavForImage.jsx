import React, { Component } from 'react';
import { connect } from 'react-redux';
import {uploadNewImage} from  '../actions/previewAction';


class NavForImage extends Component {
  
    loadFile = (event)=>{
        //got this code from stackoverflow 
      
      var reader = new FileReader();
     
        let output ;
        reader.onload = function(){
            output =reader.result;
            //output.src = reader.result;
          };
          this.props.uploadNewImage(output);
        reader.readAsDataURL(event.target.files[0]);
          
        console.log("reader is : ",output)
    }

  

  render() {
    return (
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="level-item">
            <div className="field">
              <div className="file is-info">
                <label className="file-label">
                  <input className="file-input" type="file" accept="image/*" onChange={this.loadFile.bind(this)}/>
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Upload Image
                    </span>
                  </span>
                </label>
              </div>
            </div>
            </p>
          </div>
        </div>
      <div className="level-right">
        <p className="level-item">
          <a className="is-success">Show Css</a>
        </p>
      </div>
    </nav>
    )
  }
}

export default connect(
  null,
  {uploadNewImage})
  (NavForImage)