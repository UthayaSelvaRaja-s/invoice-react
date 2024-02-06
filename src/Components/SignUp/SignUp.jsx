import React from 'react'
import './SignUp.css'
import Nav from '../Navbar/Nav';
import Foot from '../Footer/Footer';
import SignupFrom from '../SignupForm/SignupFrom';
import { Layout} from 'antd';
const {Content} = Layout;

function SignUp (){
      
  return (
    <div>
    <Layout>
      <Nav></Nav>
      <Content className='contentStyle'>
        <div className="bodyContent">
          <h1 className="Brand-Name">ZORO INVOICE</h1>
            <h1 className='bodyHead'>100% free online invoicing software <br></br>
              < div className="bodyHead-sub">
                 <h1>for small businesses</h1>
              </div>
            </h1>
            <p className='bodyText'>
              Free Invoice is an online invoicing software designed to help small businesses with invoicing and payment collection.
              <b> It is simple, secure, and absolutely free.</b>
            </p> 
        </div>
        <div className="Signinform">
          <SignupFrom></SignupFrom>
        </div>
        
      </Content>
      <Foot></Foot>
     
    </Layout>
    </div>
  )
}

export default SignUp