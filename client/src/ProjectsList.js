import React from 'react';

export default function ProjectsList({projectData}) {
  const {name, desc, git, vid} = projectData;


  return (
    <div>ProjectsList
      {name}<br/>
      {desc}<br/>
      {git}<br/>
      {vid}
    </div>
  )
}
