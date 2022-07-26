import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';

let usersList = [];

const AddUser = () => {

	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');

	const [usersList, setUsersList] = useState([])

	const handleSubmit = e =>{
		e.preventDefault();
		setUsersList([...usersList, { username , age }]);
	};

	const handleOnChangeUsername = e => {
		setUsername(e.target.value);
	};

	const handleOnChangeAge = e => {
		setAge(e.target.value);
	};

	return (
		<div>
			<Card className={classes.card}>
				<form onSubmit={handleSubmit} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" value={username} required pattern="^[^\s]*$" onChange={handleOnChangeUsername} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" value={age} required pattern="/[0-9]/" onChange={handleOnChangeAge} />
					<Button type="submit" className={classes.submit}>
						Add User
					</Button>
				</form>
			</Card>
			<UsersList users={usersList} />
		</div>
	);
};

export default AddUser;
