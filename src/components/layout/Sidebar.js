"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Sidebar.module.css"
import { Home, DollarSign, ShoppingBag, Package, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: <Home className={styles.menuIcon} />,
    path: "/",
  },
  {
    title: "Ventas",
    icon: <DollarSign className={styles.menuIcon} />,
    path: "/sales",
  },
  {
    title: "Mercado",
    icon: <ShoppingBag className={styles.menuIcon} />,
    path: "/market",
  },
  {
    title: "Inventario",
    icon: <Package className={styles.menuIcon} />,
    path: "/inventory",
  },
  {
    title: "Personal",
    icon: <Users className={styles.menuIcon} />,
    path: "/personal",
  },
]

export default function Sidebar({ collapsed, onCollapse }) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""} ${isMobile ? styles.mobile : ""}`}>
      {!isMobile && (
        <div className={styles.logo}>
          {collapsed ? "7" : "7hoSoft"}
          <button className={styles.collapseButton} onClick={() => onCollapse(!collapsed)}>
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      )}
      <nav className={styles.nav}>
        <div className={styles.mainMenu}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.menuItem} ${pathname === item.path ? styles.active : ""}`}
            >
              {item.icon}
              {(!isMobile || collapsed) && <span className={styles.menuText}>{item.title}</span>}
            </Link>
          ))}
        </div>
        {!isMobile && (
          <div className={styles.bottomMenu}>
            <Link
              href="/configuracion"
              className={`${styles.menuItem} ${pathname === "/configuracion" ? styles.active : ""}`}
            >
              <Settings className={styles.menuIcon} />
              <span className={styles.menuText}>Configuración</span>
            </Link>
          </div>
        )}
      </nav>
    </aside>
  )
}

