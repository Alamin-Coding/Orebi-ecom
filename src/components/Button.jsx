/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Button = ({children}) => {
  return (
    <Link to={"/"} className="inline-block px-14 py-4 bg-black text-white border border-black hover:text-black hover:bg-slate-300 hover:transition-all">
      {children}
    </Link>
  )
}

export default Button
