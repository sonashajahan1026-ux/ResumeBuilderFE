import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  deleteResumeApi,
  editResumeApi,
  getAllResumeApi,
} from "../services/AllApi";
import Swal from "sweetalert2";
import Preview from "../components/Preview";
import { MdDeleteSweep } from "react-icons/md";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CiEdit } from "react-icons/ci";

const History = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({
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
  const [skillInput, setSkillInput] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    getResumeDatas();
  }, []);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const addSkill = () => {
    if (skillInput != "") {
      if(editData.skills.includes(skillInput)){
        alert("skill already added")
      }else{
        setEditData({ ...editData, skills: [...editData.skills, skillInput] });
      }
      
    }
  };
  const getResumeDatas = async () => {
    try {
      let apiResponse = await getAllResumeApi();
      if (apiResponse.status == 200) {
        setData(apiResponse.data);
      } else {
        Swal.fire({
          title: "failed!",
          text: "something went wrong while adding!",
          icon: "error",
        });
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
  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await deleteResumeApi(id);
      if (apiResponse.status == 200) {
        Swal.fire({
          title: "success!",
          text: "successfully Deleted!",
          icon: "success",
        });
        getResumeDatas();
      } else {
        Swal.fire({
          title: "failed!",
          text: "something went wrong while deleting resume data!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "failed!",
        text: "something went wrong while deleting resume data!",
        icon: "error",
      });
    }
  };
  const onEditClick = async () => {
    try {
      let apiResponse = await editResumeApi(editData.id, editData);
      if (apiResponse.status == 200) {
        Swal.fire({
          title: "success!",
          text: "successfully Edited!",
          icon: "success",
        });
        getResumeDatas();
        handleClose();
      } else {
        Swal.fire({
          title: "failed!",
          text: "something went wrong while editing resume data!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "failed!",
        text: "something went wrong while editing resume data!",
        icon: "error",
      });
    }
  };
  return (
    <>
      <Typography
        variant="h3"
        className="text-center fw-bold my-3"
      ></Typography>
      {data.length > 0 ? (
        <div className="row">
          {" "}
          {data.map((eachResume) => (
            <div className="col-6 ">
              <button
                onClick={() => onDeleteClick(eachResume.id)}
                className="btn btn-danger"
              >
                Delete <MdDeleteSweep />{" "}
              </button>
              <button
                className="btn btn-warning ms-2"
                onClick={() => {
                  setEditData(eachResume);
                  handleOpen();
                }}
              >
                Edit <CiEdit />
              </button>
              <Preview resumeData={eachResume} isFromHistory={true} />
            </div>
          ))}
        </div>
      ) : (
        <Typography variant="h4" className="text-center fw-bold my-3">
          No resume Added
        </Typography>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="text-center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Edit Resume
          </Typography>
          <div className="d-flex justify-content-between">
            <div>
              <TextField
                value={editData.fullName}
                onChange={(e) =>
                  setEditData({ ...editData, fullName: e.target.value })
                }
                id="standard-basic"
                label="FULL NAME"
                variant="standard"
              />
              <TextField
                value={editData.jobTitle}
                onChange={(e) =>
                  setEditData({ ...editData, jobTitle: e.target.value })
                }
                id="standard-basic"
                label="JOB TITLE"
                variant="standard"
              />
              <TextField
                value={editData.jobLocation}
                onChange={(e) =>
                  setEditData({ ...editData, jobLocation: e.target.value })
                }
                id="standard-basic"
                label="LOCATION"
                variant="standard"
              />
              <TextField
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                id="standard-basic"
                label="EMAIL"
                variant="standard"
              />
              <TextField
                value={editData.phNo}
                onChange={(e) =>
                  setEditData({ ...editData, phNo: e.target.value })
                }
                id="standard-basic"
                label="PHONE NUMBER"
                variant="standard"
              />
              <TextField
                value={editData.gitLink}
                onChange={(e) =>
                  setEditData({ ...editData, gitLink: e.target.value })
                }
                id="standard-basic"
                label="GITHUB LINK"
                variant="standard"
              />
              <TextField
                value={editData.linkedinLink}
                onChange={(e) =>
                  setEditData({ ...editData, linkedinLink: e.target.value })
                }
                id="standard-basic"
                label="LINKEDIN LINK"
                variant="standard"
              />
              <TextField
                value={editData.portfolioLink}
                onChange={(e) =>
                  setEditData({ ...editData, portfolioLink: e.target.value })
                }
                id="standard-basic"
                label="PORTFOLIO LINK"
                variant="standard"
              />
              <TextField
                value={editData.courseName}
                onChange={(e) =>
                  setEditData({ ...editData, courseName: e.target.value })
                }
                id="standard-basic"
                label="COURSE NAME"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                value={editData.collegeName}
                onChange={(e) =>
                  setEditData({ ...editData, collegeName: e.target.value })
                }
                id="standard-basic"
                label="COLLEGE NAME"
                variant="standard"
              />
              <TextField
                value={editData.university}
                onChange={(e) =>
                  setEditData({ ...editData, university: e.target.value })
                }
                id="standard-basic"
                label="UNIVERSITY"
                variant="standard"
              />
              <TextField
                value={editData.yop}
                onChange={(e) =>
                  setEditData({ ...editData, yop: e.target.value })
                }
                id="standard-basic"
                label="YEAR OF PASSOUT"
                variant="standard"
              />
              <TextField
                value={editData.jobName}
                onChange={(e) =>
                  setEditData({ ...editData, jobName: e.target.value })
                }
                id="standard-basic"
                label="JOB NAME"
                variant="standard"
              />
              <TextField
                value={editData.companyName}
                onChange={(e) =>
                  setEditData({ ...editData, companyName: e.target.value })
                }
                id="standard-basic"
                label="COMPANY NAME"
                variant="standard"
              />
              <TextField
                value={editData.companyLocationLocation}
                onChange={(e) =>
                  setEditData({ ...editData, companyLocation: e.target.value })
                }
                id="standard-basic"
                label="COMPANY LOCATION"
                variant="standard"
              />
              <TextField
                value={editData.jobDuration}
                onChange={(e) =>
                  setEditData({ ...editData, jobDuration: e.target.value })
                }
                id="standard-basic"
                label="JOB DURATION"
                variant="standard"
              />

              <TextField
                value={editData.summary}
                onChange={(e) =>
                  setEditData({ ...editData, summary: e.target.value })
                }
                id="standard-basic"
                label="SUMMARY"
                variant="standard"
              />
              <Divider>Skills</Divider>
              {editData.skills.map((eachSkill) => (
                <Button variant="outlined">{eachSkill}</Button>
              ))}
              <div className="d-flex">
                <TextField
                  onChange={(e) => setSkillInput(e.target.value)}
                  id="standard-basic"
                  label="SKILLS"
                  variant="standard"
                />
                <Button onClick={addSkill} variant="contained">
                  Add Skills
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Button onClick={handleClose} variant="outlined">
              cancel
            </Button>
            <Button onClick={onEditClick} className="ms-3" variant="contained">
              submit
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default History;