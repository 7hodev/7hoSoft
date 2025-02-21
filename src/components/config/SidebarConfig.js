"use client";

import { cn } from "@/lib/utils";
import LogoutButton from "@/components/auth/logout-button";

export default function SidebarConfig({ activeSection, onSectionChange }) {
  const links = [
    { id: "general", label: "General" },
    { id: "domains", label: "Domains" },
    { id: "security", label: "Security" },
    { id: "integrations", label: "Integrations" },
  ];

  return (
    <div className="flex flex-col h-full border-r">
      <nav className="flex-1 p-4 text-sm text-muted-foreground grid gap-1">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onSectionChange(link.id)}
            className={cn(
              "text-left px-3 py-2 rounded-md transition-colors hover:text-foreground hover:bg-muted",
              activeSection === link.id
                ? "font-medium text-foreground bg-muted"
                : ""
            )}
          >
            {link.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t">
        <LogoutButton />
      </div>
    </div>
  );
}
