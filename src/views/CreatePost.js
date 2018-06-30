import React from "react";

export default class Component extends React.Component {
    state = {
      file: null,
      text: ""
    }

    onChangeFile = (e) => {
      this.setState({
        file: e.target.files[0]
      });
    }

    onChangeText = (e) => {
      this.setState({
        text: e.target.value,
      });
    }

    onSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("title" ,this.state.text);
      formData.append("image" ,this.state.file);

      this.props.dispatch(postCreate(formData));
    }

    render() {
      <form onSubmit=this.state.text>
        <h2>File</h2>
        <input type="file" onChange={this.onChangeFile} />

        <h2>Text</h2>
        <input type="text" onChange={this.onChangeText} />

        <button type="submit">Submit!</button>
      </form>
    );
  }
}
