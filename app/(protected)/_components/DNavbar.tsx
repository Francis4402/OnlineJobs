import MobileSidebar from "./mobile-sidebar"
import NavbarRoutes from "./navbar.routes"


const DNavbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
        <MobileSidebar />
        
        <NavbarRoutes />
    </div>
  )
}

export default DNavbar