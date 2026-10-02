import React, { useState } from 'react'
import StepperComponent from '../components/StepperComponent'
import Preview from '../components/Preview'


const Form = () => {
  const [isFinishClicked,setIsFinishClicked]=useState(false)
  const [resumeData,setResumeData]=useState({
    fullName:"",
    jobTitle:"",
    jobLocation:"",
    email:"",
    phNo:"",
    gitLink:"",
    linkedinLink:"",
    portfolioLink:"",
    courseName:"",
    collegeName:"",
    university:"",
    yop:"",
    jobName:"",
    companyName:"",
    companyLocation:"",
    jobDuration:"",
    skills:[],
    summary:""
  })
  return (
   <>
   <div className="row mt-5">

    <div className='col-md-6'>
      <StepperComponent resumeData={resumeData} setResumeData={setResumeData} setIsFinishClicked={setIsFinishClicked}/>
    </div>
    <div className='col-md-6'>
      <Preview resumeData={resumeData} isFinishClicked={isFinishClicked}/>
    </div>
   </div>
   </>
  )
}

export default Form