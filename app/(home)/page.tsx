import UserMenu from "@/components/tools/user-menu";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
        <SignedOut>
          <Button variant={"outline"}><SignInButton mode="modal" /></Button>
        </SignedOut>

        <SignedIn>
          <UserMenu/>
        </SignedIn>
    </div>
  );
}
