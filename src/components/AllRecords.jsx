import React from 'react'
import Annotationwindow from './Annotationwindow.jsx'
import Records from './Records.jsx'

const AllRecords = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      <Records />
      <Annotationwindow />
    </div>
  )
}

export default AllRecords
