const { Component } = require("react");

class ContactList extends Component {
    render() {
        const {onSearch, onDelete} = this.props

        return(
            <ul>
    {onSearch().map(({id, name, number}) => (
    <li key={id}>{name}: {number}<button onClick={() => onDelete(id)}>Delete</button></li>
  ))}
</ul>
        )
    }
}
export default ContactList