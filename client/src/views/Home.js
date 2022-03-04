import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import TableUser from "../components/users/TableUser"

const Home = () => {
    const { getAll, userState: { users, loading } } = useContext(UserContext)
    useEffect(() => getAll(), [])
    return(
        <>
        <TableUser />
        </>
    )
}

export default Home