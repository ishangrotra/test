import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar';
import AddEditDrawer from './components/AddEditDrawer';
import App from './App';

const NavbarWrapper = ({ logoPath }) => {
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    switch (item) {
      case 'Students':
        navigate('/studentpage');
        break;
      case 'Mentors':
        navigate('/mentorpage');
        break;
      case 'Projects':
        navigate('/projectpage');
        break;
      case 'Enterprises':
        navigate('/organizationpage');
        break;
      default:
        navigate('/');
    }
  };

  return <Navbar logoPath={logoPath} onMenuClick={handleMenuClick} />;
};

const NewPage = () => {
  const logoPath = '/path/to/your/logo.png'; 
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavbarWrapper logoPath={logoPath} />
        <div className="container" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)' }}>
          <Routes>
            <Route path="/studentpage" element={<App entity="students" />} />
            <Route path="/mentorpage" element={<App entity="mentors" />} />
            <Route path="/projectpage" element={<App entity="projects" />} />
            <Route path="/organizationpage" element={<App entity="organizations" />} />
            <Route path="/" element={<div>Welcome to the home page</div>} />
          </Routes>
        </div>
        <AddEditDrawer /> {/* Add Drawer here */}
      </div>
    </BrowserRouter>
  );
};

export default NewPage;
