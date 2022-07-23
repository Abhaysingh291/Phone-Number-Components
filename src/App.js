import React, { Component } from 'react';
import './App.css';
export class App extends Component {
	state = {
		flagImg: 'https://raw.githubusercontent.com/MeRahulAhire/intl-tel-code-select/master/phone_icon.png',
		countryCodeValue: '',
		phone: ''
	};
	selectCountryHandler = (e) => {
		this.setState({ countryCodeValue: e.target.value });
	};
	phoneHandler = (e) => {
		this.setState({ phone: e.target.value });
	};
	countryFlagHandler = () => {
		const select = document.querySelector('#country');
		this.setState({
			flagImg: `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`
		});
	};

	render() {
		return (
			<div className="page">
				<div className="container">
					<h1 className="heading">Tel-picker in React</h1>
					<div className="tel-box">
						<div className="select-box" onChange={this.countryFlagHandler}>
							<img src={this.state.flagImg} alt="country-flag" id="img" className="flag-img" />
							<select
								id="country"
								onChange={this.selectCountryHandler}
								defaultValue={this.state.countryCodeValue}
							>
								<option value="" hidden>
									Select Country
								</option>
								<option data-countryCode="AF" value="93">
									Afghanistan (+93)
								</option>
								<option data-countryCode="AL" value="355">
									Albania (+355)
								</option>
								<option data-countryCode="DZ" value="213">
									Algeria (+213)
								</option>
							</select>
						</div>
						<input
							type="tel"
							placeholder="945 678 0391"
							className="tel"
							onChange={this.phoneHandler}
							defaultValue={this.state.phone}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;




