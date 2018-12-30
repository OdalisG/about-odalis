import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0 };
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">

        <Card shadow={5} style={{minwidth: '420px', margin: 'auto'}}>
        <CardTitle style={{color: 'white', height: '389px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React App</CardTitle>
        <CardText>
        I hope you enjoy my react recipe app created using react-router and APIs. This app was created using Brackets.
        Please read the README.MD in github for further instructions.
 </CardText>
 <CardActions border>
     <Button colored><a href="https://github.com/OdalisG/react-recipe.git" rel="noopener noreferrer" target="_blank">Enter GITHUB</a></Button>
 </CardActions>
 <CardMenu style={{color: '#fff'}}>
 </CardMenu>
        </Card>
</div>
  )
} else if(this.state.activeTab ===1) {
  return(
    /*Visual Studio*/
            <Card shadow={5} style={{minwidth: '420px', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '389px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNllEkWCrUQ3fXv8-SasC9uNBYaxkvkzK7kEjxIrr-wsWIDhsaXA) center / cover'}}>Visual Studio</CardTitle>
            <CardText>
            I hope you enjoy my CRUD APP, created using Visual Studio.
            Please read the README.MD in github for further instructions.
     </CardText>
     <CardActions border>
         <Button colored><a href="https://github.com/OdalisG/EmployeeCrud.git" rel="noopener noreferrer" target="_blank">Enter GITHUB</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
     </CardMenu>
            </Card>
  )
} else if(this.state.activeTab ===2) {
    return(
      /*Notepad++*/
              <Card shadow={5} style={{minwidth: '420px', margin: 'auto'}}>
              <CardTitle style={{color: 'white', height: '389px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPRJckLqtJkRjNmHWmUFHrQ3Xm36VIX0xD_I4uAhp0JtBpbIZ) center / cover'}}>Notepadd++</CardTitle>
              <CardText>
              I hope you enjoy my online repair form, created using HTML/CSS. This app was created using Notepad++.
              Please read the README.MD in github for further instructions.
       </CardText>
       <CardActions border>
           <Button colored><a href="https://github.com/OdalisG/OnlineRepairForm.git" rel="noopener noreferrer" target="_blank">Enter GITHUB></a></Button>
       </CardActions>
       <CardMenu style={{color: '#fff'}}>
       </CardMenu>
              </Card>
    )
}

}
  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}ripple>
        <Tab>React</Tab>
        <Tab>Visual Studio</Tab>
        <Tab>Notepad++</Tab>
        </Tabs>


        <Grid>
        <Cell col={12}>
        <div className="content">{this.toggleCategories()}</div>
        </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
