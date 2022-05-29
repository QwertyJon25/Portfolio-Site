import React from 'react'

export default function SkillsList({ skillData }) {
const { name } = skillData;


  return (
    <div>
      <h3>SkillsList</h3>
      {name}
    </div>
  )
}
