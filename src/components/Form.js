import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
         this.state = {
            name:'',
            url:'',
    }
    }
    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       if (event.target.id === 'nameEnter') {
            this.setState({ name: event.target.value })
          } else {
            this.setState({ URL: event.target.value })
        }
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({ name: '', URL: '' })
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form>
                <label htmlFor='nameEnter'>Name: </label>
                <input type='text' id='nameEnter'value={this.state.name} onChange={this.handleChange}/>  
                <label htmlFor='urlEnter'>URL: </label>
                <input type='url' id='urlEnter' value={this.state.URL} onChange={this.handleChange}/>
                <button type="submit" onClick={(e)=>this.onFormSubmit(e)}>Submit</button>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
            </form>
        )
    
    }
}

export default Form;
