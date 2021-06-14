import React from 'react'

export default function FilterList({
  items,
  title,
  className = '',
  activeItems = [],
  onSelect,
}) {
  const handleOnSelect = (filter, checked) => {
    let result =
      typeof activeItems === 'string' ? [activeItems] : [...activeItems]
    checked
      ? result.push(filter)
      : (result = result.filter(item => item !== filter))
    onSelect(result)
  }
  return (
    <div className={`${className}`}>
      <h3 className="uppercase f-20 mb-3" style={{ marginLeft: '19px' }}>
        {title}
      </h3>
      <ul>
        {items.map((item, i) => {
          const isChecked = activeItems.indexOf(item.title) !== -1
          return (
            <li key={`${title}-filter-${i}`} className="mb-3 ">
              <label
                htmlFor={item.title}
                className="filterItem flex f-21 relative cursor-pointer text-grey-b"
              >
                <input
                  type="checkbox"
                  name={item.title}
                  id={item.title}
                  className="filterItem-checkbox absolute inset-0 opacity-0"
                  checked={isChecked}
                  onChange={e => handleOnSelect(item.title, e.target.checked)}
                />
                <div className="filterItem-title flex items-center whitespace-nowrap">
                  {item.title}
                </div>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
