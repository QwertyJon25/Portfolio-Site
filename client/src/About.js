import React, {useEffect, useState } from 'react';
import AboutList from './AboutList.js';


export default function About() {
const [abouts, setAbouts] = useState([])


    useEffect(() => {
        fetch('/abouts/')
        .then(resp => resp.json())
        .then(aboutData => setAbouts(aboutData))
    }, [])


const aboutCards = abouts?.map(aboutObj => <AboutList key={aboutObj.id} aboutData={aboutObj} />)


  return (
        <div className="About">
          <h2>About</h2>
            <h3>Howdy.</h3>
            <ul className="aboutCards">{aboutCards}</ul>
            <hr/>
                {/* <p className="intro">I am a Comic-Book Artist, Junior Software Engineer and Full-Stack Web Developer. I work at a bookstore, have held a
                    varied number of jobs during my time in the workforce, and am an enthusiastic linguistics nerd. I ❤️
                    coffee and enjoy a mostly vegetarian diet.</p> */}
        </div>
  )
}
