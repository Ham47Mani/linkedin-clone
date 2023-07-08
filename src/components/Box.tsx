import React from 'react'

type BoxProps = {
  children: React.ReactNode;
  className?: string
}

const Box = ({children, className}: BoxProps) => {
  return (
    <div className={`shadow-xl rounded-lg overflow-hidden bg-white border border-black/5 ${className}`}>
      {children}
    </div>
  )
}

export default Box