
'use client'
import IconBtn, { Icon, IconType, Icons } from "@/app/_components/IconButton"
import { Divider, useColorMode } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideNav = () => {

  const navItems = [
    {
      label: 'Notes',
      href: '/app/notes',
      icon: Icons.NotesStack,
    },
    {
      label: 'Tags',
      href: '/app/tags',
      icon: Icons.ShoppingMode,
    }
  ]

  const path = usePathname()
  const { colorMode, toggleColorMode } = useColorMode()

  var activePath = path;
  const isLight = colorMode === "light"
  const colorStyles = isLight ? " bg-primary text-white " : "bg-slate-800"

  return (
    <>
      <nav className={`w-3/12 hidden landscape:flex portrait:md:flex h-full flex-col justify-between ${colorStyles}`}>
        <div className="flex-auto bg-red">
          <h1 className="w-full p-3 my-5 "><Link href={'/app/notes'} className="w-full flex justify-center"><Image src={'/icon_log.svg'} alt="minote" width={50} height={50} /></Link></h1>
          <Divider mb={5} />
          <ul>

            {
              navItems.map((item, index) => {
                return <NavItem key={index} isDark={!isLight} href={item.href} label={item.label} icon={item.icon} isActive={activePath == item.href} />
              })
            }


          </ul>
        </div>
        <Divider />
        <ol>
          <button onClick={toggleColorMode} className={`w-full cursor-pointer p-3 flex items-center gap-2`}>
            <Icon icon={colorMode === 'light' ? Icons.lightMode : Icons.darkMode} />
            {colorMode === 'light' ? 'Light' : 'Dark'}
          </button>
        </ol>
      </nav>

      {/* END OF SIDE NAV LAYOUT */}


      {/* START OF BOTTOM NAV LAYOUT */}

      <nav className={`landscape:hidden md:hidden  ${colorStyles}`}>
    
          <ul className="flex ">

            {
              navItems.map((item, index) => {
                return <NavItem key={index} isDark={!isLight} href={item.href} label={item.label} icon={item.icon} isActive={activePath == item.href} />
              })
            }


          </ul>
      </nav>
    </>
  )
}

export default SideNav;


const NavItem = ({ href, label, icon, isActive, isDark }: { href: string, icon: IconType, label: string, isDark: boolean, isActive: boolean }) => {

  const activeStyle = isActive ? isDark ? "bg-primary text-onPrimary" : "bg-white/20 text-onPrimary" : ""

  return (
    <li className={`w-full p-3  ${activeStyle}`}>
      <Link href={href} className="flex justify-center md:justify-normal landscape:justify-normal  items-center gap-3 ">
        <Icon icon={icon} />
        {label}
      </Link>
    </li>
  )
}


