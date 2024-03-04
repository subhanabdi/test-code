import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Nav from '../Front/Nav';
import New from '../Front/New'
import Layout from '../Front/Layout';
import Sidebar from '../Front/Sidebar'
import Navb from "../Screen/Navb"



function Dashboard() {

    return (

        <div>
        <Nav/>
            <Layout/>
      
        </div>
    );
}

export default Dashboard;
