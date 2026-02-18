import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams()
    console.log(params.id);
    
  // Dynamic ROuting
  return (
    <div>
      <h1>{params.id} Detail Page</h1>
    </div>
  )
}

export default CourseDetail
