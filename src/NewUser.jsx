import { userContext } from './Context'
import React, { useContext, useState } from 'react'

export default function NewUser() {
    const[name,setName]= useState("")
    const[Cname,setCname] = useState("")
    const[Des,setDes]  = useState("")
    const[fat,setFat] =useState("")

    const{CreateColl,CreateUser,Userupdata,setAllcoll} = useContext(userContext)

    setAllcoll("hello")

    const handleclick=async()=>{
        let data={
         Uname:name,
         ClassName:Cname,
         Designation:Des,
         Vote:0
        }
        //this is use for create collection 
       let collRef= CreateColl(Des);
       console.log(collRef);
       //this is use for create user
       let docRef=await CreateUser(collRef,data)

       //update user
       Userupdata(docRef,{Vote:10})

       setCname("")
       setName("")
       setDes("")
       setFat("")

    }

  return (
    <>

<div className="bg-gray-100">
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-30 h-20"/>
      </div>
      <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Registro</h1>
      <form>
        <div className="mb-4">
          <label  className="block mb-2 text-sm text-gray-600">FULL NAME </label>
          <input type="text" id="nombre" name="nombre" 
          onChange={(e)=>{setName(e.target.value) }}
          value={name}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div className="mb-6">
          <label  className="block mb-2 text-sm text-gray-600">FATCHER NAME</label>
          <input onChange={(e)=>{setFat(e.target.value)} }
          value={fat}
          type="text" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
        </div>
        <div className="mb-4">
          <label  className="block mb-2 text-sm text-gray-600">CLASS NAME</label>
          <input onChange={(e)=>{setCname(e.target.value)} }
          value={Cname}
          type="text" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
        </div>
        <div className="mb-4">
          <label  className="block mb-2 text-sm text-gray-600">Designation</label>
          <input onChange={(e)=>{setDes(e.target.value)}}
          value={Des}
          type="text" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
        </div>

        <button type="button" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
        onClick={handleclick}>Registro</button>
      </form>
      <p className="text-xs text-gray-600 text-center mt-8">&copy; 2023 WCS LAT</p>
    </div>
  </div>
</div>

    </>
  )
}
