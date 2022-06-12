import React, { useEffect, useState } from 'react'
import ProjectList from './ProjectsList.js'
// import React, {useEffect, useState } from 'react';

export default function Projects() {

  const [projects, setProjects] = useState([])

// const [projects, setProjects] = useState([])

      useEffect(() => {
        fetch('/projects/')
        .then(resp => resp.json())
        .then(projectData => setProjects(projectData))
      }, [])


//     useEffect(() => {
//         fetch('/projects/')
//         .then(resp => resp.json())
//         .then(projectData => setProjects(projectData))
//     }, [])


// const projectCards = sortedProjects?.map(projectObj => <ProjectList key={projectObj.id} projectData={projectObj} />)
      const projectCards = projects?.map(projectObj => <ProjectList key={projectObj.id} projectData={projectObj} />)


  return (
    <div className="Projects">
            <ul className="projectCards">{projectCards}</ul>
            <hr/>
        </div>
  )
}
