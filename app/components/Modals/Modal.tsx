import React from 'react';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;

}

const Modal = () => {
    return (
        <div>

        </div>
    );
};

export default Modal;