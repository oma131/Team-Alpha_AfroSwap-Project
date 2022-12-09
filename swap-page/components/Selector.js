import React, { useEffect, useState } from 'react'

import { Dropdown } from '@nextui-org/react'
import { AFS, MATIC, TMA, W3L, DEFAULT_VALUE } from '../utils/SupportedCoins'

const Selector = ({ defaultValue, ignoreValue, setToken, id }) => {
  const menu = [
    { key: MATIC, name: MATIC },
    { key: W3L, name: W3L },
    { key: TMA, name: TMA },
    { key: AFS, name: AFS },
  ]

  const [selectedItem, setSelectedItem] = useState()
  const [menuItems, setMenuItems] = useState(getFilteredItems(ignoreValue))

  function getFilteredItems(ignoreValue) {
    return menu.filter(item => item['key'] !== ignoreValue)
  }

  useEffect(() => {
    setSelectedItem(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    setMenuItems(getFilteredItems(ignoreValue))
  }, [ignoreValue])

  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          backgroundColor:
            selectedItem === DEFAULT_VALUE ? '#2C0A32' : '#B929D0',
        }}
      >
        {selectedItem}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label='Dynamic Actions'
        items={menuItems}
        onAction={key => {
          setSelectedItem(key)
          setToken(key)
        }}
      >
        {item => (
          <Dropdown.Item
            aria-label={id}
            key={item.key}
            color={item.key === 'delete' ? 'error' : 'default'}
          >
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Selector
