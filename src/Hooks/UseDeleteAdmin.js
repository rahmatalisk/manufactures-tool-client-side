
import { useEffect, useState } from "react"

const useDeleteAdmin=(user)=>{
    const [deleteAdminData] = useState({})
    useEffect(()=>{
        fetch(`https://my-tools-project.herokuapp.com/user/admin/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[user])

    return deleteAdminData

}
export default useDeleteAdmin;