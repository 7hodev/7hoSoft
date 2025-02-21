"use client"

import { useState } from "react"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContentConfig from "./ContentConfig"

export default function ButtonConfig() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Open settings</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[90vh] max-w-[800px] mx-auto">
          <ContentConfig onClose={() => setOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  )
}

