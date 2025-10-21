import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import {
  RiBillFill,
  RiLogoutBoxRLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiFileList3Line,
} from "react-icons/ri";
import {
  FaUsers,
  FaListAlt,
  FaUserCheck,
  FaRegCalendarCheck,
  FaRegCreditCard,
  FaCashRegister,
} from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import {
  MdDashboard,
  MdAccountBalance,
  MdSubscriptions,
  MdPeopleAlt,
  MdOutlinePayment
} from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { IoPerson, IoManSharp } from "react-icons/io5";


import { useIsMobile } from "@/utils/useIsMobile";
import SidebarLink from "./SidebarLink";
import "./style.scss";

// CORRECTED sidebarData structure
const sidebarData = [
  { to: "/", title: "Dashboard", label: "Dashboard", Icon: MdDashboard },
   {
        to: "/customer-list",
        title: "Customer Report",
        label: "Customers",
        Icon: IoPerson,
      },
];

const Sidebar = ({
  isCollapsed,
  onToggleCollapse,
  isOpenOnMobile,
  onCloseOnMobile,
}) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [openCategories, setOpenCategories] = useState({
    Expenses: true,
    Reports: true,
    List: true,
    Employee: true,
    Members: true, // Added Members to the default open state
  });

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [popupPosition, setPopupPosition] = useState({
    top: 0,
    left: 0,
    maxHeight: "auto",
  });
  const categoryRefs = useRef({});
  const hidePopupTimer = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    queryClient.clear();
    navigate("/login");
  };

  const handleCategoryToggle = (category) => {
    if (isCollapsed && !isMobile) return;
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleMouseEnter = (category) => {
    if (!isCollapsed || isMobile) return;
    clearTimeout(hidePopupTimer.current);
    const node = categoryRefs.current[category];
    if (node) {
      const rect = node.getBoundingClientRect();
      const bottomMargin = 20;
      const calculatedMaxHeight = window.innerHeight - rect.top - bottomMargin;
      setPopupPosition({
        top: rect.top,
        left: rect.right + 10,
        maxHeight: calculatedMaxHeight,
      });
      setHoveredCategory(category);
    }
  };

  const handleMouseLeave = () => {
    if (!isCollapsed || isMobile) return;
    hidePopupTimer.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 200);
  };

  const handleLinkClick = () => {
    setHoveredCategory(null); // Hide popup on link click
    if (isMobile) onCloseOnMobile();
  };

  const showLabels = isMobile || !isCollapsed;

  const renderNavItems = (items) => {
    return items.map((item, index) => {
      const isCategory = item.items && item.items.length > 0;
      if (isCategory) {
        const isOpen = !!openCategories[item.category];
        return (
          <li
            key={item.category || index}
            className="sidebar__nav-category"
            ref={(el) => (categoryRefs.current[item.category] = el)}
            onMouseEnter={() => handleMouseEnter(item.category)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="sidebar__nav-category-header"
              onClick={() => handleCategoryToggle(item.category)}
              title={item.category}
            >
              <span className="sidebar__nav-category-icon">{item.icon}</span>
              {showLabels && (
                <>
                  <span className="sidebar__nav-category-label">
                    {item.category}
                  </span>
                  <span className="sidebar__nav-category-arrow">
                    {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                  </span>
                </>
              )}
            </div>
            {showLabels && isOpen && (
              <div className="sidebar__nav-submenu">
                <ul>{renderNavItems(item.items)}</ul>
              </div>
            )}
          </li>
        );
      } else {
        return (
          <li key={item.to}>
            <SidebarLink
              to={item.to}
              title={item.title}
              label={item.label}
              Icon={item.Icon}
              showLabel={showLabels}
              onClick={handleLinkClick}
            />
          </li>
        );
      }
    });
  };

  const renderPopupItems = (items) => {
    return items.map((child, index) => (
      <li key={child.to || index}>
        <SidebarLink
          to={child.to}
          title={child.title}
          label={child.label}
          Icon={child.Icon}
          showLabel={true}
          onClick={handleLinkClick}
        />
      </li>
    ));
  };

  return (
    <>
      <aside
        className={`sidebar ${!isMobile && isCollapsed ? "collapsed" : ""} ${
          isMobile && isOpenOnMobile ? "mobile-open" : ""
        }`}
      >
        <nav className="sidebar__nav fs16 fw600">
          <ul>{renderNavItems(sidebarData)}</ul>
        </nav>

        <div
          className="sidebar__logout fs16 fw600"
          onClick={handleLogout}
          title="Logout"
        >
          <span className="sidebar__logout-icon">
            <RiLogoutBoxRLine size={26} />
          </span>
          {showLabels && <span className="sidebar__logout-label">Logout</span>}
        </div>
      </aside>

      {!isMobile &&
        isCollapsed &&
        sidebarData
          .filter((item) => item.items && item.items.length > 0)
          .map((item) => (
            <div
              key={item.category}
              className={`sidebar__collapsed-popup fs16 ${
                hoveredCategory === item.category ? "open" : ""
              }`}
              style={{
                top: `${popupPosition.top}px`,
                left: `${popupPosition.left}px`,
                maxHeight: `${popupPosition.maxHeight}px`,
              }}
              onMouseEnter={() => handleMouseEnter(item.category)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="sidebar__collapsed-popup-header">
                {item.category}
              </div>
              <ul className="sidebar__collapsed-popup-list">
                {renderPopupItems(item.items)}
              </ul>
            </div>
          ))}
    </>
  );
};

export default Sidebar;