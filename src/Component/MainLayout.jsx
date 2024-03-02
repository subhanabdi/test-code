import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Nav from '../Front/Nav';
import New from '../Front/New'
import Layout from '../Front/Layout';

import Dashboard from '../Screen/Dashboard';



function MaiLayout() {

    return (

        <div>
        <Nav/>
            <Layout/>
      <Dashboard/>
        </div>
    );
}

export default MaiLayout;
