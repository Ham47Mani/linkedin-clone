import { useRef } from "react"
import "./dropdown.scss";

/* eslint-disable @typescript-eslint/ban-types */
type dropDownProps = {
  dropdowntoggler: React.ReactNode,
  dropdownHeader?: React.ReactElement,
  dropdownContent?: React.ReactElement,
  dropdownFooter?: React.ReactElement
}

const Dropdown = ({dropdowntoggler, dropdownHeader, dropdownContent, dropdownFooter}: dropDownProps) => {
  const togglerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  
  const handleToggler = () => {
    dropdownRef.current?.classList.toggle("active");
    overlayRef.current?.classList.toggle("active");    
  };

  return (
    <>
      <div className="overlay" onClick={handleToggler} ref={overlayRef}></div>
      <div className="dropdown">
        <div onClick={handleToggler} ref={togglerRef}
          className="dropdown-toggle"
        >
          {dropdowntoggler}
        </div>
        <div ref={dropdownRef} className="dropdown-content">
          {dropdownHeader}
          {dropdownContent}
          {dropdownFooter}
        </div>
      </div>
    </>
  )
}

export default Dropdown