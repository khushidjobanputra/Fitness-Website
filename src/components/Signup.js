import React, {useState} from 'react'
import './styles2.css'
import HeroBannerImage from '../assets/images/login.jpg'
// import video from '../assets/video.mp4';
import Login from './Login'

const Signup = () => {

    const [signInValues, setSignInValues] = useState({
		email: '',
		password: ''
	})

	const handleSignin = () =>{
		console.log(signInValues);
	}

	
  return (
    <div>
        <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Email</label>
					<input id="user1" type="text" class="input" 
                    onChange={(e) => setSignInValues((prev)=> ({...prev, email: e.target.value}))}
                    />
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass3" type="password" class="input" data-type="password" 
                    onChange={(e) => setSignInValues((prev)=> ({...prev, password: e.target.value}))}
                    />
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked />
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In" onClick={handleSignin}/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<Login />
		</div>
	</div>
</div>
<img src={HeroBannerImage} className='hero-banner-img' style={{height: '700px', mt: '600px', top: '320px', borderRadius: '30px'}}></img>
{/* <video src={video} autoPlay loop muted height="700px" width="600px" /> */}
    </div>
  )
}

export default Signup



// import React from 'react'
// import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
// // import FormControl from '@mui/material';
// import {FormControlLabel, FormControl} from '@mui/material';
// // import RadioGroup from '@mui/material';
// // import Radio from '@mui/material';
// // import FormLabel from '@mui/material';
// import {Checkbox} from '@mui/material';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import { useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from './firebase';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const paperStyle = { padding: '30px 20px', width: 300, margin: "0px auto" }
//     const headerStyle = { margin: 0 }
//     const avatarStyle = { backgroundColor: '#1bbd7e' }
//     const marginTop = { marginTop: 5 }
//     const navigate = useNavigate();

// const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: ''
// })

// const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

// const handleSignup = () => {

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.password)
//     .then(async(res)=>{
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//             displayName: values.name,
//         })
//         navigate("/");
//         console.log(res);
//     })
//     .catch((err) => {
//     setSubmitButtonDisabled(false);
//     console.log("Error", err.message);
//     } 
//     );

//     console.log(values);
// }
//     return (
//         <Grid>
//             <Paper style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}>
//                         <AddCircleOutlineOutlinedIcon />
//                     </Avatar>
//                     <h2 style={headerStyle}>Sign Up</h2>
//                     <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
//                 </Grid>
//                 <form>
//                     <TextField fullWidth label='Name' placeholder="Enter your name"
//                     onChange={(e) => setValues((prev)=> ({...prev, name: e.target.value}))}
//                     />
//                     <TextField fullWidth label='Email' placeholder="Enter your email" 
//                     onChange={(e) => setValues((prev)=> ({...prev, email: e.target.value}))}
//                     />
//                     <TextField fullWidth label='Password' placeholder="Enter your password"
//                     onChange={(e) => setValues((prev)=> ({...prev, password: e.target.value}))}
//                     />
//                     <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
//                     <FormControlLabel
//                         control={<Checkbox name="checkedA" />}
//                         label="I accept the terms and conditions."
//                     />
//                     <Button type='submit' disabled={submitButtonDisabled} variant='contained' color='primary' onClick={handleSignup}>Sign up</Button>
//                 </form>
//             </Paper>
//         </Grid>
//     )
// }

// export default Signup;