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
          const slug = item.slug.current
          const isChecked = activeItems.indexOf(slug) !== -1
          return (
            <li key={`${slug}-filter-${i}`} className="mb-3 ">
              <label
                htmlFor={slug}
                className="filterItem flex f-21 relative  text-grey-b"
              >
                <input
                  type="checkbox"
                  name={slug}
                  id={slug}
                  className="filterItem-checkbox absolute cursor-pointer inset-0 opacity-0 h-full"
                  checked={isChecked}
                  onChange={e => handleOnSelect(slug, e.target.checked)}
                />
                <div className="filterItem-title flex items-center whitespace-nowrap">
                  {item.label}
                </div>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
