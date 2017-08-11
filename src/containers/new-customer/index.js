import React from 'react'
import { Form, Text } from 'react-form'

const NewCustomer = props => {
    return (
        <div>
            <Form
                onSubmit={ values => {
                    console.log('Success!', values)
                } }
                validate={ ({ name }) => {
                    return {
                        name: !name ? 'A name is required' : undefined,
                    }
                } }
            >
                { ({ submitForm }) => {
                    return (
                        <form onSubmit={ submitForm }>
                            <Text field="name" />
                            <button type="submit">Submit</button>
                        </form>
                    )
                } }
            </Form>
        </div>
    )
}

export default NewCustomer