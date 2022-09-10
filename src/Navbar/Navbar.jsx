import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.auth.login.currentUser.user);
  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          <Link to="/">Logout</Link>
        </Menu.Item>
        {user ? (
          <Menu.Item
            key="user"
            icon={<UserOutlined />}
            style={{ textTransform: "capitalize" }}
          >
            Hi, {user.name}
          </Menu.Item>
        ) : null}
      </Menu>
    </div>
  );
}

export default Navbar;
