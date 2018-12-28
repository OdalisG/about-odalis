import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render() {
    return(
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Odalis Garcia</h2>
      <img src="/images/odalis2.jpg" alt="avatar" style={{height: '320px'}} className="avatar-img" />
<p styel={{ width: '75%', margin: 'auto', paddingTop: '3em'}}>Did you know that It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </Cell>

      <Cell col={6}>
     <h2>Contact Me</h2>
     <hr/>
     <div className="contact-list">
     <List>
  <ListItem>
    <ListItemContent style={{fontSize: '45px', fontFamily: 'Staatliches'}}>
    <i className ="fa fa-phone-square" aria-hidden="true" />
    (502)-123-4567</ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent style={{fontSize: '40px', fontFamily: 'Staatliches'}}>
    <i className ="fa fa-fax" aria-hidden="true" />
    1-(888)-123-4567 ext:789</ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent style={{fontSize: '45px', fontFamily: 'Staatliches'}}>
    <i className ="fa fa-envelope" aria-hidden="true" />
    odalisg@hotmail.com</ListItemContent>
  </ListItem>


  <ListItem>
    <ListItemContent style={{fontSize: '45px', fontFamily: 'Staatliches'}}>
    <i className ="fa fa-skype" aria-hidden="true" />
    See you on skype</ListItemContent>
  </ListItem>

</List>
</div>
  </Cell>
      </Grid>
      </div>

    )
  }
}
export default Contact;
