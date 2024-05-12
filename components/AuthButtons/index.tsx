import {
  getServerSession,
  signInWithGoogle,
  signOutUser,
} from "@/actions/auth";
import { LogIn, LogOut } from "lucide-react";
import Button from "./Button";

export async function AuthButtons() {
  const session = await getServerSession();

  if (!session) {
    return (
      <Button
        onClick={signInWithGoogle}
        label="Log In"
        icon={<LogIn size={24} />}
      />
    );
  }

  return (
    <Button onClick={signOutUser} label="Log Out" icon={<LogOut size={24} />} />
  );
}
