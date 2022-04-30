import * as React from 'react'
import { ReactNode } from 'react'

interface TagProps {
  children: ReactNode,
  size?: string,
  borderColorClassName?: string,
  textColorClassName?: string,
  className?: string,
}

const Tag = ({
  children,
  size = 'default',
  borderColorClassName = 'border-rose-500',
  textColorClassName = 'text-rose-500',
  className = '',
  ...rest
}: TagProps) => {
  const sizeClassNameMap = {
    default: 'font-bold px-1 py-0.5 text-xs leading-3'
  }
  const sizeClassName = sizeClassNameMap[size]

  return (
    <div
      className={`border rounded-md ${sizeClassName} ${className}`} {...rest}>{children}</div>
  )
}

export default Tag