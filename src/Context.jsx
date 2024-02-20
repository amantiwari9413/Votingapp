import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth } from './confic'
import { database } from './confic'
import { onAuthStateChanged} from 'firebase/auth'
import { collection ,addDoc, query, updateDoc, getDocs , } from 'firebase/firestore'
export const userContext=createContext()

export default function Context({ children }) {
    const[allcoll,setAllcoll] = useState("aman")
    console.log("in context")
    // function check(){
    //     onAuthStateChanged(auth,(user)=>{
    //         if(user){
    //             console.log("user is here")

    //         }else{
    //             console.log("not user")
    //         }
    //     })
    // }
    // check();

    function CreateColl(collName){
        return  collection(database,collName)
    }

    async function CreateUser(collRef,data){
        
           let docRef= await addDoc(collRef,data)
           console.log(docRef)
           return docRef
    }

    async function Userupdata(docRef,data){
        await updateDoc(docRef,data)

    }

    async function getUsers(des){
        let coustemquery= query(collection(database,des))
        const allUser=await getDocs(coustemquery)
        allUser.forEach((snap)=>{
            console.log(snap.id);
            console.log(typeof (snap.id))
            console.log(snap.data())
        })


    }


    const store={
        CreateColl,
        CreateUser,
        Userupdata,
        getUsers,
        allcoll,
        setAllcoll
    }
  return (
    <userContext.Provider value={store}>
        { children }
    </userContext.Provider>
  )
}

 
