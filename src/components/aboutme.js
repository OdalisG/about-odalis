import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (

            <div style= {{width: '100%', margin: 'auto'}}>
              <Grid className="Odalis-grid">
               <Cell col={12}>

        <div className="banners-text">
    <h1>This website is just a sample for viewing purposes. Though, I do have real projects posted under the projects tab, the rest of the site
    is for the purpose of showing my skill progress with 0-1 years of experience. Clicking on "My Portfolio" will take you back to the main page.</h1>
        <hr/>
        <p>Not only can I create your website, I can also create online forms</p>

        //Icon links
        <div className="social-links">
        <a href="http://facebook.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-facebook" aria-hidden="true" /></a>
        <a href="http://twitter.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-twitter-square"  aria-hidden="true" /></a>
        <a href="http://snapchat.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-snapchat-square"  aria-hidden="true" /></a>
          <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true" /></a>
        <a href="http://yahoo.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-yahoo"  /></a>

        </div>

        </div>
               </Cell>
              </Grid>
            </div>
          )
        }
      }


export default About;
