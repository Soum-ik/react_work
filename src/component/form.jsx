import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    Text: "JavaScript is awsome",
    libaray: "react",
    isAwsome: false,
  };
  handelChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        Text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        libaray: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwsome: e.target.checked,
      });
    } else {
      console.log(e.target.type);
      console.log("nothing is here");
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    
  }

  render() {
    const { title, Text, libaray, isAwsome } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name=""
            placeholder="enter your name"
            value={title}
            onChange={this.handelChange}
          />
          <br />
          <br />
          <textarea
            name="text"
            value={Text}
            onChange={this.handelChange}
          ></textarea>
          <br />
          <br />
          <select value={libaray} onChange={this.handelChange}>
            <option value="react">React</option>
            <option value="anguler">Anguler</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwsome}
            onChange={this.handelChange}
          />
          <br />
          <br />
          <input type="submit" value={"submit "} />
          <input type />
        </form>
      </div>
    );
  }
}
