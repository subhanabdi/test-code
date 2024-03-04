import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Nav from '../Front/Nav';

import Layout from '../Front/Layout';





function Dashboard() {

    return (

        <div>
        <Nav/>
            <Layout/>
      
        </div>
    );
}

export default Dashboard;
