import React, { useContext, useEffect } from 'react'
import { userContext } from './Context'

export default function Vote() {
     const {getUsers , allcoll} =useContext(userContext)
     console.log(allcoll)
     const handlechage=(e)=>{
        console.log(e.target.value)
     }
  return (
    <>
<div className="max-w-2xl mx-auto">
	<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
        <select id="countries"
        onChange={handlechage}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value>Choose a country</option>
        <option value="HEADBOY">HEAD BOY</option>
    </select>

    <h1>{allcoll}</h1>
</div>


    </>
  )
}
