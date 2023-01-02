import React from 'react'
import './NewUser.css'

const newUser = () => {
  return (
	<div className='newUser'>
		<h1 className="newUserTitle">
			New User
		</h1>
		<form className="newUserForm">
			<div className="newUserItem">
				<label>Username</label>
				<input type="text"  placeholder='John'/>
			</div>
			<div className="newUserItem">
				<label>Full name</label>
				<input type="text"  placeholder='John Smit'/>
			</div>
			<div className="newUserItem">
				<label>Email</label>
				<input type="text"  placeholder='JohnSmit@gmail.com'/>
			</div>
			<div className="newUserItem">
				<label>Password</label>
				<input type="password"  placeholder='JohnSmit@gmail.com'/>
			</div>
			<div className="newUserItem">
				<label>Phone</label>
				<input type="password"  placeholder='+1 566 7654'/>
			</div>
			<div className="newUserItem">
				<label>Address</label>
				<input type="password"  placeholder='NY | USA'/>
			</div>
			<div className="newUserItem">
				<label>Gender</label>
				<div className="newUserGender">
					<input type="radio" name='gender' id='male' value='male'/>
					<label for="male">Male</label>
					<input type="radio" name='gender' id='female' value='male'/>
					<label for="female">Female</label>
					<input type="radio" name='gender' id='others' value='male'/>
					<label for="others">Other</label>
			   </div>
			</div>
				<div className="newUserItem">
					<label>Active</label>
					<select name="active" id="active" className="newUserSelect">
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>
				<div className="newUserItem">
					<button className="newUserBtn">Create</button>
				</div>
			
		</form>
	</div>
  )
}

export default newUser