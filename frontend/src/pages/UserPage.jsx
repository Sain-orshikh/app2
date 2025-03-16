import { useParams } from 'react-router-dom'
import React from 'react'


const UserPage = () => {

    const { id } = useParams()
    
    return (
        <div>UserPage {id}</div>
    )

}

export default UserPage