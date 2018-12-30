import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import  Education  from './education';



class Resume extends Component {
  render() {
    return (
      <div>
      <Grid>
      <Cell className="resume-left-col" col={4}>
        <div style={{textAlign: 'center'}}>
        <img src="/images/odalis2.jpg" alt="avatar" style={{height: '200px'}} className="avatar-img" />
        </div>
        <h2 style={{paddingTop: '2em'}}>Odalis Garcia</h2>
        <h4 style={{color: 'black'}}>WEB DEVELOPER</h4>
        <hr style={{borderTop: '4px solid #833fb2', width: '50%'}}/>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <hr style={{borderTop: '4px solid #833fb2', width: '50%'}}/>
          <h5>Address</h5>
          <p>879 Code Street Circle, 40014, &#169;2019 All rights reserved</p>
          <h8>LET'S CODE</h8>

      </Cell>
      <Cell className="resume-right-col" col={8}>
      <h2>Education</h2>
      <Education
      startYear={2000}
      endYear={2004}
      schoolName="Sullivan"
      schoolDescription="Education in the inner city wasnt so much survival of the fittest as survival of the least interesting Being different made you a target It was better by far to be a beige kid someone folks forget about before youve even left the room The teachers were an odd mixture of tough and timid either theyd shut off their emotions to avoid a nervous breakdown or theyd had it already I learnt plenty though mostly lessons I hope my future kids never have to learn I know some folks laugh at white picket fence dreams jibe at suburbia but Ive got that cozy little home in my sights and Im not letting go -by Angela Abraham" />

      <Education
      startYear={2004}
      endYear={2008}
      schoolName="LouisvilleTech"
      schoolDescription="Education in the inner city wasnt so much survival of the fittest as survival of the least interesting Being different made you a target It was better by far to be a beige kid someone folks forget about before youve even left the room The teachers were an odd mixture of tough and timid either theyd shut off their emotions to avoid a nervous breakdown or theyd had it already I learnt plenty though mostly lessons I hope my future kids never have to learn I know some folks laugh at white picket fence dreams jibe at suburbia but Ive got that cozy little home in my sights and Im not letting go -by Angela Abraham" />





      </Cell>
      </Grid>
      </div>
    )
  }
}

export default Resume;
