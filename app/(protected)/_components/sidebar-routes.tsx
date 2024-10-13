"use client"

import { BookMarked, Compass, List, User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import SidebarRouteItems from "./SidebarRouteItems"


const adminRoutes = [
    {
        icon: List,
        label: "Jobs",
        href: "/dashboard/admin/jobs"
    },
    {
        icon: List,
        label: "Companies",
        href: "/dashboard/admin/companies"
    },
    {
        icon: Compass,
        label: "Analytics",
        href: "/dashboard/admin/analytics"
    }
]

const guestRoutes = [
    {
        icon: List,
        label: "Home",
        href: "/"
    },
    {
        icon: Compass,
        label: "Search",
        href: "/dashboard/search"
    },
    {
        icon: User,
        label: "Profile",
        href: "/dashboard/user"
    },
    {
        icon: BookMarked,
        label: "Saved Jobs",
        href: "/dashboard/savedjobs"
    }
]

const SidebarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isAdminpage = pathname.startsWith("/dashboard/admin");

    const routes = isAdminpage ? adminRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
        {
            routes.map(route => (
                <SidebarRouteItems key={route.href} icon={route.icon} label={route.label} href={route.href} />
            ))
        }
    </div>
  )
}

export default SidebarRoutes