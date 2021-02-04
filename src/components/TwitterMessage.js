import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  handleChar = event => {
    let inputLength = event.target.value.length
    this.setState({
      counter: inputLength
    })
  }

  displayChar = () => {
    let counter = this.state.counter
    let maxChars = this.props.maxChars
    if (counter > maxChars) {
      return "You reached your max characters: " + counter
    } else {
      return counter
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChar(event)}/>
        <br />
        {this.displayChar()}
      </div>
    );
  }
}

export default TwitterMessage;
