import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../Navbar/Nav.css"
import Zoro from '../Assets/Svgs/zorologo1.PNG'
import { DownCircleOutlined,
  LoginOutlined,
  UsergroupAddOutlined,
  InfoCircleOutlined, 
  UserAddOutlined, 
  FileOutlined,
   FileImageOutlined, 
  FileTextOutlined, 
  UserOutlined} from '@ant-design/icons';

function Nav() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Zoro} alt="LOGO" style={{width:"70",height:"70"}}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" aria-current="page" href="/aboutus">
                <InfoCircleOutlined style={{fontSize:"20px",fontFamily:"sans-serif"}} />
                  ABOUT US
                </a>
              </li>
              <li class="nav-item dropdown ms-5">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FEATURES
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/dashboard">
            <FileOutlined style={{fontSize:"20px",fontFamily:"sans-serif"}}/>
            INVOICE</a></li>
            <li><a class="dropdown-item" href="/test">
            <FileImageOutlined style={{fontSize:"20px",fontFamily:"sans-serif"}}/>
            INVOICE TEMPLATES</a></li>
          </ul>
        </li>
              <li className="nav-item ms-5">
                <a className="nav-link" aria-current="page" href="/signin">
                <LoginOutlined style={{ fontSize: "20px", fontFamily: "sans-serif" }} />
                  SIGN IN
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" aria-current="page" href="/signup">
                <UserAddOutlined style={{ fontSize:'20px',fontFamily:"sans-serif"}}/>
                SIGN UP</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
