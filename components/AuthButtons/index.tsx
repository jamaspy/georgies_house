import { signInWithGoogle, signOutUser } from "@/actions/auth";
import { LogIn, LogOut } from "lucide-react";
import Button from "./Button";
import { Session } from "next-auth";

export function AuthButtons({ session }: { session: Session | null }) {
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
