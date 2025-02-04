import React, { act, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = props => 
{
    const [active, setActive] = useState(false); // State to manage modal active status

    useEffect(() => 
    {
        setActive(props.active); // Update active state when props.active changes
    }, [props.active]);

    return (
        // Render the modal with dynamic active class
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    );
}

Modal.propTypes = 
{
    active: PropTypes.bool, // active is an optional boolean prop
    id: PropTypes.string // id is an optional string prop
}

export const ModalContent = props =>
{
    const contentRef = useRef(null); // Reference to the modal content element

    const closeModal = () =>
    {
        contentRef.current.parentNode.classList.remove('active'); // Remove active class from modal
        if(props.onClose) props.onClose(); // Call onClose prop if it exists
    }

    return (
        // Render the modal content with a close button
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

ModalContent.propTypes = 
{
    onClose: PropTypes.func // onClose is an optional function prop
}

export default Modal;
