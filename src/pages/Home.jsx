import React from 'react'
import {Link} from 'React-Router-dom'
import image from '../assets/spotify.png'
import './Home.css'


const Home = () => { 
  return (
    <>
    <div className='container'>
      <div className='img'>
        <img src={image} /></div>
      <div className='a'>Premium</div>
      <div className='b'>Help</div>
      <div className='c'>Download</div>
      <div className='d'>|</div>
      <div className='e'>Sign up</div>
      <Link to={"/Login"}>
        <div className='f'>Log In</div></Link>
      
    </div>
    <div className='container1'>
      <div className='g'>Music for everyone.</div>
      <div className='h'>Millions of songs.No credit card neede.</div>
      
      <button>GET SPOTIFY FREE</button>
    
    </div>
    </>
  )
}

export default Home