"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import styles from "./RootLayout.module.css";

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768
      const tablet = window.innerWidth >= 768 && window.innerWidth < 1024
      const portrait = window.innerHeight > window.innerWidth

      setIsMobile(mobile)
      setIsTablet(tablet)
      setIsPortrait(portrait)

      if (mobile || (tablet && portrait)) {
        setCollapsed(false)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const shouldShowMobileSidebar = isMobile || (isTablet && isPortrait)

  return (
    <div className={styles.layout}>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <div
        className={`${styles.mainContent} ${collapsed && !isMobile ? styles.mainContentCollapsed : ""} ${isMobile ? styles.mainContentMobile : ""}`}
      >
        <Header collapsed={collapsed} isMobileSidebar={shouldShowMobileSidebar} currentPath={pathname} />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
