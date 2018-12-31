import React, { Component } from 'react';
import { connect } from 'react-redux';
import {uploadNewImage , showCssBlock} from  '../actions/previewAction';
import ReactFileReader from 'react-file-reader';


class NavForImage extends Component {
  
    loadFile = (files)=>{
         this.props.uploadNewImage(files.base64);
    }

    showCssBlock = () =>{
        
        (this.props.showCss) ? this.props.showCssBlock(false) :this.props.showCssBlock(true);
    }

    render() {
      return (
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="level-item">
              <div className="field">
                <div className="file is-info">
                <ReactFileReader handleFiles={this.loadFile} base64={true}>
                  <label className="file-label">
                     <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">
                          Upload Image
                      </span>
                    </span>
                  </label>
                  </ReactFileReader>
                </div>
              </div>
              </p>
            </div>
          </div>
        <div className="level-right">
          <p className="level-item">
            <a className="button is-warning" onClick={this.showCssBlock}>Show Css</a>
          </p>
        </div>
      </nav>
      )
  }
}
const mapStateToProps = state =>({
  showCss : state.PreviewReducer.showCss
})
export default connect(
  mapStateToProps,
  {
    uploadNewImage,
    showCssBlock
  })
  (NavForImage)