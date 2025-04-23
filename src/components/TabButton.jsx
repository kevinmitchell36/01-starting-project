
function TabButton({children, onSelect, isHighlighted}) {
  
  return (
    <li>
      <button className={isHighlighted ? 'active' : undefined } onClick={onSelect}>{children}</button>
    </li>
  )
}

export default TabButton
