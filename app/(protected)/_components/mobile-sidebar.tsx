import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Sidebar from "./Sidebar"


const MobileSidebar = () => {
  return (
    <Sheet>

        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
            <Menu />
        </SheetTrigger>

        <SheetContent className="bg-white p-0 w-52" side={"left"}>
            <Sidebar />
        </SheetContent>

    </Sheet>
  )
}

export default MobileSidebar