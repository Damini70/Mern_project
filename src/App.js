import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TiLocation } from "react-icons/ti";
import { TiWeatherSnow} from "react-icons/ti";
import {TiUserAdd} from "react-icons/ti";
import Card from 'react-bootstrap/Card';
import Animate from './Animate';
function App() {
  const [data,setData]=useState({fullname:""});
  const [email,setEmail]=useState("");

  function submit(){
    
  }
  function set(event){
    setData(event.target.value)
  }
  function sete(event){
  setEmail(event.target.value)
  }
 return (

    <div className="section2">
        {/* <motion.div
  animate={{ x: 100 }}
  transition={{ ease: "easeIn", duration: 2 }}> */}

     <div className='part1'>
      <div className='text'>
      <h1 style={{"font-size":90}}>create your future
superfast</h1>
<h5>with an incredible blueprint, which covers all the possible steps & resources you need</h5> 
      </div>
   
<div className='cardd'>
<Card style={{width:"60rem",height:"20rem"}}>
  
  <div className="icon1"><div className="head"><TiLocation/></div><div className="text">Build roadmaps to success</div></div>
<div className="icon2"><div className="head"><TiWeatherSnow/></div><div className="text">Get Domain Relevant Insights</div></div>
<div className="icon3"><div className="head"><TiUserAdd/></div><div className="text">Attain a sense of clarity</div></div>
<div className="icon4"><div className="head"><TiLocation/></div><div className="text">Get directed by experts</div></div>
<div className="icon5"><div className="head"><TiLocation/></div><div className="text">Expand your Vision</div></div>
<div className="icon6"><div className="head"><TiLocation/></div><div className="text">Checklist of for success</div></div>
</Card>
</div>
</div>
{/* </motion.div> */}

<div className='part2'>
<h2 style={{"font-size":85}}>not a million features,
but the only ones you need</h2>
<h5>Dive into the features of our AI blueprint generator and discover how it can propel your projects to new heights</h5>
</div>
<div className='img'>
<div className='i1'>
  <div className='img1'>
    <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-1.4f877926.png&w=640&q=75"/>
   <div className='content'> <h5>Blueprint Document Generation</h5>
<h8>Answer a few fundamentals, our intuitive AI builds executable plans tailored to your unique vision and goals.  </h8></div>
  </div>
  <div className='img2'>
  <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-2.86d05fd9.jpg&w=640&q=75"/>
  <div className='content'><h5>Analytical Scoring</h5>
<h8>Unique scoring system provides immediate insights into your blueprint's potential impact.</h8></div>
  </div>
 </div>
 <div className='i2'>
 <div className='img3'>
  <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-3.01263314.png&w=384&q=75"/>
  <div className="content">
    <h5>Multiple Perspectives</h5>
    <h8>Explore different options for your action plan to validate your idea</h8>
  </div>
  </div>
  <div className='img4'>
  <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-4.99b74983.png&w=384&q=75"/>
  <div className='content'><h5>File Management</h5>
  <h8>
Flexibly save, copy, download, share, & edit</h8></div>
  </div>
  <div className='img5'>
  <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-5.fc09e615.png&w=384&q=75"/>
  <div className='content'><h5>Upgrade & Improve</h5>
  <h8>Fine tune your blueprints, and increase the quality by 4X</h8></div>
  </div>
</div>
</div>

<div className="part3">
  <div className='text'>
    <h3 style={{fontSize:40}}>improving at every stage with</h3>
    <h1 style={{fontSize:75}}>Ai + Human Expert</h1>
    <h6 style={{fontSize:20}}>Got a low Blueprint score? No worries. Schedule a call with our expert Blueprint writers, refine your strategy, and elevate your Blueprint's impact. Your success is just a conversation away with DayZero.</h6>
  </div>
  <div className='pic'>
<img src="https://beta.dayzero.vercel.app/_next/static/media/ai-banners.2627ec32.svg"/>
  </div>
</div>

<Animate/>
</div>

  );
}

export default App;
