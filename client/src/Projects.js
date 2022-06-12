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
      <h2>Featured Projects</h2>
      <button onClick={() => setShowForm(!showForm)} className="project-button" style={{backgroundColor: "red"}}>Projects</button>
                        { showForm ? null : <ul className="project-cards">{projectCards}</ul> }<br/>
            <hr/>
        </div>
  )
}
