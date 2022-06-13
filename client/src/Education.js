import React, { useEffect, useState } from 'react';
import EducationList from './EducationList';

export default function Education() {
        const [edu, setEdu] = useState([]);
  const [showForm, setShowForm] = useState([]);


      useEffect(() => {
        fetch('/educations/')
        .then(resp => resp.json())
        .then(eduData => setEdu(eduData))
      }, [])



      const eduCards = edu?.map(eduObj => <EducationList key={eduObj.id} eduData={eduObj} />)


  return (
    <div div className="Education">
        <h2>Education</h2>
      <button onClick={() => setShowForm(!showForm)} className="edu-button" style={{backgroundColor: "#8BF5C7"}}>See My Schooling!</button>
                        { showForm ? null : <ul className="edu-cards">{eduCards}</ul> }<br/>
            <hr/>
    </div>
  )
}
