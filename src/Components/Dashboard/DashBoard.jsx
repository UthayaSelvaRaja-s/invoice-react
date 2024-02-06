import React, { useState } from 'react';
import '../Dashboard/DashBoard.css'
import {
  DashboardOutlined,
  FileOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
  PlusSquareTwoTone,
  SettingOutlined,
  DownOutlined,
  LogoutOutlined,
  HistoryOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import {  Layout,Space, Menu,theme,Input,Dropdown ,Drawer,Avatar,Popover,Button,Tabs} from 'antd';
import { Link } from 'react-router-dom'; // Import Link

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function getItem(label, key, icon, link,children) { // Add link parameter
  return {
    key,
    icon,
    label,
    link, // Save link in the object
  };
}
// Sider items
const items = [
  getItem('Dashboard', '/dashboard', <DashboardOutlined style={{fontSize:"18px"}} />, '/dashboard'),
  getItem('Home', '/', <HomeOutlined style={{fontSize:"18px"}}/>, '/'),
  getItem('Customer', 'customers', <UserOutlined style={{fontSize:"18px"}}/>, '/customer'),
  getItem('Item', 'items', <ShoppingOutlined style={{fontSize:"18px"}}/>, '/item'),
  getItem('Files', 'files', <FileOutlined style={{fontSize:"18px"}}/>, '/files'),
];


// User details popover function
const content = (
  <div className='Pop-content'>
    <div className="Pop-userdetails">
      <div className="Pop-user1">
           <Avatar shape="square" size="large" icon={<UserOutlined />} />
      </div>
      <div className="Pop-user2">
         {/* <p>User name:</p> */}
          <p>Email:</p>
      </div>
    </div>
    <div className="Pop-options">
     <p>User Id:</p>
     <p>Organization Id:</p>
    </div>
    <hr></hr>
    <div className="Pop-signout">
    <Button className='Pop-signout-btn'><LogoutOutlined />Sign Out</Button>
    </div>
  </div>
);
const content1 = (
  <div className="Addoption-content">
    <div className="Addoption-1">
    <h6>Genral</h6>
    
      <div className="Addoption-1-sub">
      <p>Add Users</p>
      <p>Add Customer</p>
      <p>Add items</p>
      </div>
    </div>
    <div className="Addoption-2">
      <h6>Sales</h6>
      <div className="Addoption-2-sub">
      <p>Customer</p>
      <p>Invoice</p>
      <p>Payments</p>
      </div>
    </div>
    <div className="Addoption-3">
      <h6>Purchase</h6>
      <div className="Addoption-3-sub">
      <p>Expenses</p>
      <p>Itmes</p>
      <p>Datas</p>
      </div>
    </div>
  </div>
)

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer},
  } = theme.useToken();

  // Drawer openclose function
  const [drawerOpen ,setdrawerOpen]=useState(false)
   const showDrawer = () => {
    setdrawerOpen(true);
  };
  const onClose = () => {
    setdrawerOpen(false);
  };
// tap Details
const items1 = [
  {
    key: '1',
    label: <div className='Tab-label-3' style={{fontSize:"18px"}}><div><h5>Dashboard</h5></div><div><LineChartOutlined style={{fontSize:"20px"}} /></div></div>,
    children: <div><h1>hi there</h1></div>,
  },
  {
    key: '/customer',
    label: <div className='Tab-label-3' style={{fontSize:"18px"}}><div><h5>Customers</h5></div><div><UserOutlined style={{fontSize:"20px"}} /></div></div>,
    children: <div>Hi there</div>,
  },
  {
    key: '3',
    label:<div className='Tab-label-3' style={{fontSize:"18px"}}><div><h5>Invoice History</h5></div><div><HistoryOutlined style={{fontSize:"20px"}} /></div></div>,
    children: <div>Tap 3</div>,
  },
];

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
  <div className="demo-logo-vertical" />
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    {items.map((item) => (
      <Menu.Item key={item.key} icon={item.icon} style={{ textDecoration: 'none' }} className="menu-item-with-icon">
        <Link to={item.link} style={{ textDecoration: 'none' }}>{item.label}</Link>
        {item.label !== 'Dashboard' && item.label !== 'Home' && (
  <Link to={item.link} className="plus-icon-link"><PlusCircleOutlined className="plus-icon" /></Link>
)}
      </Menu.Item>
    ))}
  </Menu>
</Sider>


        <Layout>
          <Header style={{ padding: 0,background: colorBgContainer, height:"50px"}}>
            <div className="Header-options">
              <div className="Search-option">
              <Search placeholder=" Search "  enterButton />
              </div>
              <div className="Options">
              <div className="Add-option">
              
              <Popover content={content1} title="Quick Create" trigger="click"><PlusSquareTwoTone trigger="hover" title='Quick Create'  style={{fontSize:"18px"}}/></Popover>
              </div>
              <div className="divider"></div>
              <div className="Setting-option">
              <SettingOutlined style={{fontSize:"18px"}} onClick={showDrawer} />
              </div>
              <div className="divider"></div>
              <div className="Drop-option">
              <Dropdown trigger={['click']}><Space> User<DownOutlined /></Space>
              </Dropdown>
              </div>
              <div className="User-option">
              <Popover content={content} title="UserName" trigger="click"><Avatar shape="square" size="large" icon={<UserOutlined />} /></Popover>
              </div>
              </div>
            </div>
            </Header>
          <h1>Hi User</h1>
          <Content style={{margin: '0 16px',}}>
            <Tabs defaultActiveKey="1" items={items1 }  />
          </Content>
{/* Drawer for Settings  */}
          <Drawer className='Settings-drawer' title="Settings" onClose={onClose} open={drawerOpen}>
        <p>Organization Profile</p>
        <p>Change Template</p>
        <p>New Customer</p>
        </Drawer>
{/* Popover for user details and signout */}
        <Popover content={content} title="Title" trigger="click"> </Popover>
{/* Footer */}
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default DashBoard;
