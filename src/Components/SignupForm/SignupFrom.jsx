import React from 'react'
import "../SignupForm/SignupForm.css"
import { Button, Card, Form, Input,Select,Checkbox } from 'antd'
import { LockOutlined, UserOutlined,PhoneOutlined,MailOutlined,
  BankOutlined,GoogleOutlined,FacebookOutlined,LinkedinOutlined,TwitterOutlined,WindowsOutlined } from '@ant-design/icons';
const { Option } = Select;


function SignupFrom() {
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
  return (
    <div>
      <Card style={{width:500 ,marginBottom:"20px"}}>
        <h1 className='FormHeading'>Experience professional invoicing!</h1>
        <Form form={form} initialValues={{ prefix: '+91',}}>
            {/* Name */}
        <Form.Item
        name="name"
        rules={[
          {
            type: 'name',
            message: 'Please Enter Your Name',
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

        {/* Mail */}

        <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<MailOutlined style={{fontSize:"20px"}} />}
         type="email"
         placeholder="E-MAIL"
         style={{
          width: '80%',
          height:'50px'
        }} />
         
      </Form.Item>

      {/* Phonenumber */}

<Form.Item
  name="phone"
  rules={[
    {
      required: true,
      message: 'Please input your phone number!',
    },
    {
      pattern: /^[0-9]{10}$/,
      message: 'Please enter a valid 10-digit phone number!',
    },
  ]}
>
  <Input
    prefix={<PhoneOutlined style={{ fontSize: "20px" }} />}
    addonBefore={prefixSelector}
    placeholder="PHONE NUMBER"
    style={{ width: '80%', height: '50px' }}
  />
</Form.Item>

      {/* password */}

      <Form.Item
  name="password"
  rules={[
    {
      required: true,
      message: 'Please input your password!',
    },
    {
      min: 8,
      message: 'Password must be at least 8 characters long!',
    },
  ]}
  hasFeedback
>
  <Input.Password
    prefix={<LockOutlined style={{ fontSize: "20px" }} />}
    name='password'
    placeholder='PASSWORD' 
    style={{
      width: '80%',
      height:'50px'
    }}
  />
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
      <Button className='SignupButton'>SIGN UP FOR FREE</Button>
      <div className="line">
        <hr style={{width:"200px", height:"0px"}}></hr> <span>Or</span> <hr style={{width:"200px",height:"0px"}} />
      </div>  
      <div className="medias">
       <a href="http://www.google.com/"><GoogleOutlined style={{fontSize:"25px"}}/></a>
       <a href=""><FacebookOutlined style={{fontSize:"25px"}} /></a>
       <a href=""><LinkedinOutlined  style={{fontSize:"25px"}}/></a>
       <a href=""><TwitterOutlined style={{fontSize:"25px"}} /></a>
       <a href=""><WindowsOutlined  style={{fontSize:"25px"}}/></a>
      </div>
        </Form>
        </Card>

    </div>
  )
}

export default SignupFrom