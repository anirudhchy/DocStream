import React, { useState } from 'react'
import authService from '../services/authService'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { logo } from '../assets'


const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
		  await authService.signup(name, email, password).then(
			(response) => {
			  // check for token and user already exists with 200
			    console.log("Sign up successfully", response);
			  navigate("/home");
			  window.location.reload();
			},
			(error) => {
			  console.log(error);
			}
		  );
		} catch (err) {
		  console.log(err);
		}
	  };

  return (

    <div className="p-6 space-y-8">

<header className="container flex items-center justify-between h-22 px-4 mx-auto rounded dark:bg-gray-900">
			<div className='items-center space-x-8 flex'>
			<Link to="/">
				<img src={logo} alt="logo" className='p-2 w-20 object-contain'/>
			</Link>
            <Link to="/">
			<h1 className="text-3xl font-bold leading-none dark:text-violet-400">
				DocStream
			</h1>
            </Link>
			</div>
		</header>

    <div className='flex justify-center'>
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 m-18">
	<h1 className="text-2xl font-bold text-center">Sign Up</h1>
	<form action="" className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleRegister}>
		<div className="space-y-1 text-sm">
			<label  className="block dark:text-gray-400">Create Username</label>
			<input 
			type="text"  
			placeholder="Username" 
			value={name}
          	onChange={(e) => setName(e.target.value)}
			className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block dark:text-gray-400">Enter Email</label>
			<input 
			type="text" 
			placeholder="Email" 
			value={email}
          	onChange={(e) => setEmail(e.target.value)}
			className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block dark:text-gray-400">Create Password</label>
			<input 
			type="password"  
			placeholder="Password" 
			value={password}
          	onChange={(e) => setPassword(e.target.value)}
			className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Create My Account</button>
	</form>
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?<br></br>
		<Link to="/login" className="underline dark:text-gray-100">Sign In</Link>
	</p>
</div>
</div>
</div>
  )
}

export default Register