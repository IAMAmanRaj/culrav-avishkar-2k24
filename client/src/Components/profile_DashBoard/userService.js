import { useSelector } from "react-redux"

const getUser = () => {
    const user = useSelector((state) => state.user.currentUser)
    const token = useSelector((state) => state.user.token)

    return {user, token}
}

export default getUser
