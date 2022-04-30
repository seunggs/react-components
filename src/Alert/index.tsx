import * as React from 'react'
import { Children } from 'react'
import Tag from '../Tag'

const Alert = ({
  size = 'default',
  tagText,
  className = '',
  children,
  ...rest
}) => {
  const sizeClassNameMap = {
    default: 'space-x-2 px-3 py-2 text-sm'
  }
  const sizeClassName = sizeClassNameMap[size]

  return (
    <div className={`flex items-start rounded-2xl ${sizeClassName} ${className}`} {...rest}>
      {tagText && <div className="shrink-0" style={{ marginTop: '1px' }}><Tag>{tagText}</Tag></div>}
      <div className="flex-auto space-y-1">{Children.map(children, (child, i) => (
        <div key={i}>{child}</div>
      ))}</div>
    </div>
  )
}

export default Alert