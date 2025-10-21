// src/apps/user/layouts/UserLayout.jsx

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "@/apps/user/components/Sidebar";
import HeaderBar from "@/apps/user/components/HeaderBar";
import { useIsMobile } from "@/utils/useIsMobile";
import userRoutes from "@/apps/user/Routes/userRoutes";
import "./style.scss";

export default function UserLayout() {
  const location = useLocation();
  const isMobile = useIsMobile();

  const [sidebarOpenOnMobile, setSidebarOpenOnMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setSidebarOpenOnMobile(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setIsCollapsed(window.innerWidth <= 1300);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const handleToggleCollapse = () => {
    if (isMobile) {
      setSidebarOpenOnMobile((prev) => !prev);
    } else {
      setIsCollapsed((prev) => !prev);
    }
  };

  // The main layout container
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "var(--navy)",
  };

  const bodyStyle = {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  };

  const contentStyle = {
    flex: 1,
    padding: "24px",
    backgroundColor: "white",
    overflowY: "auto",
    borderTopLeftRadius: "24px",
  };

  return (
    <div style={layoutStyle}>
      <HeaderBar
        brandName="ClinicX"
        onMenuClick={handleToggleCollapse}
        isCollapsed={isCollapsed}
      />
      <div style={bodyStyle}>
        <Sidebar
          isCollapsed={isCollapsed && !isMobile}
          isOpenOnMobile={sidebarOpenOnMobile}
          onCloseOnMobile={() => setSidebarOpenOnMobile(false)}
        />
        <main style={contentStyle}>
          <Routes>
            {userRoutes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
}
