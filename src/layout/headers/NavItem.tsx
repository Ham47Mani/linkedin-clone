import { IconType } from 'react-icons'
import { navItemType } from '../../constants/types';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  item: navItemType,
  classname?: string
}

const NavItem = ({item, classname}: NavItemProps) => {
  const Icon:IconType = item.icon;
  return (
    <li >
      <NavLink to={item.link ? item.link : ""} 
        className={`flex justify-center items-center flex-col cursor-pointer text-black/60 hover:text-black ${classname}`}
      >
        <div className='icon relative'>
          {
            item.notification &&
            <span className='notification'>{item.notification}</span>
          }
          <Icon className="text-[22px]" />
        </div>
        <span>{item.name}</span>
      </NavLink>
    </li>
  )
}

export default NavItem