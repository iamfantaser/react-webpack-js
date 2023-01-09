import React from "react";
import { Layout, MenuProps } from "antd";
import HeaderBlock, { IMenuItem } from "../../components/Header/Header";
import ThemeLayout from "../../components/ThemeLayout/ThemeLayout";
import { Footer } from "antd/es/layout/layout";
import { navLinksList } from "../../routes/main";
import {items} from "../../components/Menu/Menu";


const Base:React.FC<React.PropsWithChildren<{
    children?: React.ReactNode,
    headerItems?: MenuProps['items'],
}>> = ({
    children, 
    headerItems = navLinksList
}) => {
    const [toggleOfDarkness, setToggleOfDarkness] = React.useState(false);
        return (
            <>
                <ThemeLayout 
                        toggleOfDarkness={toggleOfDarkness}
                    >
                    <Layout>
                        <HeaderBlock onSwitch={setToggleOfDarkness} items={headerItems ? headerItems: items}/>
                    </Layout>
                        {children}
                    <Layout>
                        <Footer style={{textAlign: 'center' }}>Ant Design ©2018 Created by Bylarus</Footer>
                    </Layout>
                </ThemeLayout>
            </>
        );
};


export default Base;