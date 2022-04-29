import * as React from 'react'
import { Children } from 'react'

const Alert = ({ kind = 'tip', children, className = '', ...rest }) => {
  const kindMap = {
    tip: 'bg-red-100',
    info: 'border border-slate-300',
  }
  const kindClassName = kindMap[kind]

  return (
    <div className={`flex items-start rounded-2xl space-x-2 px-3 py-2 text-sm ${kindClassName} ${className}`} {...rest}>
      <div className="flex-auto space-y-1">{Children.map(children, (child, i) => (
        <div key={i}>{child}</div>
      ))}</div>
    </div>
  )
}

export default Alert