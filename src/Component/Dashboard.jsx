import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Nav from '../Front/Nav';
import New from '../Front/New'
import Layout from '../Front/Layout';

function Dashboard() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            navigate('/'); // Redirect to the login page after sign-out
        }).catch((error) => {
            // An error happened.
            console.error(error);
        });
    };

    return (

        <div>
          
            <Nav/>
            <Layout/>
            <h2>Dashboard</h2>
            <button onClick={handleSignOut}>Sign Out</button>
            {/* Add other dashboard content here */}
        </div>
    );
}

export default Dashboard;
