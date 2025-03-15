import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			userInfo: {
				name: "Dummy",
				location: "default",
			}
		}
	}
	async componentDidMount() {
		const response = await fetch("https://api.github.com/users/xmpr3");
		const json = await response.json();
		console.log(json);

		this.setState({
			userInfo: json,
		})
	}

	render() {
		const { name, location, avatar_url } = this.state.userInfo;


		return (
			<div className="">
				<img src={avatar_url} alt="shor" width="50px" />
				<h2>Name : {name}</h2>
				<h2>Location : {location}</h2>
				
			</div>
		);
	}
}

export default UserClass;
