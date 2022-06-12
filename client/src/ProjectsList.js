import React from 'react';

export default function ProjectsList({projectData}) {
  const {name, desc, git, vid} = projectData;


  return (
    <div>
      Name: {name}<br/><br/>
      Description: {desc}<br/><br/>
      Git Link: {git}<br/><br/>
      Demo Vid: {vid} <br/>
      <br/>
      <br/>
    </div>
  )
}
