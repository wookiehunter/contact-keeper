import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext)
    const { deleteContact, setCurrent, clearCurrent } = contactContext

    const { _id, name, company, birthday, email, phone, comments, type } = contact

    const onDelete = () => {
        deleteContact(_id)
        clearCurrent()
    }

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '} 
                <span 
                    style={{ float: 'right' }} 
                    className={
                        'badge ' + 
                        (type === 'professional' ? 'badge-success' : 'badge-primary')}
                    >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {company && ( <li><i class="far fa-building"></i> {company}</li>)}
                {birthday && ( <li><i class="fas fa-birthday-cake"></i> {birthday}</li>)}
                {email && ( <li><i className="fas fa-envelope-open"></i> {email}</li>)}
                {phone && ( <li><i className="fas fa-phone"></i> {phone}</li>)}
                {comments && (<li><i className="far fa-comments"></i> {comments}</li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm"onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem
