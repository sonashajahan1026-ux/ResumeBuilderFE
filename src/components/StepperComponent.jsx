import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { addResumeApi } from "../services/AllApi";
import Swal from "sweetalert2";

const StepperComponent = ({
  resumeData,
  setResumeData,
  setIsFinishClicked,
}) => {
  console.log(resumeData);
  const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Work Experience",
    "Skills & Certifications ",
    "Summary & Submit",
  ];
  const [skillInput, setSkillInput] = React.useState("");
  const skillSugg = ["React", "Angular", "Express js", "Node js", "MongoDb"];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const onaddSkill = (skill) => {
    if (!skill.trim()) return;
    if (resumeData.skills.includes(skill)) {
      Swal.fire("Skill is already added!");
      return;
    }
    setResumeData({ ...resumeData, skills: [...resumeData.skills, skill] });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleFinishClick = async () => {
    try {
      if (
        resumeData.fullName == "" ||
        resumeData.jobTitle == "" ||
        resumeData.jobLocation == "" ||
        resumeData.email == "" ||
        resumeData.phNo == "" ||
        resumeData.gitLink == "" ||
        resumeData.linkedinLink == "" ||
        resumeData.portfolioLink == "" ||
        resumeData.courseName == "" ||
        resumeData.collegeName == "" ||
        resumeData.university == "" ||
        resumeData.yop == "" ||
        resumeData.jobName == "" ||
        resumeData.companyName == "" ||
        resumeData.companyLocation == "" ||
        resumeData.jobDuration == "" ||
        resumeData.skills.length == 0 ||
        resumeData.summary == ""
      ) {
        Swal.fire({
          title: "fill !",
          text: "please fill the form!",
          icon: "error",
        });
      } else {
        let apiResponse = await addResumeApi(resumeData);
        if (apiResponse.status == 201) {
          Swal.fire({
            title: "Sucess!",
            text: "Successfully added new resume!",
            icon: "success",
          });
          setIsFinishClicked(true);
          setTimeout(() => {
            setResumeData({
              fullName: "",
              jobTitle: "",
              jobLocation: "",
              email: "",
              phNo: "",
              gitLink: "",
              linkedinLink: "",
              portfolioLink: "",
              courseName: "",
              collegeName: "",
              university: "",
              yop: "",
              jobName: "",
              companyName: "",
              companyLocation: "",
              jobDuration: "",
              skills: [],
              summary: "",
            });
            setIsFinishClicked(false);
          }, 2000);

          setActiveStep(0);
        } else {
          Swal.fire({
            title: "failed!",
            text: "something went wrong while adding!",
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "failed!",
        text: "something went wrong while adding!",
        icon: "error",
      });
    }
  };
  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box>
            <Typography variant="h5">Personal Details</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, fullName: e.target.value })
              }
              value={resumeData.fullName}
              className="w-100"
              id="standard-basic"
              label="Full Name"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobTitle: e.target.value })
              }
              value={resumeData.jobTitle}
              className="w-100"
              id="standard-basic"
              label="Job Title"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobLocation: e.target.value })
              }
              value={resumeData.jobLocation}
              className="w-100"
              id="standard-basic"
              label="Location"
              variant="standard"
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h5">Contact Details</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, email: e.target.value })
              }
              value={resumeData.email}
              className="w-100"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, phNo: e.target.value })
              }
              value={resumeData.phNo}
              className="w-100"
              id="standard-basic"
              label="Phone Number"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, gitLink: e.target.value })
              }
              value={resumeData.gitLink}
              className="w-100"
              id="standard-basic"
              label="GitHub Profile Link"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, linkedinLink: e.target.value })
              }
              value={resumeData.linkedinLink}
              className="w-100"
              id="standard-basic"
              label="LinkedIn Profile Link"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, portfolioLink: e.target.value })
              }
              value={resumeData.portfolioLink}
              className="w-100"
              id="standard-basic"
              label="Portfolio Links"
              variant="standard"
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h5">Education Details</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, courseName: e.target.value })
              }
              value={resumeData.courseName}
              className="w-100"
              id="standard-basic"
              label="Course Name"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, collegeName: e.target.value })
              }
              value={resumeData.collegeName}
              className="w-100"
              id="standard-basic"
              label="College Name"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, university: e.target.value })
              }
              value={resumeData.university}
              className="w-100"
              id="standard-basic"
              label="university"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, yop: e.target.value })
              }
              value={resumeData.yop}
              className="w-100"
              id="standard-basic"
              label="Year of Passout"
              variant="standard"
            />
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h5">Work Details</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobName: e.target.value })
              }
              value={resumeData.jobName}
              className="w-100"
              id="standard-basic"
              label="Job Or Internship"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, companyName: e.target.value })
              }
              value={resumeData.companyName}
              className="w-100"
              id="standard-basic"
              label="Company Name"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  companyLocation: e.target.value,
                })
              }
              value={resumeData.companyLocation}
              className="w-100"
              id="standard-basic"
              label="Location"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobDuration: e.target.value })
              }
              value={resumeData.jobDuration}
              className="w-100"
              id="standard-basic"
              label="Duration"
              variant="standard"
            />
          </Box>
        );
      case 4:
        return (
          <Box>
            <Typography variant="h5">Skills</Typography>
            <TextField
              onChange={(e) => setSkillInput(e.target.value)}
              className="w-100"
              id="standard-basic"
              label="Skills"
              variant="standard"
            />
            <Button
              onClick={() => onaddSkill(skillInput)}
              className="my-2"
              variant="contained"
            >
              Add Skills
            </Button>
            <Typography>Suggesyions: </Typography>
            <Box className="d-flex justify-content-around">
              {skillSugg.map((eachSkill) => (
                <Button
                  onClick={() => onaddSkill(eachSkill)}
                  className="my-2"
                  variant="outlined"
                >
                  {eachSkill}
                </Button>
              ))}
            </Box>
          </Box>
        );
      case 5:
        return (
          <Box>
            <Typography variant="h5">Proffessional Summary</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, summary: e.target.value })
              }
              value={resumeData.summary}
              id="standard-multiline-static"
              className="w-100"
              label="write a short summary of yourself"
              multiline
              rows={4}
              defaultValue="I'm a passionate full-stack developer with hands-on experience in React,Node ..."
              variant="standard"
            />
          </Box>
        );

      default:
        break;
    }
  };
  return (
    <Container sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {renderForm()}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={handleFinishClick}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Container>
  );
};

export default StepperComponent;
