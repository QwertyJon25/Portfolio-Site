import React from 'react'

export default function EducationList({ eduData }) {
    const {name, date, degree} = eduData;



  return (
    <div>
        <br/>
      {name}<br/>
      {date}<br/>
      {degree}<br/>
      <br/>
      <hr className="dot-line"/>
    </div>
  )
}
