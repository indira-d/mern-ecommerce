import React from 'react'
import './User.css'
import { CalendarToday, LocationSearching, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { MailOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const User = () => {
  return (
	<div className='user'>
		<div className="userTitleContainer">
			<h1 className="userTitle">Edit User</h1>
			<Link to='/newUser'><button className="userAddBtn">Create</button>
			</Link>
			
		</div>
		<div className="userContainer">
			<div className="userShow">
				<div className="userShowTop">
					<img src="https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg" alt="" className="userShowImg" />
					<div className="userShowTopTitle">
						<span className="userShowUsername">Ann Baker</span>
						<span className="userShowUserTitle">Software engineer</span>
					</div>
				</div>
				<div className="userShowBottom">
					<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className='userShowIcon'/>
							<span className="userShowInfoTitle">annback99</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className='userShowIcon'/>
							<span className="userShowInfoTitle">10.12.1999</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="userShowInfo">
							<PhoneAndroid className='userShowIcon'/>
							<span className="userShowInfoTitle">+1 123 466464 647</span>
						</div>
						<div className="userShowInfo">
							<MailOutline className='userShowIcon'/>
							<span className="userShowInfoTitle">annback99@gmail.com</span>
						</div>
						<div className="userShowInfo">
							<LocationSearching className='userShowIcon'/>
							<span className="userShowInfoTitle">NY | USA</span>
						</div>
				</div>
			</div>
			<div className="userUpdate">
				<span className="userUpdateTitle">Edit</span>
				<form  className="userUpdateForm">
					<div className="userUpdateLeft">
						<div className="userUpdateItem">
							<label >Username</label>
							<input type="text" 
							placeholder='annback99' 
							className="userUpdateInput" />
						</div>
						<div className="userUpdateItem">
							<label >Full Name</label>
							<input type="text" 
							placeholder='Ann Baker' 
							className="userUpdateInput" />
						</div>
						<div className="userUpdateItem">
							<label >Email</label>
							<input type="text" 
							placeholder='annback99@gmail.com' 
							className="userUpdateInput" />
						</div>
						<div className="userUpdateItem">
							<label >Phone</label>
							<input type="text" 
							placeholder='+1 123 565785' 
							className="userUpdateInput" />
						</div>
						<div className="userUpdateItem">
							<label >Address</label>
							<input type="text" 
							placeholder='NY | USA' 
							className="userUpdateInput" />
						</div>
					</div>
					<div className="userUpdateRight">
						<div className="userUpdateUpload">
							<img src="https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg" alt="" className="userUpdateImg" />
							<label htmlFor="file"><Publish className='userUpdateIcon'/></label>
							<input type="file" 
							id="file"
							style={{display: "none"}}/>
						</div>
						<button className="userUpdateBtn">Update</button>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}

export default User