import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa6";

const Preview = ({ resumeData, isFinishClicked, isFromHistory }) => {

  useEffect(() => {
    if (isFinishClicked) {
      onDownloadClick();
    }
  }, [isFinishClicked]);
  const onDownloadClick = async () => {
    let element = document.getElementById(
      resumeData.id ? resumeData.id : "paperEl",
    );
    let canvas = await html2canvas(element, { scale: 2 });
    let imageData = canvas.toDataURL("image/png");
    let pdf = new jsPDF("p", "mm", "a4");
    let pdfWidth = pdf.internal.pageSize.getWidth();
    let pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imageData, "png", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };
  return (
    <>
      <Container>
        <Box>
          {isFinishClicked && (
            <button onClick={onDownloadClick} className="btn">
              <FaDownload /> Download Resume
            </button>
          )}
          {isFromHistory && (
            <button onClick={onDownloadClick} className="btn">
              <FaDownload /> Download Resume
            </button>
          )}
        </Box>
        <Paper
          id={resumeData.id ? resumeData.id : "paperEl"}
          className=" p-5 text-center"
          elevation={12}
        >
          <Typography variant="h5">{resumeData.fullName}</Typography>
          <Typography color="blue">{resumeData.jobTitle}</Typography>
          <Typography>
            {resumeData.phNo} | {resumeData.email} | {resumeData.jobLocation}
          </Typography>
          <Typography>
            <a href={resumeData.gitLink} target="_Blank">
              {resumeData.gitLink}
            </a>{" "}
            |{" "}
            <a href={resumeData.linkedinLink} target="_Blank">
              {resumeData.linkedinLink}
            </a>{" "}
            |{" "}
            <a href={resumeData.portfolioLink} target="_Blank">
              {resumeData.portfolioLink}
            </a>
          </Typography>
          <Divider className="mt-3">
            <Typography variant="h6">summary</Typography>
          </Divider>
          <Typography>{resumeData.summary}</Typography>
          <Divider className="mt-3">
            <Typography variant="h6">Education Details</Typography>
          </Divider>
          <Typography variant="h5" className="mt-2">
            {resumeData.courseName}
          </Typography>

          <Typography>
            {resumeData.collegeName} | {resumeData.university} |{" "}
            {resumeData.yop}
          </Typography>
          <Divider className="mt-3">
            <Typography variant="h6">Professional Experience</Typography>
          </Divider>
          <Typography variant="h5" className="mt-2">
            {resumeData.jobName}
          </Typography>

          <Typography>
            {resumeData.companyName} | {resumeData.companyLocation} |{" "}
            {resumeData.jobDuration}
          </Typography>

          <Divider className="mt-3">
            <Typography variant="h6">Skills</Typography>
          </Divider>
          {resumeData.skills.length > 0 && (
            <Box className="d-flex gap-3 mt-3">
              {resumeData.skills.map((eachSkill) => (
                <Button variant="outlined">{eachSkill}</Button>
              ))}
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Preview;