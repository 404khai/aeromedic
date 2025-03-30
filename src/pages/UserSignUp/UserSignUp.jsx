// import React from 'react'
// import './UserSignUp.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { BiLogoGmail } from "react-icons/bi";
// import { IoKeySharp } from "react-icons/io5";
// import { FaGoogle } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";

// const UserSignUp = () => {

//     const navigate = useNavigate(); // Initialize navigation

//   // Function to handle Sign In button click
//   const handleSignIn = (e) => {
//     e.preventDefault(); // Prevent form submission refresh

//     // Show Toastify notification
//     toast.success('Sign up successful!', {
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
//                     <Link to=''>Sign Up</Link>
//                 </button>
//             </div>
            
//             <p className="p">Already have an account? <Link className='span' to='/UserLogIn'>Log In</Link></p>
            
//         </form>

//         <ToastContainer style={{marginTop: "70px"}}/>
//     </div>
//   )
// }

// export default UserSignUp




// import React, { useState } from 'react';
// import './UserSignUp.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { BiLogoGmail } from "react-icons/bi";
// import { IoKeySharp } from "react-icons/io5";

// const UserSignUp = () => {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   // Handle form submission
//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/v1/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success('Sign up successful!', {
//           position: 'top-right',
//           autoClose: 2000,
//           theme: 'dark',
//         });

//         // Redirect after success
//         setTimeout(() => {
//           navigate('/Home');
//         }, 2000);
//       } else {
//         toast.error(data.message || 'Failed to sign up');
//       }
//     } catch (error) {
//       console.error('Sign up error:', error);
//       toast.error('Failed to connect to the server');
//     }
//   };

//   return (
//     <div className='formBg'>
//       <form className="userLoginForm" onSubmit={handleSignUp}>
//         {/* Email Input */}
//         <div className="email">
//           <label>Email </label>
//           <div className="inputForm">
//             <i><BiLogoGmail /></i>
//             <input 
//               type="email"
//               className="input" 
//               placeholder="Enter your Email" 
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required 
//             />
//           </div>
//         </div>

//         {/* Password Input */}
//         <div className="password">
//           <label>Password </label>
//           <div className="inputForm">
//             <i><IoKeySharp /></i>       
//             <input 
//               type="password" 
//               className="input" 
//               placeholder="Enter your Password" 
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required 
//             />
//           </div>
//         </div>

//         {/* Sign Up Button */}
//         <div className="s">
//           <button className="signInBtn" type="submit">
//             Sign Up
//           </button>
//         </div>
        
//         {/* Redirect to Login */}
//         <p className="p">
//           Already have an account? 
//           <Link className='span' to='/UserLogIn'>Log In</Link>
//         </p>
//       </form>

//       <ToastContainer style={{ marginTop: "70px" }}/>
//     </div>
//   );
// }

// export default UserSignUp;



import React, { useState } from 'react';
import './UserSignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { IoKeySharp } from "react-icons/io5";

const UserSignUp = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Sign up successful!', {
          position: 'top-right',
          autoClose: 2000,
          theme: 'dark',
        });
        console.log(formData.email);
        
        // Redirect after success
        setTimeout(() => {
          navigate('/Home');
        }, 2000);
      } else {
        if (data.message === 'User already exists') {
          toast.error('User already exists!', {
            position: 'top-right',
            autoClose: 2000,
            theme: 'dark',
          });
        } else {
          toast.error(data.message || 'Failed to sign up');
        }
      }
    } catch (error) {
      console.error('Sign up error:', error);
      toast.error('Failed to connect to the server');
    }
  };

  return (
    <div className='formBg'>
      <form className="userLoginForm" onSubmit={handleSignUp}>
        {/* Email Input */}
        <div className="email">
          <label>Email </label>
          <div className="inputForm">
            <i><BiLogoGmail /></i>
            <input 
              type="email"
              className="input" 
              placeholder="Enter your Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="password">
          <label>Password </label>
          <div className="inputForm">
            <i><IoKeySharp /></i>       
            <input 
              type="password" 
              className="input" 
              placeholder="Enter your Password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="s">
          <button className="signInBtn" type="submit">
            Sign Up
          </button>
        </div>
        
        {/* Redirect to Login */}
        <p className="p">
          Already have an account? 
          <Link className='span' to='/UserLogIn'>Log In</Link>
        </p>
      </form>

      <ToastContainer style={{ marginTop: "70px" }}/>
    </div>
  );
}

export default UserSignUp;
