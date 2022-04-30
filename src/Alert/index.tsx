import * as React from 'react'
import { Children, ReactNode } from 'react'

interface AlertProps {
  children: ReactNode,
  size?: string,
  tag?: ReactNode,
  className?: string,
}

const Alert = ({
  children,
  size = 'default',
  tag,
  className = '',
  ...rest
}: AlertProps) => {
  const sizeClassNameMap = {
    default: 'space-x-2 px-3 py-2 text-sm'
  }
  const sizeClassName = sizeClassNameMap[size]

  return (
    <div className={`flex items-start rounded-2xl ${sizeClassName} ${className}`} {...rest}>
      {tag && <div className="shrink-0" style={{ marginTop: '1px' }}>{tag}</div>}
      <div className="flex-auto space-y-1">{Children.map(children, (child, i) => (
        <div key={i}>{child}</div>
      ))}</div>
    </div>
  )
}

export default Alert