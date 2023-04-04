import React, {useState} from 'react'
import './styles2.css'

const Login = () => {

    const [signUpValues, setSignUpValues] = useState({
		name: '',
		email2: '',
		password2: ''
	})

	const handleSignup = () =>{
		console.log(signUpValues);
	}

  return (
    <div>
        <div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input" 
					onChange={(e) => setSignUpValues((prev)=> ({...prev, name: e.target.value}))}
					/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"
					onChange={(e) => setSignUpValues((prev)=> ({...prev, password2: e.target.value}))}
					// onChange={(e) => setSignUpValues(e.target.value)}
					/>
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass1" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass2" type="text" class="input" 
					onChange={(e) => setSignUpValues((prev)=> ({...prev, email2: e.target.value}))}
					/>
				</div>
				<div class="group">
					<input type="submit" class="button" onClick={handleSignup} value="Sign Up" />
				</div>
				{/* <div class="hr"></div> */}
				<div class="foot-lnk">
					<a for="tab-1">Already Member?</a>
				</div>
			</div>
    </div>
    
  )
}

export default Login