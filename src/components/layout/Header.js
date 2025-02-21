"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Search, Bell, ChevronDown, Settings } from "lucide-react";
import LogoutButton from "@/components/auth/logout-button";
import ButtonConfig from "../config/ButtonConfig";
import ButtonPerfilConfig from "../config/ButtonPerfilConfig";

const routeNames = {
  "/": "Dashboard",
  "/sales": "Ventas",
  "/market": "Mercado",
  "/inventory": "Inventario",
  "/personal": "Personal",
};

export default function Header({ collapsed, isMobileSidebar, currentPath }) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter();
  const profileMenuRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleProfileClick = () => {
    if (!isMobileSidebar) {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    }
  };

  return (
    <header
      className={`${styles.header} ${
        collapsed && !isMobileSidebar ? styles.headerCollapsed : ""
      }`}
    >
      <div className={styles.titleSection}>
        <h1>Conos y waffles</h1>
        <span className={styles.subtitle}>
          {routeNames[currentPath] || "Dashboard"}
        </span>
      </div>

      <div className={styles.actions}>
        <div
          className={`${styles.searchContainer} ${
            isSearchExpanded ? styles.expanded : ""
          }`}
        >
          <button className={styles.iconButton} onClick={toggleSearch}>
            <Search className={styles.icon} />
          </button>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar..."
            onBlur={() => setIsSearchExpanded(false)}
          />
        </div>
        <button className={styles.iconButton}>
          <Bell className={styles.icon} />
        </button>
        <div className={styles.profileContainer} ref={profileMenuRef}>
          <button className={styles.profileButton} onClick={handleProfileClick}>
            {!isMobileSidebar && (
              <>
                <img
                  src="/foto-de-perfil.png"
                  alt="Perfil"
                  className={styles.profileImage}
                />
                <span className={styles.profileName}>Usuario</span>
                <ChevronDown className={styles.icon} />
              </>
            )}
            {isMobileSidebar && (
              <>
                <ButtonPerfilConfig />
              </>
            )}
          </button>
          {!isMobileSidebar && isProfileMenuOpen && (
            <div className={styles.profileMenu}>
              <ButtonConfig />
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
