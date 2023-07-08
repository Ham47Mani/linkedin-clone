
// ===================== Start Icon Post Modal =====================
type IconProps = {
  children: React.ReactNode,
  labelName: string;
}

const CreationPostIcon = ({children, labelName}: IconProps) => {
  return (
    <div className="relative w-fit group select-none">
      <div className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center text-xl text-black/60 cursor-pointer transition-all duration-500 hover:shadow-md hover:shadow-black/60 gr">
        {children}
      </div>
      <span className="text-sm absolute z-10 -top-12 px-2 h-9 left-1/2 -translate-x-1/2 bg-gray-100 shadow-md shadow-black/50 rounded-lg justify-center items-center min-w-max opacity-0 transition-all duration-500 hidden group-hover:opacity-100 group-hover:flex">
        {labelName}
      </span>
    </div>
  )
}

export default CreationPostIcon;
// ===================== End Icon Post Modal =====================