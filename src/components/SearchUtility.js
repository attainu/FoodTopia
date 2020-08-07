// import React, { Component } from 'react';

// import {Input, Button, Checkbox, Wrapper} from './Style';

// class SearchUtility extends Component{
// 	state = {
// 		city: '',
// 		searchQuery: '',
// 		searchType: 'restaurant'
// 	};

// 	componentWillMount(){
// 		let city = this.props.city;

// 		city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
// 		this.setState({
// 			city
// 		});
// 	}

// 	handleInputChange = (param, event) => {
// 		this.setState({
// 			[param]: event.target.value
// 		});
// 	}

// 	handleSubmit = () => {
// 		let { city, searchType, searchQuery } = this.state;
// 		this.props.onSearchEventFired({ city, searchType, searchQuery });
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<Input placeholder='Select city' 
// 					value={this.state.city} 
// 					onChange={(e) => this.handleInputChange('city', e)} location />

// 				<Input placeholder='Search for restaurant or cuisines...' 
// 					value={this.state.searchQuery} 
// 					onChange={(e) => this.handleInputChange('searchQuery', e)}  />

// 				<Button onClick={() => this.handleSubmit()} >Search</Button>
// 				<Wrapper>
// 					<Checkbox type="checkbox" 
// 						value="restaurant" 
// 						checked={this.state.searchType === 'restaurant'} 
// 						onChange={(e) => this.handleInputChange('searchType', e)} />Search by restaurant

// 					<Checkbox type="checkbox" 
// 						value="cuisine" 
// 						checked={this.state.searchType === 'cuisine'}
// 						onChange={(e) => this.handleInputChange('searchType', e)} />Search by cuisine
// 				</Wrapper>
// 			</div>
// 		);
// 	}
// }

// export default SearchUtility;


import React from 'react'

function SearchCity(props) {
    return (
        <div style={{ marginTop: "20px" , marginBottom: "20px"}}>
            <h1>Search City</h1>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-11">
                            <input type="text" className="form-control" placeholder="Type keyword or city name"
                            value={props.value}
                            onChange={props.onChange}
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-dark" type="button" onClick={props.onClick}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCity;




