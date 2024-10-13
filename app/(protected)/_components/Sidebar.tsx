import Image from "next/image"
import SidebarRoutes from "./sidebar-routes"

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white">
        <div className="p-6">
            <Image height={60} width={60} src={'/logo.png'} alt="i" />
        </div>

        <div className="flex flex-col w-full">
            <SidebarRoutes/>
        </div>
    </div>
  )
}

export default Sidebar