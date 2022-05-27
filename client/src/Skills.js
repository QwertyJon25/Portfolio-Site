import React from 'react'
// import React, {useEffect, useState } from 'react';

export default function Skills() {

// const [skills, setSkills] = useState([])
// const [showForm, setShowForm] = useState([])


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
                        { showForm ? <ul className="age-cards">{agencyCards}</ul> : <img className="agency-img" src="https://www.thesprucepets.com/thmb/AYrOH3UNNGqwwkcMOjE8BJdA9YA=/1854x1854/smart/filters:no_upscale()/pitbull-dog-breeds-4843994-hero-db6922b6c8294b45b19c07aff5865790.jpg" alt="agency-img"/>}<br/>
                <button onClick={() => setShowForm(!showForm)} className="pooch-button" style={{backgroundColor: "#8BF5C7"}}>What pooches do we have?</button> -- example of show form syntax 
                        {/* <p>Tech</p> <p>Art</p> going to feature drop down for both, iterated to front with boolean filter contingent on is tech or not. */}
            <h3>Illustrator</h3>
                    <p>I've been drawing since I was six years old and have been making comics ever since. While largely
                        self-taught, I
                        maintain a consistent interest in foundational training and innovation in my creative
                        expression.</p>
        </div>
  )
}
