"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import SidebarConfig from "./SidebarConfig"
import GeneralConfig from "./contents/GeneralConfig"

export default function ContentConfig({ onClose }) {
  const [activeSection, setActiveSection] = useState("general")

  const renderContent = () => {
    switch (activeSection) {
      case "general":
        return <GeneralConfig />
      default:
        return <GeneralConfig />
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex items-center h-14 px-6 border-b shrink-0">
        <h1 className="font-semibold text-lg">Settings</h1>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close settings</span>
        </Button>
      </header>
      <div className="flex-1 overflow-auto">
        <div className="grid md:grid-cols-[160px_1fr] h-full">
          <SidebarConfig activeSection={activeSection} onSectionChange={setActiveSection} />
          <div className="p-4 bg-muted/40 min-h-full">
            <div className="max-w-2xl mx-auto">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

