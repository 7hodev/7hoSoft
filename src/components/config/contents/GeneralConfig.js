import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function GeneralConfig() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your save logic here
    console.log("Saving general settings...")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Manage your project settings and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectName">Project Name</Label>
            <Input id="projectName" placeholder="Enter project name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectDir">Project Directory</Label>
            <Input id="projectDir" placeholder="Enter project directory" />
          </div>
        </CardContent>
        <CardFooter className="border-t p-4">
          <Button type="submit">Save Changes</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

