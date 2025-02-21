import { auth } from "@/auth";
import LogoutButton from "@/components/auth/logout-button";

const AdminPage = async () => {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    return <div>You are not admin</div>;
  }

  return <div>
    <h1>Admin Page</h1>
    <LogoutButton />
  </div>;
};
export default AdminPage;
