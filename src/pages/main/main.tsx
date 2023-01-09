import React from "react";
import { Outlet } from "react-router-dom";
import Base from '../base/base'



const Main: React.FC<{}> = () => {
    return (
        <>
            <Base>
                <Outlet/>
            </Base>
        </>
    );
}

export default Main;