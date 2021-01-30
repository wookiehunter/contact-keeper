import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
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
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // add contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // set current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    // clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }
    // update contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // filter contacts
    const filterContact = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text})
    }

    // clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            updateContact,
            deleteContact,
            clearCurrent,
            setCurrent,
            filterContact,
            clearFilter

        }}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState