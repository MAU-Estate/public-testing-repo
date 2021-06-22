import React from 'react'

export default function FilterList({
  items,
  title,
  className = '',
  activeItems = [],
  availableFilters,
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
      <h3 className="uppercase f-19 mb-3 pl-5">{title}</h3>
      <ul>
        {items.map((item, i) => {
          const slug = item.slug.current
          const isChecked = activeItems.indexOf(slug) !== -1
          // const isAvailable = availableFilters.indexOf(slug) !== -1
          const isAvailable = true
          return (
            <li key={`${slug}-filter-${i}`} className="mb-3 ">
              <label
                htmlFor={slug}
                className={`filterItem flex f-20 relative pl-5
                  ${isAvailable ? '' : 'opacity-50'}
                  ${isChecked ? 'text-black' : 'text-grey-b'}
                `}
              >
                <input
                  type="checkbox"
                  name={slug}
                  id={slug}
                  // disabled={!isAvailable}
                  className={`${
                    isAvailable ? '' : 'cursor-not-allowed'
                  } filterItem-checkbox absolute cursor-pointer inset-0 opacity-0 h-full`}
                  checked={isChecked}
                  onChange={e => handleOnSelect(slug, e.target.checked)}
                />
                <div
                  className={`filterItem-title flex items-center whitespace-nowrap`}
                >
                  {item.label}
                </div>
                <div className="absolute left-0">{isChecked ? 'x' : 'o'}</div>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
