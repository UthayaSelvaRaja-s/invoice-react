import React from 'react';
import "../About/Aboutus.css"
import Nav from '../Navbar/Nav';
import Foot from '../Footer/Footer';
import { Card, Layout,} from 'antd';
const { Content } = Layout;

function Aboutus() {
  return (
    <div>
         <Layout>
            <Nav></Nav>
      <Content>
        <div className="Aboutcontainer">
            <div className="AboutContent">
                <h1 className="Aboutheader">Welcome to ZORO INVOICE, your reliable and user-friendly free invoice generator.</h1>
                <Card title="Our Mission" bodyStyle={{backgroundColor:"white",fontSize:"15px"}} headStyle={{backgroundColor:"rgb(69, 156, 152)",color:"white",fontSize:"18px"}} style={{border:"0"}}>
                 <p className='Aboutabstract'>Our mission is to simplify the invoicing process for freelancers, small business owners, and corporations alike. We believe that invoicing should be quick, easy, and hassle-free. 
                 That is why we have created a platform that allows you to generate professional invoices in a matter of minutes. </p>
                </Card>
                <h1 className="Aboutheader">What We Offer</h1>
                <Card title="Everything You Need" bodyStyle={{backgroundColor:"white",fontSize:"15px"}} headStyle={{backgroundColor:"rgb(69, 156, 152)",color:"white",fontSize:"18px"}} style={{ border:"0"}}>
                 <p className='Aboutabstract'>
                 ZORO INVOICE offers a wide range of features designed to make your invoicing process as efficient as possible:
                 <h5>Instant Invoicing</h5> <p>Create and send invoices instantly with our intuitive interface.</p>
                  <h5>Customizable Templates</h5><p> Choose from a variety of customizable invoice templates that suit your business needs.</p>
                 <h5> Client Management</h5><p> Keep track of your clients and their payment status all in one place.</p>
                <h5> Payment Tracking</h5><p> Easily track your payments and maintain a record of all your transactions.</p>
                <h5> Recurring Invoices</h5><p>Set up recurring invoices for long-term projects and subscriptions</p>
                 </p>
                </Card>
                 <h1 className="Aboutheader">Why Choose Us</h1>
                <Card title="Streamline Your Invoicing Process with Zoro Invoice!" bodyStyle={{backgroundColor:"white",fontSize:"15px"}} headStyle={{backgroundColor:"rgb(69, 156, 152)",color:"white",fontSize:"18px"}} style={{border:"0"}}>
                 <p className='Aboutabstract'>We understand that as a business owner, your time is valuable. That is why we have designed ZORO INVOICE to be as time-efficient as possible. 
                 With our platform, you can focus more on your work and less on paperwork.
                  Join us today and experience a hassle-free invoicing process! </p>
                </Card>
            </div>
        </div>
      </Content>
      <Foot></Foot>
    </Layout>

    </div>
  )
}

export default Aboutus