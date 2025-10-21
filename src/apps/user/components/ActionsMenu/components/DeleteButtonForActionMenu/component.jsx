import { useEffect, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { Modal, ModalHeader, ModalFooter, ModalBody } from '@/components/Modal'
import './style.scss'

const DeleteButtonForActionMenu = ({
  transaction,
  onClick, 
  isDeleting = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const onClose = () => setIsOpen(false)

  const handleConfirm = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  return (
    <>
      <button
        className={className || "delete_modall_triggerr_btnn"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiTrash2 className="delete_modall_triggerr_btnn__icon" size={18} />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>
          <h2 className="delete_modall__popup_content-header-title">
            Confirm Delete
          </h2>
        </ModalHeader>

        <ModalBody>
          <div className="delete_modall__popup_content-body">
            {/* IMPROVEMENT: Conditionally render the transaction name */}
            <p>
              Are you sure you want to delete
              {transaction ? <strong> {transaction}</strong> : ''}?
            </p>
          </div>
        </ModalBody>
        
        <ModalFooter>
          <div className="delete_modall__popup_content-actions">
            <button
              className="delete_modall__popup_content-actions-btn delete_modall__popup_content-actions-close"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="delete_modall__popup_content-actions-btn delete_modall__popup_content-actions-apply"
              onClick={handleConfirm}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Confirm'}
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeleteButtonForActionMenu