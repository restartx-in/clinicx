import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { FaUser } from 'react-icons/fa';
import { RiMenuFold3Line, RiMenuFold4Line } from 'react-icons/ri';

const HeaderBar = ({
  brandName = 'MyApp',
  brandLogo = null,
  pageTitle,
  onMenuClick,
  isCollapsed,
  userMenuItems = [],
  userIcon = <FaUser size={20} />,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownItemClick = (onClick) => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
    setShowDropdown(false);
  };

  return (
    <div className="header-bar">
      <div className="header-bar__left-section">
        <button
          className="header-bar__left-section-menu-btn"
          onClick={onMenuClick}
          aria-label="Toggle sidebar menu"
        >
          {isCollapsed ? <RiMenuFold4Line size={24} /> : <RiMenuFold3Line size={24} />}
        </button>

        <div className="header-bar__left-section-brand">
          {brandLogo && (
            <img
              src={brandLogo}
              alt={`${brandName} Logo`}
              className="header-bar__left-section-brand-logo"
            />
          )}
          <span className="header-bar__left-section-brand-name fs26">
            {brandName}
          </span>
        </div>
        <span className="header-bar__left-section-page-title fs18">{pageTitle}</span>
      </div>

      <div className="header-bar__right-section">
        <div className="header-bar__right-section-user-dropdown" ref={dropdownRef}>
          <button
            className="header-bar__right-section-user-dropdown-trigger"
            onClick={() => setShowDropdown((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={showDropdown}
          >
            {userIcon}
          </button>
          {showDropdown && (
            <div className="header-bar__right-section-user-dropdown-menu">
              {userMenuItems.length > 0 ? (
                userMenuItems.map((item, index) => (
                  <div
                    key={index}
                    className="header-bar__right-section-user-dropdown-menu-item"
                    onClick={() => handleDropdownItemClick(item.onClick)}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </div>
                ))
              ) : (
                <div className="header-bar__right-section-user-dropdown-menu-item--disabled">
                  No items
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;