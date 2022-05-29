import React from 'react'

export default function AboutList({ aboutData }) {
const {bio, image } = aboutData;



  return (
    <div>
      <p>About List</p> <br/>
      Image: {image} <br/>
      Bio: {bio}
    </div>
  )
}
