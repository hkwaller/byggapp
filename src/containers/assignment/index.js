import React, { Component } from 'react'
import firebase from 'firebase'

class Assignment extends Component {
    constructor() {
        super()

        this.state = {
            data: {},
        }
    }

    componentWillMount() {
        firebase.database().ref(`/anbud/${this.props.match.params.id}`).once('value').then(snapshot => {
            this.setState({
                data: snapshot.val(),
            })
        })
    }
    
    render() {
        return (
            <div>
                im an already defined assignmnet by the name of { this.state.data.id }
                <hr />customer is: { this.state.data.customer ? this.state.data.customer.name : undefined }
            </div>
        )
    }
}



export default Assignment