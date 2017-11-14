import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as Actions from '../actions'
import SubHeader from '../components/SubHeader'
import './categories.css'

class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uppdrag: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        let uppdrag = Object.keys(nextProps.uppdrag).map(key => {
            return {
                namn: nextProps.uppdrag[key].namn,
                aktivt: false,
                id: key,
            }
        })
        
        this.setState({
            uppdrag: uppdrag,
        })

        console.log('uppdrag:', uppdrag)
    }

    toggleButton(key) {
        const uppdrag = this.state.uppdrag

        uppdrag[key].aktivt = !uppdrag[key].aktivt

        this.setState({
            uppdrag,
        })
    }

    continue() {
        const aktivaUppdrag = this.state.uppdrag.filter(uppdrag => uppdrag.aktivt)
        console.log(this.props)

        this.props.actions.addUppdrag(aktivaUppdrag, this.props.match.params.id)
    }

    render() {
        return (
            <div className="container">
                <SubHeader title={ 'Kategorier' } />
                <div className="category-container">
                    {
                        this.state.uppdrag.map((uppdrag, index) => {
                            return (
                                <button
                                    key={ uppdrag.id }
                                    className={ `category ${uppdrag.aktivt ? 'toggled' : ''}` }
                                    onClick={ () => this.toggleButton(index) }
                                >
                                    { uppdrag.namn }
                                </button>
                            )
                        })

                        
                    }
                </div>
                <button
                    className="continue"
                    onClick={ () => this.continue() }
                    // to={ `/define-assigmnents/${this.props.match.params.id}` }
                >
                    Fortsätt
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    uppdrag: state.uppdrag,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)
