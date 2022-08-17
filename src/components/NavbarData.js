import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md'

export const NavbarData = [
    {
        title: 'Watching List',
        path: '/watchingList',
        icon: <IoIcons.IoIosContact />,
        cName: 'nav-text'  
    },
    {
        title: "Stream List",
        path: '/streamList',
        icon: <MdIcons.MdOutlineComputer />,
        cName: 'nav-text'
    }
]