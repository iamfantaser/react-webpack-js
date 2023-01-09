import React from "react";
import {ConfigProvider, theme} from 'antd'
import {defaultTheme} from '../../theme/defaultTheme'


interface ThemeLayoutProps {
    themeConfig?: {[key: string]: any},
    toggleOfDarkness?: boolean,
    children?: React.ReactNode,
}

/**
 * Component provider for ant design theme
 * @param themeConfig ?{[key: string]: any} optional object with theme configuration (defult value in src/theme/defaultTheme.ts)
 * @param toggleOfDarkness ?boolean value for light/dark switching (default value is false)
 * @param children  ?ReactNode children components in ThemeLayout
 * 
 * @returns React.FunctionalComponent
 */
const ThemeLayout: React.FC<React.PropsWithChildren<ThemeLayoutProps>> = ({
    themeConfig, 
    children, 
    toggleOfDarkness,
}) => {

    return (
        <>
            <ConfigProvider theme={{
                token:themeConfig,
                algorithm: toggleOfDarkness ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}>
                {children}
            </ConfigProvider>
        </>
    )
}

ThemeLayout.defaultProps = {
    themeConfig: defaultTheme ,
    toggleOfDarkness: false,
}

export default ThemeLayout