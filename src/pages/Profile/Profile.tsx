import React from 'react'
import { Outlet } from 'react-router-dom'
import Base from '../base/base'

const Profile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
        <Base>
            <Outlet />
        </Base>
        </>
    )
    }

export default Profile