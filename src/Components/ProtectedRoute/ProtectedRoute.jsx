
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {

    const token = localStorage.getItem('userToken');

    if (token) {
        return props.children
    }

    else{
       return <Navigate to={'/login'} />
    }

}

