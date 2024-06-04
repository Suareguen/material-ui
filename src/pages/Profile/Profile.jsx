import { useNavigate } from "react-router-dom"
import { getUserProfile } from "../../services/userService"
import { useState, useEffect } from "react"
function Profile() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const getUserData = async () => {
            const result = await getUserProfile()
            setUser(result)
        }
        getUserData()
    }, [])

    function onLogout() {
        localStorage.removeItem('token')
        navigate('/')
      }
  return (
    <div>
        <button onClick={onLogout}>
            Logout
        </button>
        {
            localStorage.getItem('role') === 'admin' ? <h1>Soy un Admin</h1> : <h1>Soy un User</h1>
        }
    </div>
  )
}

export default Profile