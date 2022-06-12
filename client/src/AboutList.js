import React from 'react';

export default function AboutList({ aboutData }) {
const {bio} = aboutData;



  return (
    <div>
      {/* Image: {image} <br/> */}
      {bio}
    </div>
  )
}
