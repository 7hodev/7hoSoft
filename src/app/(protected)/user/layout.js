import { auth } from "@/auth"
import RootLayout from "../../RootLayout";
 
export default async function UserLayout({ children }) {
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