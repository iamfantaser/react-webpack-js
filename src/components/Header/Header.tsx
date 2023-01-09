import React from 'react';
import {SettingOutlined} from '@ant-design/icons';
import  {Menu, Layout, Switch, Col, Row } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems';

const { Header } = Layout;

export interface IHeaderProps {
    items?: ItemType[] | undefined,
    theme?: 'dark' | 'light',
    mode?: 'horizontal' | 'vertical' | 'inline',
    defaultSelectedKeys?: string[],
    onSwitch?: (checked: boolean) => void,
    props?: {[key: string]: any}
}

/**
 * @param key - The key of the menu item
 * @param label - The label of the menu item
 * @param children - The children IMenuItems of the menu item
 * @param icon - The icon of the menu item
 * @param type - The type of group of the menu item
 */
export interface IMenuItem {
    key: React.Key,
    label: React.ReactNode, 
    children?: IMenuItem[],
    icon?: React.ReactNode,
    type?: 'group',
}



const HeaderBlock: React.FC<React.PropsWithChildren<IHeaderProps>> = ({
    children, 
    items,
    theme,
    mode,
    defaultSelectedKeys,
    onSwitch,
    ...props
}) => {
    
    
    return (
        <Header className="header">
            <Row>
                <Col span={12}>
                    <Menu 
                    theme={theme}
                    mode={mode} 
                    defaultSelectedKeys={defaultSelectedKeys}
                    items={items}
                    {...props} 
                    />
                </Col>
                <Col span={12}>
                    <Switch
                    checked={theme === 'dark'}
                    onChange={onSwitch}
                    checkedChildren={"Dark"}
                    unCheckedChildren={"Light"}
                    />
                </Col>
            </Row>
            <div className="logo" />
           
            
      </Header>
    )
} 

HeaderBlock.defaultProps = {
    theme: 'dark',
    mode: 'horizontal',
    defaultSelectedKeys: ['1']
}

export default HeaderBlock;
