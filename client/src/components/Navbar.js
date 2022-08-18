import React from 'react';


import { Menu} from 'antd';
import { Link } from 'react-router-dom';

import {GlobalOutlined} from '@ant-design/icons'

import "../components/navbar.css"



const navbar = () => {
  return (
    <div className='navContainer'>

      {/* <Menu theme = "dark"> 
        <Menu.Item icon = {<GlobalOutlined />}>
            <Link to= "news">Crypto News </Link>
        </Menu.Item>

        <Menu.Item  icon = {<GlobalOutlined />}>
            <Link to= "dashboard">Crypto Dashboard </Link>
        </Menu.Item>

      </Menu> */}
      
    </div>
    

  )
}

export default navbar
