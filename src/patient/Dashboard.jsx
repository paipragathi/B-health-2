import React from 'react'
// import SideNav from '../elements/Navbar'

// import s1 from "../assets/slider_1.jpg"
// import s2 from "../assets/slider_2.jpg"
 import ResponsiveAppBar from '../elements/Navbar-2'
// import s3 from '../assets/slider_3.jpg'
import SideNav from '../elements/Navbar'
const Dashboard = () => {

  const slides = [
    // { url: require('../assets/slider_1.jpg').default },
    // { url: require('../assets/slider_2.jpg').default },
  ];
  const containerStyles = {
    width: "1000px",
    height: "530px",
    margin: "0 0",
    
  };
    
  return (
<> 
<h1>helloxfhf</h1>
 <ResponsiveAppBar/> 
      <div className="c" style={containerStyles}>
        <h1>ello</h1>
        <SideNav slides={slides} />
      </div> 
  

  
    </>
  )
}

export default Dashboard;