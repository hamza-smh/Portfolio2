import React, { Fragment } from 'react';
import {
  Dialog,
  Grid,
  IconButton,
  DialogTitle as MuiDialogTitle,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import './style.css';
import Contact from './contact';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import RelatedProject from './related';
import CloseIcon from '@mui/icons-material/Close';

// Styled DialogTitle
const StyledDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(2),
  position: 'relative',
}));

// Styled close button
const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

// Custom DialogTitle component
function CustomDialogTitle({ children, onClose, ...other }) {
  return (
    <StyledDialogTitle {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <CloseButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      ) : null}
    </StyledDialogTitle>
  );
}

const ProjectSingle = ({ project,maxWidth, open, onClose, title, pImg,info, psub1img1, psub1img2 }) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={onClose}>
          {title}
        </CustomDialogTitle>

        <Grid className="modalBody modal-body project-modal">
          <div className="wpo-project-single-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="wpo-project-single-wrap">
                    <div className="wpo-project-single-item">
                      <div className="row align-items-center mb-5">
                        <div className="col-lg-7">
                          <div className="wpo-project-single-title">
                            <h3>{title}</h3>
                          </div>
                          <ul className="list-disc pl-6 space-y-2">
                            {project.info?.map((point, index) => (
                              <li key={index} style={{color:"#FFF"}}>{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-5">
                          <div className="wpo-project-single-content-des-right">
                            <ul>
                              <li>Location :<span>Karachi, Pakistan</span></li>
                              {
                              project.client?
                              <li>Client :<span>{project?.client}</span></li>
                              :
                              <li>Company :<span>{project?.company}</span></li>
                              }
                              <li>Project Type :<span>{project?.type}</span></li>
                              <li>Duration :<span>{project?.duration}</span></li>
                              <li>Completion :<span>{project?.completion}</span></li>
                              {project?.link &&<li>Share :<span>{project?.link}</span></li>}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="wpo-project-single-main-img">
                        {/* <ReactFancyBox thumbnail={pImg} image={pImg} /> */}
                              <div className = "wpo-project-img"
                              style = {
                                {
                                  backgroundImage: `url(${project.pImg})`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center center",
                                  backgroundSize: "100% 100%",
                                  height: "300px",
                                  borderRadius: "10px",
                                  boxShadow: " 0 14.5px 18.5px -12px #000000"
                                }
                              }
                              />
                      </div>
                    </div>

                    {/* More sections here (unchanged from your original) */}

                    <RelatedProject  skipProject={project}/>
                    <div className="wpo-project-single-item">
                      <div className="wpo-project-contact-area">
                        <div className="wpo-contact-title">
                          <h2>Have project in mind? Let's discuss</h2>
                          <p>Get in touch with us to see how we can help you with your project</p>
                        </div>
                        <div className="wpo-contact-form-area">
                          <Contact />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};

export default ProjectSingle;
