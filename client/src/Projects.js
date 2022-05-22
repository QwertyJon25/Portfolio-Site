import React from 'react'
import React, {useEffect, useState } from 'react';

export default function Projects() {

const [projects, setProjects] = useState([])


    useEffect(() => {
        fetch('/projects/')
        .then(resp => resp.json())
        .then(projectData => setProjects(projectData))
    }, [])


const projectCards = sortedProjects?.map(projectObj => <ProjectList key={projectObj.id} projectData={projectObj} />)


  return (
    <div className="Projects">
            <h2>Projects</h2>
            <p>Projects</p>
            <p>Projects</p>
            <p>Projects</p>
        </div>
  )
}
