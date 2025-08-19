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

const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, psub1img1, psub1img2 }) => {
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
                            <h3>{title} Project</h3>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere
                            amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea
                            condimentum cursus velit dui. Massa volutpat odio facilisis purus sit
                            elementum. Non.
                          </p>
                          <p>
                            Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat
                            odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus
                            pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                            sollicitudin diam
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <div className="wpo-project-single-content-des-right">
                            <ul>
                              <li>Location :<span>7 Lake Street,London</span></li>
                              <li>Client :<span>wpOceans</span></li>
                              <li>Consult :<span>Harry Johnson</span></li>
                              <li>Project Type :<span>Elito React</span></li>
                              <li>Duration :<span>6 Month</span></li>
                              <li>Completion :<span>15 Apr 2022</span></li>
                              <li>Share :<span>Creative, Portfolio</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="wpo-project-single-main-img">
                        <ReactFancyBox thumbnail={pImg} image={pImg} />
                      </div>
                    </div>

                    {/* More sections here (unchanged from your original) */}

                    <RelatedProject />
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
