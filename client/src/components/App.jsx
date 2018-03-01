import React, { Component } from 'react';
import logo from '../style/logo.svg';
import '../style/App.css';
import { makeData } from './EmployData';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';
import Request from 'react-http-request'

class App extends Component {
	constructor() {
		super();
		this.state = {
			employees : []
		};
	}
	
	componentDidMount() {
	<Request
        url='http://localhost:8080/restApi/employees'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({result}) => {
              response => {
			this.setState({employees: response.entity._embedded.employees})
            }
          }
        }
      </Request>		
	}
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Employee Info Page</h1>
        </header>
        <ReactTable
			data={this.state.employees}
			columns={[
				{
					Header : "Employee",
					columns : [
						{
							Header : "FirstName",
							id : "firstName",
							filterable : true,
							accessor : d => d.firstName,
							filterMethod : (filter, rows) => matchSorter(rows, filter.value, {
								keys : [ "firstName" ]
							}),
							filterAll : true
						},
						{
							Header : "LastName",
							accessor : "lastName"
						},
						{
							Header : "Description",
							accessor : "description"
						},
						{
							Header : "ID",
							accessor : "id"
						}
					]
				}
			]}
			getTdProps={(state, rowInfo, column, instance) => {
				return {
					onMouseEnter : e => console.log("Cell - onMouseEnter", {
						state ,
						rowInfo ,
						column ,
						instance ,
						event : e
					})
				};
			}}
			defaultPageSize={13}
			className="-striped -highlight"
			/>
      </div>
    );
  }
}

export default App;
