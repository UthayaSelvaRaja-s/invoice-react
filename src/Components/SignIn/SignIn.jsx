import React, { useState } from 'react'
import "../SignIn/SignIn.css"
import Nav from '../Navbar/Nav'
import { Link } from 'react-router-dom';
import welcomelogo from '../Assets/Svgs/welcome.svg'
import Signinlogo from '../Assets/Svgs/signin.svg'
import forgetlogo from '../Assets/Svgs/forget.svg'
import { Button, Card, Carousel, Form, Input} from 'antd';
import {UserOutlined, LockOutlined,GoogleOutlined,FacebookOutlined,LinkedinOutlined,TwitterOutlined,WindowsOutlined} from '@ant-design/icons';


function SignIn (){
  const [dotPosition, setDotPosition] = useState('top');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <div>
      <Nav></Nav>
        <div className="Signin-Container">
          <div className="Signin-Form">
            <Card className='Signin-Card-1'>
            <h1 className='SigninForm-Heading'>Sign in</h1>
            <p>to access invoice</p>
            <Form>
            <Form.Item
        name="username"
        rules={[
          {
            type: 'username',
            message: 'Please Enter Your Correct User Name',
          },
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined style={{fontSize:"20px"}} />}
          type="name"
          placeholder="USER NAME" 
          style={{
            width: '80%',
            height:'50px'
          }}/>
        </Form.Item>

        <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined style={{fontSize:"20px"}}/>}
        name='password'
        placeholder='PASSWORD' 
        style={{
          width: '80%',
          height:'50px'
        }}/>
        
      </Form.Item>
      <Button className='SigninButton'>SIGN IN</Button>
      <div className="line">
        <hr style={{width:"180px", height:"0px"}}></hr> <span>Or</span> <hr style={{width:"180px",height:"0px"}} />
      </div>  
      <div className="Signin-medias">
       <a href="http://www.google.com/"><GoogleOutlined style={{fontSize:"25px"}}/></a>
       <a href=""><FacebookOutlined style={{fontSize:"25px"}} /></a>
       <a href=""><LinkedinOutlined  style={{fontSize:"25px"}}/></a>
       <a href=""><TwitterOutlined style={{fontSize:"25px"}} /></a>
       <a href=""><WindowsOutlined  style={{fontSize:"25px"}}/></a>
      </div>
            </Form>
            </Card>

          </div>
          <div className="Carousel-Container">
            <Card className='Carousel-Card'>
            <Carousel autoplay dotPosition={dotPosition}>
              <div className="Carousel-container-1">
                <img src={welcomelogo} alt="Login logo" />
                <h3>Welcome Back!</h3>
                <p>Sign in to your account to access exclusive features and content.</p>

              </div>
              <div className="Carousel-Container-2">
                <h3>Sign Up</h3>
              <img src={Signinlogo} alt="Sign logo" />
              <p> If you Don't have an account Please Sign in to your account to access exclusive features and content.</p>
              <Link to="/signup"><Button className='Carousel-Button-2'>Sign Up</Button></Link>
              </div>
              <div className="Carousel-Container-3">
                <h3>Forget Password</h3>
              <img src={forgetlogo} alt="forget logo" />
              <p>Don't worry, it happens to the best of us. Just click below, and we'll give you instructions on how to reset your password.</p>
              <Link to="/signup"><Button className='Carousel-Button-2'>Click Here</Button></Link>


              </div>
            </Carousel>
            </Card>
          </div>
        </div>
    </div>
  )
}

export default SignIn