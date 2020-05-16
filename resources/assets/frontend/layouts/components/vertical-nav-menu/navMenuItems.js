/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    //
    {
        url: "/dashboard",
        name: "Dashboard",
        slug: "home",
        icon: "HomeIcon",
    },
    {
        url: "/alat",
        name: "Alat",
        slug: "alat",
        icon: "PackageIcon",
    },
    {
        url: "/notifikasi",
        name: "Notifikasi",
        slug: "notifikasi",
        icon: "InfoIcon",
    },
    {
        url: null,
        name: "Master Data",
        icon: "PlusCircleIcon",
        submenu: [{
                url: "/sensor",
                name: "Sensor",
                slug: "Master Data Sensor",
                icon: "PocketIcon",
            },
            {
                url: "/microcontroller",
                name: "microcontroller",
                slug: "Master Data microcontroller",
                icon: "EditIcon",
            }
        ]
    },
    {
        url: "/pengguna",
        name: "Pengguna",
        slug: "pengguna",
        icon: "UserIcon",
    },
]