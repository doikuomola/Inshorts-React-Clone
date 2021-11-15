import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">Inshorts clone made by - {" "}
        <a href="https://www.linkedin.com/in/david-ikuomola-1747601a4/" target="_blank" rel="noreferrer">David</a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/_walestrings/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/david-ikuomola-1747601a4/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/doikuomola" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </div>
  )
}

export default Footer
