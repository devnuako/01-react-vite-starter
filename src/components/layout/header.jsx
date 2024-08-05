// import { Link } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
// import './header.css';

import { Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, AuditOutlined } from '@ant-design/icons';
import { useState } from 'react';


const Header = () => {
    //anchor
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <AuditOutlined />,

        },

    ];
    
    return (
        <ul>
            {/* <li><a className="active" href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/products">Products</a></li> */}
            
            {/* <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li> */}
            
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </ul>
    )
}

export default Header;
