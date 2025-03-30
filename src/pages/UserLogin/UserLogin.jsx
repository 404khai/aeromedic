// import React from 'react'
// import './UserLogin.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { BiLogoGmail } from "react-icons/bi";
// import { IoKeySharp } from "react-icons/io5";


// const UserLogin = () => {

//     const navigate = useNavigate(); // Initialize navigation

//   // Function to handle Sign In button click
//   const handleSignIn = (e) => {
//     e.preventDefault(); // Prevent form submission refresh

//     // Show Toastify notification
//     toast.success('Logged in successfully!', {
//       position: "top-right",
//       autoClose: 2000, // 2 seconds duration
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "dark",
//     });

//     // Navigate to Dashboard after the toast is done
//     setTimeout(() => {
//       navigate('/Home');  // Redirect to Dashboard
//     }, 2000); // Match autoClose duration
//   };

//   return (
//     <div className='formBg'>
//         <form className="userLoginForm">

//             <div className="email">
//                 <label>Email </label>
//                 <div className="inputForm">
//                     <i><BiLogoGmail /></i>
//                     <input type="text" className="input" placeholder="Enter your Email"/>
//                 </div>
//             </div>    

//             <div className="password">
//                 <label>Password </label>
//                 <div className="inputForm">
//                     <i><IoKeySharp /></i>       
//                     <input type="password" className="input" placeholder="Enter your Password"/>
//                 </div>
//             </div>

//             <div className="forgotPass">
//                 <span className="span">Forgot password?</span>
//             </div>

//             <div className="s">
//                 <button className="signInBtn" onClick={handleSignIn}>
//                     <Link to=''>Log In</Link>
//                 </button>
//             </div>
            
//             <p className="p">Don't have an account? <Link className='span' to='/UserSignUp'>Sign Up</Link></p>

//         </form>

//         <ToastContainer style={{marginTop: "70px"}}/>
//     </div>
//   )
// }

// export default UserLogin


import React, { useState } from 'react';
import './UserLogin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { IoKeySharp } from "react-icons/io5";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle login
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Logged in successfully!', {
          position: 'top-right',
          autoClose: 2000,
          theme: 'dark',
        });
        console.log(email);
        
        // Redirect to Dashboard after toast
        setTimeout(() => {
          navigate('/Home');
        }, 2000);
      } else {
        toast.error(data.message || 'Invalid email or password');
      }
    } catch (error) {
      toast.error('Failed to connect to server');
    }
  };

  return (
    <div className='formBg'>
      <form className="userLoginForm" onSubmit={handleSignIn}>
        <div className="email">
          <label>Email </label>
          <div className="inputForm">
            <i><BiLogoGmail /></i>
            <input
              type="text"
              className="input"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="password">
          <label>Password </label>
          <div className="inputForm">
            <i><IoKeySharp /></i>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="forgotPass">
          <span className="span">Forgot password?</span>
        </div>

        <div className="s">
          <button className="signInBtn" type="submit">
            Log In
          </button>
        </div>

        <p className="p">
          Don't have an account? <Link className='span' to='/UserSignUp'>Sign Up</Link>
        </p>
      </form>

      <ToastContainer style={{ marginTop: "70px" }} />
    </div>
  );
};

export default UserLogin;
