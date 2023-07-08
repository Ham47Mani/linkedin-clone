import { navItemType } from "../../constants/types";
import NavItem from "./NavItem";

type NavItemsProps = {
  navItems: navItemType[],
  classname: string
}

const NavItems = ({navItems, classname} : NavItemsProps) => {
  return (
    <ul className={` ${classname}`}>
      {
        navItems.map((item, i) => {
          return (
            <NavItem key={i} item={item}/>
          )
        })
      }
    </ul>
  )
}

export default NavItems