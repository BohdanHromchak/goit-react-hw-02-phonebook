const { Component } = require("react");

class Filter extends Component {
    render() {
        return(

<label>Find contacts by name
<input
  type="text"
  name="filter"
  value={this.props.value}
  onChange={this.props.onChange}
/>
</label>
        )
    }
}

export default Filter