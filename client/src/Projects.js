import React, { useEffect, useState } from 'react';
import ProjectList from './ProjectsList.js';

export default function Projects() {

  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState([]);


      useEffect(() => {
        fetch('/projects/')
        .then(resp => resp.json())
        .then(projectData => setProjects(projectData))
      }, [])



      const projectCards = projects?.map(projectObj => <ProjectList key={projectObj.id} projectData={projectObj} />)


  return (
    <div className="Projects">
      <button onClick={() => setShowForm(!showForm)} className="project-button" style={{backgroundColor: "red"}}>Projects</button>
                        { showForm ? <ul className="project-cards">{projectCards}</ul> : null }<br/>
            <hr/>
        </div>
  )
}
