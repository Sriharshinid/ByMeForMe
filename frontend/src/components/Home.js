import React from 'react';
import Spongebob from '../images/spongebob.png'

class Home extends React.Component {
  render() {
    return (
        <div>
            <h1>hElLo w<span><img src={Spongebob} style={{height: "3%", width: "3%", objectFit: "contain", borderRadius: "80%"}}></img></span>rlD</h1>
            <p>Welcome to a site of random things made by me.</p>
            {/* <div style={{
                display: "block",
                margin: "auto",
                minHeight: "1px",
                width: "20%",
                overflow: "auto"}}>
              <img src={Spongebob} style={{height: "100%", width: "100%", objectFit: "contain"}}></img>
            </div>  */}
        </div>
    );
  }
}

export default Home;
