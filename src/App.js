import React from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'
import {useState} from 'react'

function App() {
  const [allProfiles, setAllProfiles]=useState([
    {
      firstname:"Ama",
      lastname:"Mensah",
      email:"mensah@gmail.com",
      phone:"0596593012"
    }
  ])
  const updateProfiles = (profile)=>{
    let arr =allProfiles;
    arr.push(profile);
    setAllProfiles([...arr]);
  };
  return (
    <div className='app'>
      <h1>Profile Maker</h1>
      <div>
      <ProfileForm submit={updateProfiles}/>
      <hr/>
      <div className='list'>
        {allProfiles.map((person,index)=>(
        <ProfileCard key={index} card={person}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default App