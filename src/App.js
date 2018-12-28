import React, { Component } from 'react';
//import logo from './logo.svg';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div style={{height: '850px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header className="header-color" transparent title="Welcome to my page" style={{color: 'white'}}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Main/>
        <Content />
    </Layout>
</div>
    );
  }
}

export default App;
