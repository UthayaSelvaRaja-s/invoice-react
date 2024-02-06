import React, { useState } from 'react'
import './CreateAccount.css'
import Nav from '../Navbar/Nav';
import { Link } from 'react-router-dom';
import Signupimg from"../Assets/Svgs/Signup.svg"
import Signin from '../Assets/Svgs/signin.svg'
import Quest from '../Assets/Svgs/Qimg.svg'
import { Button, Card, Carousel, Form, Input,Select,Checkbox} from 'antd';
import {LockOutlined, UserOutlined,PhoneOutlined,MailOutlined,
  BankOutlined,GoogleOutlined,FacebookOutlined,LinkedinOutlined,TwitterOutlined,WindowsOutlined} from '@ant-design/icons';
  const { Option } = Select;
  

function CreateAccount() {
  const [form] = Form.useForm();
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
         height:"50px"
            }}
          >
            <Option value="91">+91</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
      const [dotPosition, setDotPosition] = useState('top');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  
  return (
    <div>
      <Nav></Nav>
       <div className="SignupPage-Container">
        <div className="SignupPage-Carousel">
        <Card className='SignupPage-Carousel-Card'>
            <Carousel autoplay dotPosition={dotPosition}>
              <div className="SignupPage-Carousel-container-1">
                <img src={Signupimg} alt="Login logo" />
                <h3>Hi There!  Welcome!</h3>
                <p> New here? Click on 'Sign Up' to create an account.Please 'Sign Up' to continue. We promise to keep your personal information safe and secure.
                  Have a great day!</p>
              </div>
               <div className="SignupPage-Carousel-Container-2">
                <h3>Sign In</h3>
              <img src={Signin} alt="Signin logo" />
              <p> If you Already have an account Please Sign in to your account to access exclusive features and content.</p>
              <Link to="/signin"><Button className='Carousel-Button-2'>Sign In</Button></Link>
              </div>
              <div className="SignupPage-Carousel-Container-3">
                <h3>Why Choose ZORO INVOICE?</h3>
              <img src={Quest} alt="Question Logo" />
              <p>ZORO INVOICE is an online invoicing platform that helps you create and send professional invoices in minutes. Whether you are a freelancer, a small business owner, or a large corporation,
                 ZORO INVOICE can help you manage your billing and payments with ease.</p>
              </div> 
              </Carousel>
              </Card>

              

        </div>
        <div className="Signuppage-Form">
          <Card className='SignupPage-Card' >
            <h1 className="SignupPage-Heading">Welcome To ZORO  INVOICE</h1>
            <Form form={form} initialValues={{ prefix: '+91',}}>
            <Form.Item
        name="name"
        rules={[
          {
            type: 'name',
            message: 'Please Enter Your Full Name',
          },
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined style={{fontSize:"20px"}} />}
          type="name"
          placeholder="FULL NAME" 
          style={{
            width: '80%',
            height:'50px'
          }}/>
        </Form.Item>
        <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Please Enter Your  email',
          },
          {
            required: true,
            message: 'Please input your Correct E-mail !',
          },
        ]}
      >
        <Input prefix={<MailOutlined style={{fontSize:"20px"}} />}
          type="email"
          placeholder="E-MAIL" 
          style={{
            width: '80%',
            height:'50px'
          }}/>
        </Form.Item>
        <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
        
      >
        <Input prefix={<PhoneOutlined style={{fontSize:"20px"}} />}
          addonBefore={prefixSelector}
          type="phone"
          placeholder="PHONE NUMBER"
          style={{ width: '80%', height: '50px' }}/>
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
{/* Company name */}
      <Form.Item
        name="companyname"
        rules={[
          {
            type: 'companyname',
            message: 'Please Enter Your Company Name',
          },
          {
            required: true,
            message: 'Please input your Company Name!',
          },
        ]}
      >
        <Input prefix={<BankOutlined style={{fontSize:"20px"}} />}
          type="companyname"
          placeholder="COMPANY NAME" 
          style={{
            width: '80%',
            height:'50px'
          }}/>
        </Form.Item>

        <Form.Item
      name="Country"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please select your country!',
        },
      ]}
    >
      <Select placeholder="PLEASE SELECT A COUNTRY" style={{
            width: '80%',
            height:'50px'
          }} >
        <Option value="india">India</Option>
        <Option value="usa">U.S.A</Option>
        <Option value="china">China</Option>
        <Option value="safrica">South Africa</Option>
      </Select>
    </Form.Item>
    <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Button className='SignupPage-Button'>SIGN UP FOR FREE</Button>
        
        </Form>
        <div className="SignupPage-line">
        <hr style={{width:"200px", height:"0px"}}></hr> <span>Or</span> <hr style={{width:"200px",height:"0px"}} />
      </div>  
      <div className="SignupPage-Medias">
       <a href="http://www.google.com/"><GoogleOutlined style={{fontSize:"25px"}}/></a>
       <a href=""><FacebookOutlined style={{fontSize:"25px"}} /></a>
       <a href=""><LinkedinOutlined  style={{fontSize:"25px"}}/></a>
       <a href=""><TwitterOutlined style={{fontSize:"25px"}} /></a>
       <a href=""><WindowsOutlined  style={{fontSize:"25px"}}/></a>
      </div>
          </Card>
        </div>

       </div>
    </div>
  )
}

export default CreateAccount