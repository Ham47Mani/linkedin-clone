import { IconType } from "@react-icons/all-files";

type buttonProps = {
  className?: string,
  children: React.ReactNode,
  clickHadnler: () => void
}

const ButtonLg = ({className, children, clickHadnler}: buttonProps) => {
  return (
    <button className={`btn ${className}`} onClick={() => clickHadnler()}>
      {children}
    </button>
  )
}
export default ButtonLg;


// ============== SharedButton ==============
type sharedButtonType = {
  icon: IconType,
  text: string,
  className?: string,
  color?: string
}

export const SharedButton = ({icon, text, className, color}: sharedButtonType) => {
  const IconComponent = icon;
  return (
    <button className={`py-4 px-2 flex justify-center items-center gap-2 hover:bg-black/10 rounded-lg ${className}`}>
      <IconComponent className={`text-lg ${color}`}/>
      <span className="capitalize font-medium text-black/50">{text}</span>
    </button>
  )
}