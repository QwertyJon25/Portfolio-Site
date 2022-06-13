import React, {useEffect, useState } from 'react';
import SkillsList from './SkillsList.js';

export default function Skills() {

const [skills, setSkills] = useState([])
const [showForm, setShowForm] = useState([])


    useEffect(() => {
        fetch('/skills/')
        .then(resp => resp.json())
        .then(skillData => setSkills(skillData))
    }, [])


const skillCards = skills?.map(skillObj => <SkillsList key={skillObj.id} skillData={skillObj} />)

// function displayArtSkills() {
//   if (skills.is_Web === true)
//   {return skills}
//   else {
//       return skills
//   }
// };


  return (
    <div className="Skills">
          <h2>Skills</h2>
            <h3>Design + Development</h3>
                    <p>I may be green in the realms of coding and programming, but I'm a hard worker and a fast learner. 
                        <em>Who</em> doesn't enjoy that combination!?</p> <br/>
                        <button onClick={() => setShowForm(!showForm)} className="skill-button" style={{backgroundColor: "#8BF5C7"}}>Tech Skills</button>
                        { showForm ? null : <ul className="skill-cards">{skillCards}</ul> }<br/><br/><hr className="dot-line"/>
            <h3>Illustrator</h3>
                    <p>I've been drawing since I was six years old and have been making comics ever since. While largely
                        self-taught, I
                        maintain a consistent interest in foundational training and innovation in my creative
                        expression.</p>
                        <button className="art-skill-button" style={{backgroundColor: "#8BF5C7"}} >Art Skills</button>
                        {/* { showForm ? null : <ul className="art-skill-cards">{skillCards}</ul> } */}
                        <hr/>
        </div>
  )
}
