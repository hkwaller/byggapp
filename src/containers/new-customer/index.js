import React from 'react'
import { Form, Text, RadioGroup, Radio } from 'react-form'
import { connect } from 'react-redux'
import SubHeader from '../../components/sub-header'
import './new-customer.css'

const NewCustomer = props => {
    return (
        <div className="container">
            <SubHeader title={ 'Kund' } />
        
            <Form
                onSubmit={ values => {
                    console.log('Success!', values)
                    props.history.push(`/categories/${props.match.params.id}`)
                } }
                // validate={ ({ name }) => {
                //     return {
                //         name: !name ? 'A name is required' : undefined,
                //     }
                // } }
            >
                { ({ submitForm }) => {
                    return (
                        <form onSubmit={ submitForm } className="form-container">
                            <div className="item-container">
                                <label htmlFor="name">Namn</label>
                                <Text field="name" className="input-text" />
                            </div>
                            <div className="item-container">
                                <label htmlFor="gatuaddress">Gatuaddress</label>
                                <Text field="gatuaddress" className="input-text" />
                            </div>
                            <div className="item-container">
                                <label htmlFor="postnummer">Postnummer</label>
                                <Text field="postnummer" className="input-text" />
                            </div>
                            <div className="item-container">
                                <label htmlFor="postort">Postort</label>
                                <Text field="postort" className="input-text" />
                            </div>
                            <div className="item-container">
                                <label htmlFor="telefonnummer">Telefonnummer</label>
                                <Text field="telefonnummer" type="phoneNumber" className="input-text" />
                            </div>
                            <div className="item-container">
                                <RadioGroup field="rutavdrag">
                                    <label>Rutavdrag</label>
                                    <Radio value="0" />
                                    <label htmlFor="">0</label>
                                    <Radio value="1" />
                                    <label htmlFor="">1</label>
                                    <Radio value="2" />
                                    <label htmlFor="">2</label>
                                </RadioGroup>
                            </div>
                            <div className="item-container">
                                <button type="submit" className="submit-btn">Fortsätt</button>
                            </div>
                        </form>
                    )
                } }
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    anbud: state.anbud,
})

export default connect(
    mapStateToProps,
)(NewCustomer)