import React, {useEffect, useState } from 'react';

export default function About() {
const [abouts, setAbouts] = useState([])


    useEffect(() => {
        fetch('/abouts/')
        .then(resp => resp.json())
        .then(aboutData => setAbouts(aboutData))
    }, [])


// const aboutCards = sortedAbouts?.map(aboutObj => <AboutList key={aboutObj.id} aboutData={aboutObj} />)


  return (
        <div className="About">
          <ul className="cards">{aboutCards}</ul>
          <h2>About</h2>
            <h3>Howdy.</h3>
                <p className="intro">I am a Comic-Book Artist, Junior Software Engineer and Full-Stack Web Developer. I work at a bookstore, have held a
                    varied number of jobs during my time in the workforce, and am an enthusiastic linguistics nerd. I ❤️
                    coffee and enjoy a mostly vegetarian diet.</p>
        </div>
  )
}
