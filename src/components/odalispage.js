import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Odalis extends Component {
  render() {
    return (
      <div style= {{width: '100%', margin: 'auto'}}>
        <Grid className="Odalis-grid">
         <Cell col={12}>
<img src="/images/odalis2.jpg" alt="avatar" className="avatar-img" />
  <div className="banner-text">
  <h1>Odalis Garcia Web Developer 2019</h1>
  <hr/>
  <p>REACT | HTML | CSS | BOOTSTRAP | JAVASCRIPT | ANDROID</p>

  //Icon links
  <div className="social-links">
  <a href="http://google.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-google" aria-hidden="true" /></a>
  <a href="http://github.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-github-square"  aria-hidden="true" /></a>
  <a href="http://youtube.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-youtube-square"  aria-hidden="true" /></a>
    <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true" /></a>
  <a href="http://codelouisville.org" rel="noopener noreferrer" target="_blank"><i class="fa fa-code"  /></a>

  </div>

  </div>
         </Cell>
        </Grid>
      </div>
    )
  }
}

export default Odalis;
