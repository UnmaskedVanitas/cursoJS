import React from "react"

function Endbar() {
  return (
    <div className="pl-10 p-4 justify-center shadow md:flex md:items-center md:justify-between md:p-6 bg-blue-500">
      <span className="text-sm font-bold text-white sm:text-center ">
        © 2022
        <a className="hover:underline">Mnslvs™</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-bold text-white sm:mt-0">
        <li>
          <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a className="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Endbar
