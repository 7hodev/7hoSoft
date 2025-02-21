import { auth } from "@/auth"
import RootLayout from "../../RootLayout";
 
export default async function AdminLayout({ children }) {
  const session = await auth()
 
  if (!session) {
    return <div>Not authenticated</div>
  }
 
  return (
    <div>
      <RootLayout>{children}</RootLayout>
    </div>
  )
}