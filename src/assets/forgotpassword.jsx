
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = (e) => {
//       e.preventDefault();
      
//       // Simulate API call to update password
//       console.log(`Updating password for ${email}`);

//       // Redirect to login page after successful password update
//       alert('Password updated successfully! Redirecting to login...');
//       navigate('/'); // Redirect to login page
//   };
//   return (
//     <div className='forgotpwd-container'>
//     <div className='forgotpwd'>
//       <div className='title'>
//         <h1>Forgot Password</h1>
//         <div className='inputs'>UserName: </div>
//           <input type='text' placeholder='Enter username'/><br/>
//         <div className='inputs'>New Password: </div>
//           <input type='password' placeholder='Enter new password'/>
//           {/* <button type="submit" className="btn">Update password!</button> */}
//           <button onClick={() => navigate("/login")} className="btn">Update Password</button>

//       </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulate API call to update password
        console.log(`Updating password for ${email}`);

        // Redirect to login page after successful password update
        alert('Password updated successfully! Redirecting to login...');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="forgot-password-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                
                <label>New Password:</label>
                <input 
                    type="password" 
                    placeholder="Enter new password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                />
                
                <button type="submit">Update Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
