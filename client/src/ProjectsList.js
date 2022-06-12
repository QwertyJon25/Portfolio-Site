import React from 'react';

export default function ProjectsList({projectData}) {
  const {name, desc, git, vid} = projectData;


  return (
    <div>
      Name: {name}<br/>
      Description: {desc}<br/>
      Git Link: {git}<br/>
      Demo Vid: {vid} <br/>
    </div>
  )
}
