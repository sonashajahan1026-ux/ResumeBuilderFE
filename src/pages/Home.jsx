import React from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import { TiDocument } from "react-icons/ti";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <section
          id="bg"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="box text-center">
            <Typography variant="h4" component="h1" className="text-light">
              Designed to get hired.
              <TiDocument />
            </Typography>
            <Typography variant="h6" className="mt-2">
              Your skills, your story, your next job — all in one.
            </Typography>
            <Link to={"/resumeGen"} className="btn hero-btn mt-3">
              Make your Resume
            </Link>
          </div>
        </section>
        <section className="mb-5">
          <div className="mb-5 ">
            <Typography variant="h4" component="h1" className="text-center">
              Tools
            </Typography>
          </div>
          <div className=" row">
            <div className="col ms-5">
              <Typography variant="h4" component="h1">
                Resume
              </Typography>

              <Typography variant="h6" component="h1">
                create unlimited new resumes and easily edit them afterward
              </Typography>

              <Typography variant="h4" component="h1">
                Cover Letter
              </Typography>

              <Typography variant="h6" component="h1">
                Easily write professional cover letters
              </Typography>

              <Typography variant="h4" component="h1">
                Jobs
              </Typography>

              <Typography variant="h6" component="h1">
                Automatocally recive news and relevant job posting
              </Typography>

              <Typography variant="h4" component="h1">
                Application
              </Typography>

              <Typography variant="h6" component="h1">
                Effortlessly manage track your jobs application in an organised
                manner.
              </Typography>
            </div>
            <div className="col ms-5">
              <img
                className="w-50 "
                src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section id="bg2"></section>
        <section className="mb-5">
          <div>
            <Typography variant="h4" component="h1" className="text-center">
              Testimony
            </Typography>
          </div>

          <div className="d-flex justify-content-between ms-5">
            <div className="mt-5 ">
              <Typography variant="h4" component="h1" className="mb-5">
                Trusted by proffessional worldwide.
              </Typography>

              <Typography variant="h6" component="h1">
                At liveCareer. we dont just help you create resumes-we help you
                land the job <br /> Whether you're a seasoned proffessional or just
                starting out,our tools are designed to get result. <br />
                In fact users who used LiveCareer reported getting hired an average of 48days faster <br />
                Join thousand of job seeker who've tracked their careers with a resume that truly stand out
              </Typography>
            </div>
            <div className="me-5">
              <div className="d-flex  gap-5 mb-4">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
               <div className="d-flex gap-5 mb-4">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
              <div className="d-flex gap-5 mb-4">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
              <div className="d-flex gap-5 mb-4">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
                 <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;