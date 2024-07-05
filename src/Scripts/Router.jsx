import {createBrowserRouter} from "react-router-dom";
import Drawer from "../Components/Drawer";
import AutoMatchDebug from "../Components/views/AutoMatchDebug";

const menu = [
    {title: "Static Data", link:"/"},
    {title: "Party", link:"/party"},
    {title: "Rules", link:"/rules"},
    {title: "Exception", link:"/exception"},
    {title: "Reporting", link:"/reporting"},
    {title: "AAP", link:"/aap"},
    {title: "Configuration Management", link:"/configurationmanagement"},
    {title: "Utils", link:"/utils"},
    {title: "Case Run", link:"/caserun"},
    {title: "Invoice", link:"/invoice"},
    {title: "DashBoard", link:"/dashboard"},
    {title: "APJ", link:"/apj"},
    {title: "Account Management", link:"/accountmanagement"},
]
const configManagementTabs = [
    {title: "Generic Rule", link:"/configurationmanagement/generic"},
    {title: "Entity", link:"/configurationmanagement/entity"},
    {title: "Shredder", link:"/configurationmanagement/shredder"},
    {title: "AutoMatchDebug", link:"/configurationmanagement/automatchdebug"}, 
    {title: "User/Contact", link:"/configurationmanagement/user"},
    {title: "Groups", link:"/configurationmanagement/groups"},
    {title: "ITSDebug", link:"/configurationmanagement/itsdebug"},
]

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Drawer tabList={menu}/>,
      children: [
        {
          index: true,
          element: <h1>Static Data</h1>
        
        },
      ],
    },
    {
      path: "/party", 
      element: <Drawer tabList={menu}/>,
      children: [
        {
          path: "",
          element: <h1>Party</h1>
        },
      ],
    },
    {
      path: "/rules",
      element: <Drawer tabList={menu}/>, 
      children: [
        {
          path: "",
          element: <h1>Rules</h1>
        },
      ],
    },
    {
        path: "/exception",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>Exception</h1>
          },
        ],
      },
      {
        path: "/reporting",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>Reporting</h1>
          },
        ],
      },
      {
        path: "/aap",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>AAP</h1>
          },
        ],
      },
      {
        path: "/configurationmanagement",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <Drawer tabList={configManagementTabs}/>,
            children: [
                {
                    path: "generic",
                    element: <h2>Generic Rule</h2>,
                },
                {
                    path: "entity",
                    element: <h2>Entity</h2>,
                },
                {
                    path: "shredder",
                    element: <h2>Shredder</h2>,
                },
                {
                    path: "automatchdebug",
                    element: <AutoMatchDebug/>,
                },
                {
                    path: "user",
                    element: <h2>User/Contact</h2>,
                },
                {
                    path: "groups",
                    element: <h2>Groups</h2>,
                },
                {
                    path: "itsdebug",
                    element: <h2>ITSDebug</h2>,
                },
            
            ]
          },
        ],
      },
      {
        path: "/utils",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>Utils</h1>
          },
        ],
      },
      {
        path: "/caserun",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>Case Run</h1>
          },
        ],
      },
      {
        path: "/invoice",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>Invoice</h1>
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>DashBoard</h1>
          },
        ],
      },
      {
        path: "/apj",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>APJ</h1>
          },
        ],
      },
      {
        path: "/accountmanagement",
        element: <Drawer tabList={menu}/>, 
        children: [
          {
            path: "",
            element: <h1>Account Management</h1>
          },
        ],
      },
  ]);