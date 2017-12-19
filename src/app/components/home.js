import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
     };
    this.fetchJsonData=this.fetchJsonData.bind(this);
  }
  componentDidMount(){
    this.fetchJsonData();
  }

  fetchJsonData = function () {
  const ENDPOINT = BASE_URL;
  fetch(ENDPOINT)
      .then(Response => Response.json())
      .then(
      res => {
        console.log("res",res);
        this.setState({
          data: res
        });

        console.log("Added to state.data: ", this.state.data);
      },
      error => {
        console.log(error);
      }
      );
  }

  render() {
    return (<div>
        <h3> Home page</h3>
        <div className="col-md-12">
        <BootstrapTable data={this.state.data}>
          <TableHeaderColumn  width='150' dataField="id" isKey={true} dataSort={true}>ID</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField="userId" dataSort={true}>User ID</TableHeaderColumn>
          <TableHeaderColumn  width='750' dataField="title" dataSort={true}>Title</TableHeaderColumn>
          <TableHeaderColumn  width='750' dataField="body" dataSort={true}>Body</TableHeaderColumn>
        </BootstrapTable>
        </div>
        </div>
      );
    }
  }

export default Home;
