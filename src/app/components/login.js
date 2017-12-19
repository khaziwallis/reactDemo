import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "admin@admin.com",
      pwd: "password"
    };
  }

  onchange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState(state);
  };

  handleSubmit = e=> {
    e.preventDefault();
    const { email } = this.state;
    
    this.props.history.push({
      pathname: "/home",
    });

    console.log(this.state);
  };

  render() {
    const { email, pwd } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.onchange.bind(this)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="pwd"
            value={pwd}
            onChange={this.onchange}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" />
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
