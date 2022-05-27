import React from 'react'
// import React, {useEffect, useState } from 'react';

export default function Skills() {

// const [skills, setSkills] = useState([])


//     useEffect(() => {
//         fetch('/skills/')
//         .then(resp => resp.json())
//         .then(skillData => setSkills(skillData))
//     }, [])


// const skillCards = sortedSkills?.map(aboutObj => <SkillList key={skillObj.id} skillData={skillObj} />)

  return (
    <div className="Skills">
          <h2>Skills</h2>
            <h3>Design + Development</h3>
                    <p>I may be green in the realms of coding and programming, but I'm a hard worker and a fast learner.
                        <em>Who</em> doesn't enjoy that combination!?</p>
                        {/* <p>Tech</p> <p>Art</p> going to feature drop down for both, iterated to front with boolean filter contingent on is tech or not. */}
            <h3>Illustrator</h3>
                    <p>I've been drawing since I was six years old and have been making comics ever since. While largely
                        self-taught, I
                        maintain a consistent interest in foundational training and innovation in my creative
                        expression.</p>
        </div>
  )
}
