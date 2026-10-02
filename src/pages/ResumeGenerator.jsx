import { Typography } from '@mui/material'
import React from 'react'
import './ResumeGenerator.css'
import { Link } from 'react-router-dom'
import { FaFileDownload } from "react-icons/fa";
import { PiFileCodeFill } from "react-icons/pi";


const ResumeGenerator = () => {
  return (
   <>

   <section>
    <div className='text-center mt-5'>
      <Typography variant="h4" component="h1" className="mb-5">
                Create a job-winning Resume in minutes
      </Typography>

    </div>

    <div className='d-flex justify-content-around'>
      <div className=' box2 text-center'>
        <div className='pic text-primary'> <PiFileCodeFill /> </div>
         <Typography variant="h6" component="h1" >
              Add your information
      </Typography>
      <Typography variant="h6" component="h1" >
             Add pre-written examples to each
      </Typography>
      <Typography variant="h6" component="h4" className="mb-5">
          step1
      </Typography>
       
         
      </div>
      <div className=' box2 text-center'>
         <div className='pic text-danger'><FaFileDownload /></div>
         <Typography variant="h6" component="h1" >
           Download your Resume
      </Typography>
      <Typography variant="h6" component="h1" >
            Download and start applying
      </Typography>
      <Typography variant="h6" component="h4" className="mb-5">
          step2
      </Typography>
       
         
      </div>
      
    </div>
     <div className="text-center">
        <Link  to='/form' className="btn btn-primary mt-4 mb-5">Lets Start</Link>
       </div>
   </section>
   </>
  )
}

export default ResumeGenerator