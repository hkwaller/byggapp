import React from 'react'
import { Form, Text } from 'react-form'
import SubHeader from '../../components/sub-header'
import './new-customer.css'

const NewCustomer = props => {
    return (
        <div className="container">
            <SubHeader title={ 'Kund' } />
        
            <Form
                onSubmit={ values => {
                    console.log('Success!', values)
                    console.log(props)
                } }
                validate={ ({ name }) => {
                    return {
                        name: !name ? 'A name is required' : undefined,
                    }
                } }
            >
                { ({ submitForm }) => {
                    return (
                        <form onSubmit={ submitForm } className="form-container">
                            <Text field="name" className="input-text" />
                            <button type="submit" className="submit-btn">Fortsätt</button>
                        </form>
                    )
                } }
            </Form>
        </div>
    )
}

export default NewCustomer