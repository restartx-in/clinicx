import React, { useState, useRef, useEffect } from 'react'
import { MdMoreVert } from 'react-icons/md'

import EditButton from '@/components/EditButton'
import ViewButton from '@/components/ViewButton'
import DeleteButtonForActionMenu from './components/DeleteButtonForActionMenu'

import './style.scss'

const ActionsMenu = ({ onView, onEdit, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  const handleActionClick = (action) => {
    if (action) {
      action()
    }
    setIsMenuOpen(false)
  }

  const hasActions = onView || onEdit || onDelete

  if (!hasActions) {
    return null
  }

  return (
    <div className="actions-menu" ref={menuRef}>
      <button
        type="button"
        className="actions-menu__trigger"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
      >
        <MdMoreVert />
      </button>

      {isMenuOpen && (
        <div className="actions-menu__menu">
          {onView && (
            <div
              className="actions-menu__item fs18 fw600"
              onClick={() => handleActionClick(onView)}
              onKeyDown={(e) => e.key === 'Enter' && handleActionClick(onView)}
              role="button"
              tabIndex={0}
            >
              <ViewButton />
              <span>view</span>
            </div>
          )}
          {onEdit && (
            <div
              className="actions-menu__item fs18 fw600"
              onClick={() => handleActionClick(onEdit)}
              onKeyDown={(e) => e.key === 'Enter' && handleActionClick(onEdit)}
              role="button"
              tabIndex={0}
            >
              <EditButton />
              <span>Edit</span>
            </div>
          )}
          
          {onDelete && (
            <div className="actions-menu__item fs18 fw600">
              <DeleteButtonForActionMenu
                onClick={() => handleActionClick(onDelete)}
              />
              <span>Delete</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ActionsMenu