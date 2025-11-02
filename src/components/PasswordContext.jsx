import { useState,useContext, createContext, Children } from "react"

const PasswordContextapi=createContext()

const PasswordProvider=({children})=>{
const [password,setPassword]=useState([])
const [editItem,setEditItem]=useState(null)
const [Delete,setDeletePassword]=useState(null)
const [isModalOpen,setIsModalOpen]=useState(false)

const addPassword=(title,password)=>{
    setPassword([{id:Date.now(),title,password}])
}
const edit=()=>{
    setPassword([{id:Date.now(),title,password}])
}

return(
    <PasswordContextapi.Provider value={{password,addPassword,setPassword,setIsModalOpen,isModalOpen}}>
      {children}
    </PasswordContextapi.Provider>
)
}
export default PasswordProvider
export {PasswordContextapi}