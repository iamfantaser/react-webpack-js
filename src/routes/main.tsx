import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import React, {lazy, Suspense} from 'react'
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    DataRouteObject, 
    NavLink,
    Route,
    RouteObject,
} from 'react-router-dom'
import { IMenuItem } from '../components/Header/Header';
import Base from '../pages/base/base';


export function lazyLoadRoutes(folder: string, componentName: string){
    const LazyElement = lazy(
        //cannot be full dynamic value
        async () => import(`../../src/${folder}/${componentName}/${componentName}.tsx`)
    );
  
    // Wrapping around the suspense component is mandatory
    return (
      <Suspense fallback="Loading...">
         <LazyElement />
      </Suspense>
    );
}



let activeStyle = {
    textDecoration: "underline",
};

let activeClassName = "underline";

export const mainPageSubRoutes: RouteObject[] = [

    {
        path: '/',
        element: lazyLoadRoutes('components','SiderPanel'),
        children: [
            {
        
                path: 'services',
                index: true,
                element: lazyLoadRoutes('components','Panel'),
            },
            {
                path: 'products',
                element: lazyLoadRoutes('components','Panel'),
            },
        ]
    }
  
]

export const mainPageSubRoutesNavLinks: MenuProps['items'] = [
    getItem(
        <NavLink to={"/services"} >Services</NavLink>, 
        "services", 
        undefined, 
        [getItem(<NavLink to={"/service"} >SomeService</NavLink>, "subservices")]),
    getItem(<NavLink to={"/products"} >Products</NavLink>, "products"),
]

export const routeArray: RouteObject[] = [
    {
        path: '/',
        element: lazyLoadRoutes('pages', 'main'),
        children: mainPageSubRoutes
    },
    {
        path: '/home',
        element: lazyLoadRoutes('pages','Home'),
    },
    {
        path: '/about',
        element: lazyLoadRoutes('pages', 'About'),
    }
]

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

export const navLinksList: MenuProps['items'] = [
    getItem(<NavLink to={"/"} >Main</NavLink>, "main"),
    getItem(<NavLink to={"/home"}>Home</NavLink>, "home"),
    getItem(<NavLink to={"/about"}>About</NavLink>, "about"),
]


export const routeList = createRoutesFromElements(
    <Route path="/" element={<Base />}>
        {/* <Route path="/" element={lazyLoadRoutes('main')} />
        <Route path="/home" element={lazyLoadRoutes('Home')} />
        <Route path="/about" element={lazyLoadRoutes('About')} /> */}
        {/* <Route path="/profile" element={lazyLoadRoutes('Profile')} />
        <Route path="/login" element={lazyLoadRoutes('Login')} />
        <Route path="/register" element={lazyLoadRoutes('Register')} />
        <Route path="/forgot-password" element={lazyLoadRoutes('ForgotPassword')} />
        <Route path="/reset-password" element={lazyLoadRoutes('ResetPassword')} />
        <Route path="/404" element={lazyLoadRoutes('NotFound')} />
        <Route path="/500" element={lazyLoadRoutes('ServerError')} />
        <Route path="*" element={lazyLoadRoutes('NotFound')} /> */}
    </Route>
)


export const routes = createBrowserRouter(routeArray)
