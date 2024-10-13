"use client"

import UserMenu from "@/components/tools/user-menu"
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"

const NavbarRoutes = () => {

    const pathname = usePathname();

    const isAdminpage = pathname.startsWith("/dashboard/admin")
    const isUserPage = pathname.startsWith("/dashboard/jobs")

  return (
    <>
        <div className="flex gap-x-2 ml-auto items-center">

            {isAdminpage || isUserPage ? <Link href={"/"}>
                <Button variant={"outline"} size={"sm"} className="border-purple-700/20"><LogOut /> Exit</Button>
            </Link> : <Link href={"/dashboard/admin/jobs"}>
                <Button variant={"outline"} size={"sm"} className="border-purple-700/20">Admin Mode</Button>
            </Link>}

            <UserMenu />
        </div>
    </>
  )
}

export default NavbarRoutes