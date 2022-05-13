import * as React from 'react'
import { Children, ReactNode } from 'react'

interface AlertProps {
  children: ReactNode,
  kind?: string,
  size?: string,
  tag?: ReactNode,
  className?: string,
}

const Alert = ({
  children,
  kind = 'info',
  size = 'default',
  tag,
  className = '',
  ...rest
}: AlertProps) => {
  const kindClassNameMap = {
    info: 'text-blue-700 bg-blue-50',
    warning: 'text-yellow-800 bg-yellow-50',
    error: 'text-red-800 bg-red-50',
    success: 'text-green-800 bg-green-50',
  }
  const kindClassName = kindClassNameMap[kind]

  const sizeClassNameMap = {
    default: 'space-x-2 px-3 py-2 text-sm font-medium'
  }
  const sizeClassName = sizeClassNameMap[size]

  return (
    <div className={`flex items-start rounded-2xl ${kindClassName} ${sizeClassName} ${className}`} {...rest}>
      {tag && <div className="shrink-0" style={{ marginTop: '1px' }}>{tag}</div>}
      <div className="flex-auto space-y-1">{Children.map(children, (child, i) => (
        <div key={i}>{child}</div>
      ))}</div>
    </div>
  )
}

export default Alert