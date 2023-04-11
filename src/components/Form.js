import React, { Component, render } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      country: null,
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    const name = event.target.name.value;
    const country = event.target.country.value;
    this.setState({ name, country }, () => {
      console.log(this.state);
      event.target.name.value = "";
      event.target.country.value = "";
    });
  };
  // nameChangeHandler = (event) => {
  //   console.log(event.target.value);
  // };
  // nameChangeHandler = (event) => {
  //   console.log(event.target.value);
  // };

  render() {
    return (
      <div>
        <div className="mx-2 my-2   ">
          <form action="" onSubmit={this.submiHandler}>
            <div className="my-2 ">
              <label htmlFor="" className="mx-2 ">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border border-black "
                onKeyUp={this.nameChangeHandler}
              />
            </div>
            <div className="my-2 ">
              <label htmlFor="" className="mx-2">
                Country{" "}
              </label>
              <select name="country" id="" onChange={this.nameChangeHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="border border-black w-12 bg-blue-gray-200 mx-5">
              <button type="submit">sumbit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
