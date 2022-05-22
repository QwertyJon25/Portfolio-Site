import React from 'react'
// import React, {useEffect, useState } from 'react';

export default function Skills() {

const [abouts, setAbouts] = useState([])


    useEffect(() => {
        fetch('/abouts/')
        .then(resp => resp.json())
        .then(aboutData => setAbouts(aboutData))
    }, [])


const aboutCards = sortedAbouts?.map(aboutObj => <AboutList key={aboutObj.id} aboutData={aboutObj} />)

  return (
    <div className="Skills">
          <h2>Skills</h2>
            <h3>Design + Development</h3>
                    <p>I may be green in the realms of coding and programming, but I'm a hard worker and a fast learner.
                        <em>Who</em> doesn't enjoy that combination!?</p>
            <h3>Illustrator</h3>
                    <p>I've been drawing since I was six years old and have been making comics ever since. While largely
                        self-taught, I
                        maintain a consistent interest in foundational training and innovation in my creative
                        expression.</p>
        </div>
  )
}
