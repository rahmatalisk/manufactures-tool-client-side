import { useEffect, useState } from "react"

const useAdmin=(user)=>{
    const [adminData,setAdmin] = useState()
    const email = user?.email
    useEffect(()=>{
        fetch(`https://my-tools-project.herokuapp.com/admins/${email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data)
        })
    },[])

    return [adminData]

}
export default useAdmin;