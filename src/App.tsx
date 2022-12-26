import React from "react";
import Pannel from "./components/panel/Panel";
import SiderPanel from "./components/siderPanel/SiderPanel";

const App: React.FC<{}> = () => {
    return (
        <>
            <SiderPanel>
                <Pannel/>
            </SiderPanel>
        </>
    );
}

export default App;