import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Grid, Image } from 'semantic-ui-react'
// import logo from './Logo.png';
import comm from './communication-portal.png';

function Home() {
  return (
  //   <div>
  //   <div className="menu-wrap">
  //   <input type="checkbox" className="toggler" />
  //   <div className="hamburger"><div></div></div>
  //   <div className="menu">
  //     <div>
  //       <div>
  //         <ul>
  //           <li><a href="/" id="home">Home</a></li>
  //           <li><a href="/" id="products">Products</a></li>
  //           <li><a href="/" id="services">Services</a></li>
  //           <li><a href="/" id="help">How We Help</a></li>
  //           <li><a href="/" id="company">Company</a></li>
  //           <li><a href="/Customer" id="cust">Customer</a></li>
  //           <li><a href="/Seller" id="sell">Seller</a></li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  //   </div>
  // <header className="showcase">
  //   <div className="container showcase-inner">
  //     {/* <h1 id="clientcomm">Client Communication Portal</h1>
  //     <p id="quot">Sometimes the best service is self-service</p>
  //     <a href="/" id="clientcommbtn" className="btn">Read More</a> */}
  //   </div>
  // </header>
  // </div>
  <div>
    <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/" style={{width: '170px', fontSize: '35px', marginLeft: '15px', outline: 'none'}}>
       Zerinth
      </a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/" style={{outline: 'none'}}>Home</Link></li>
        <li><Link to="/" style={{outline: 'none'}}>Company</Link></li>
        <li><Link to="/Customer" style={{outline: 'none'}}>Customer</Link></li>
        <li><Link to="/Seller" style={{outline: 'none'}}>Seller</Link></li>
      </ul>
    </div>
  </div>
</nav>
<div>
<div id="topc">
        <div id="topco">
        <Grid>
    {/* <Grid.Row columns={2} only='large screen'>
      <Grid.Column width={8}>
        <h3 style={{marginTop: '120px'}}>Customer Web Portal</h3>
      </Grid.Column>
      <Grid.Column width={8}>
      <Image src={comm} alt="Customer"/>
      </Grid.Column>
    </Grid.Row> */}
    <Grid.Row columns={2} only='computer'>
      <Grid.Column width={8}>
        <h3 style={{marginTop: '120px'}}>Customer Web Portal</h3>
      </Grid.Column>
      <Grid.Column width={8}>
      <Image src={comm} alt="Customer"/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='tablet'>
      <Grid.Column width={8}>
        <h3 style={{marginTop: '120px'}}>Customer Web Portal</h3>
      </Grid.Column>
      <Grid.Column width={8}>
      <Image src={comm} alt="Customer"/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='widescreen'>
      <Grid.Column width={8}>
        <h3 style={{marginTop: '120px'}}>Customer Web Portal</h3>
      </Grid.Column>
      <Grid.Column width={8}>
      <Image src={comm} alt="Customer"/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='mobile'>
      <Grid.Column width={16} style={{height: '50px', textAlign: 'center'}}>
       <h4>Customer Web Portal</h4>
      </Grid.Column>
      <Grid.Column width={16}>
      <Image src={comm} alt="Customer"/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
        </div>
      </div>
</div>
  </div>
  );
}

export default Home;