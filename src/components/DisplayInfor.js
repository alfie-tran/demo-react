import React from 'react';

//props => viết tắt của properties: tài sản

class DisplayInfor extends React.Component {
	render() {
		// console.log('>>>check props ', this.props);

		//destructuring array/object
		const { name, age } = this.props;
		return (
			<div>
				<div>My name's {name}</div>
				<div>My age's {age}</div>
			</div>
		);
	}
}

export default DisplayInfor;
