import React from 'react'
import wifi from '../Assets/icons8-wi-fi-50.png'
import massage from '../Assets/icons8-massage-50.png'
import pool from '../Assets/icons8-lap-pool-50 (1).png'
import gym from '../Assets/icons8-gym-50.png'
import restaurant from '../Assets/icons8-restaurant-50.png'
import bar from '../Assets/icons8-bar-counter-30.png'
import sauna from '../Assets/icons8-sauna-50.png'
import kitchen from '../Assets/icons8-kitchen-room-50.png'


function Icons() {
  return (
    <div className="border">
    <img src={wifi} alt="" className="wifi"/>
    <img src={massage} alt="" className="massage"/>
    <img src={pool} alt="" className="pool"/>
    <img src={gym} alt="" className="gym"/>
    <img src={restaurant} alt="" className="restaurant"/>
    <img src={bar} alt="" className="bar"/>
    <img src={sauna} alt="" className="sauna"/>
    <img src={kitchen} alt="" className="kitchen"/>
  </div>
  )
}

export default Icons