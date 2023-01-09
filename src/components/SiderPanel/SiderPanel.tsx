import React from 'react';
import { LaptopOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { mainPageSubRoutesNavLinks } from '../../routes/main';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;


const sections = ['Сервисы', 'Мониторинг', 'Команды']

// const items1: MenuProps['items'] = sections.map((key, index) => ({
//   key,
//   label: `${key}`,
// }));

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, DashboardOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `${sections[index]}`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   },
// );

interface IPropsWithChildren {
  children?: React.ReactNode,
  items: MenuProps['items'],
}

const SiderPanel: React.FC<IPropsWithChildren> = ({
  children,
  items
}) => {
  const {
    token: { 
      colorBgContainer, 
      colorFillContent},
  } = theme.useToken();

  // const navLinksList: IMenuItem[] = getNavLinkList(items);

  return (
    <Layout>
      <Content style={{padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0' }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
              items={mainPageSubRoutesNavLinks}
            />
          </Sider>
          <Content style={{padding: '0 24px', minHeight: 280 }}>
            <Outlet/>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default SiderPanel;