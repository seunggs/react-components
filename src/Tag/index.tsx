import * as React from 'react'
import { ReactNode } from 'react'

interface TagProps {
  children: ReactNode,
  kind?: string,
  size?: string,
  color?: string, // same as Tailwind css colors
  className?: string,
}

const Tag = ({
  children,
  kind = 'solid', // solid | outline
  size = 'default',
  color = 'gray',
  className = '',
  ...rest
}: TagProps) => {
  const sizeClassNameMap = {
    default: 'font-medium px-2.5 py-0.5 text-xs'
  }
  const sizeClassName = sizeClassNameMap[size]

  const colorClassNameMap = {
    solid: `bg-${color}-100 text-${color}-800`,
    outline: `border border-${color}-800 text-${color}-800`, 
  }
  const colorClassName = colorClassNameMap[kind]

  return (
    <div className={`inline-flex items-center rounded-full ${colorClassName} ${sizeClassName} ${className}`} {...rest}>{children}</div>
  )
}

export default Tag