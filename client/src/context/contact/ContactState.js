import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Steven Godson',
                email: '1@1.com',
                phone: ' 07777-123456',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Melanie Godson',
                email: '2@1.com',
                phone: ' 08888-123456',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Charles Godson',
                email: '3@1.com',
                phone: ' 09999-123456',
                type: 'professional'
            },
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // add contact

    // delete contact

    // set current contact

    // clear current contact

    // update contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts
        }}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState