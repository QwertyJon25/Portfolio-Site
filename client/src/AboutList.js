import React from 'react'

export default function AboutList({ aboutData }) {
const {bio} = aboutData;



  return (
    <div>
      <p>About List</p> <br/>
      {/* Image: {image} <br/> */}
      <img src="https://imgur.com/s3X9BIJ" alt="Jon Courtier"/>
      Bio: {bio}
    </div>
  )
}
