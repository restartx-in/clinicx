import './style.scss'

const Td = ({ children, colSpan = 1 }) => {
  return (
    <td colSpan={colSpan} className="td" style={{fontFamily:"poppins"}}>
      <div>{children}</div>
    </td>
  )
}

export default Td