import {FaChevronUp, FaChevronDown} from "react-icons/fa";
import { useRef, useState } from 'react';

type colpsTabsProps = {
  children: React.ReactNode,
  tabTitle: string,
  className?: string,
  tabIsOpen?: boolean
}

const ColpsTabs = ({tabTitle, tabIsOpen , children, className}: colpsTabsProps) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(tabIsOpen ? tabIsOpen : false);

  return (
    <div className="my-2">
      <div ref={titleRef} onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center px-3 group mb-2 cursor-pointer"
      >
        <p className={` ${className}`}>{tabTitle}</p>
        {
          isOpen ? 
          <FaChevronUp className="opacity-0 transition-all group-hover:opacity-100" /> :
          <FaChevronDown className="opacity-0 transition-all group-hover:opacity-100" />
        }
      </div>
      {
        isOpen && (
          <div ref={contentRef} className="text-black/60">
            {children}
          </div>
        )
      }
    </div>
  )
}

export default ColpsTabs