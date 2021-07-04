import React from "react"
import video1 from "./videos/bsw.mp4"
import video2 from "./videos/fcw.mp4"
import pic1 from "./images/Picture1.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <div className="content-wrap">
        <h1>My final year project </h1>
        <h3>Welcome to my page. Ill quickly introduce you to what 
          was my final year project to obtain my degree as Beng Communications and networks</h3>
        </div>
      </header>
      <section className="intro">
        <div className="content-wrap">
        <p><b>Name:</b> "Finding a suitable V2X protocol for Dubai"</p>
        <p><b>Aim:</b> My aim was two compare the two currect V2X standards DSRC and CV2X to determine which one
          was more appropiate to apply in Dubai
        </p>
        <p>My motivation was that I have always felt intriged by car networks. With my project I was able 
          to understand each stardard and its behaviour and its pros and cons
        </p>
        <br/>
        <h3 className="subttl">Things to considerate</h3>
        <p> As the two protocols had their strenghts and weaknesses I took into account other factors such as:
            Dubai infrastructure
            Dubai long term expectations: Interview with RTA for their point of view
            Dubai main reasons of accidents
          
        </p>
        <img src={pic1}></img>
        </div>
      </section>
     
      <section className="simulation">
       <div className="content-wrap">
         
         <h3 className="subttl" >Simulations</h3>
         <p>Now with a clearer idea of what my project consisted of I invite you to check my simulations out where I compare DSRC and CV2X!</p>

        <section className="experiment">
          <h3 className="subttl">Blind Collision Warning</h3>
          <video src={video1} alt="bsw scenario" type="video/mp4" controls>
          </video>
          <p>With <b>sudden swerve</b> being the main reason of road accidents in Dubai, I based on this to make my first scenario. In real life, it is usual that when the driver has the intention of changing lane, does not calculate the proper distance or may not realise that other cars are coming, resulting in crash.</p>
          <p>In my first scenario the green car is the swerving car and is enabled with a <b>Blind Spot Warning Module </b>that warns the driver before swerving to prevent a crash. For this case my intention was to compare how the network performance indicators variated depending on the amount of cars. Overall DSRC provided better performace in terms of packet loss and latencies</p>

        </section>


        <section className="experiment">
        <h3 className="subttl">Forward Collision Warning</h3>
        <video src={video2} alt="fcw scenario" type="video/mp4" controls>
        </video>
         <p>For my second scenario, I chose <b>not keeping enough distance</b> as factor of accidents. In the video you can see the green car will suddenly stop and the rest of the cars must stop on time to prevent the crash.</p>
         <p>This is possible as the other cars are equipped with <b>Forward Collision Module.</b> This module works in a way that is constantly checking that a car is keeping safe distance from the car in front, as soon as the distance because unsafe it sends a warning message and stops the car. For this case I wanted to compare how each protocol behaved depending on the speed of the cars. As CV2X has longer range can detect the car safely on time to stop, regardless the speed</p>
        
        </section>
        
      </div>
      </section>
    </div>
  );
}

export default App;
