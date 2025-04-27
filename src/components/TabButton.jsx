
function TabButton({children, isHighlighted, ...props}) {
  
  return (
    <li>
      <button className={isHighlighted ? 'active' : undefined } {...props}>{children}</button>
    </li>
  )
}

export default TabButton
