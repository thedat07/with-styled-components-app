import { Menu, Input } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const { Search } = Input;
export function Headerlayout() {
  const [current, setCurrent] = useState("1");
  const router = useRouter();
  const onSearch = (val) => {
    router.push(`/search/${val}`).then(() => window.scrollTo(0, 0));
  };
  const isActive = (route) => {
    if (route === router.pathname) {
      return current;
    }
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <Search
            placeholder="Search for a movie, ..."
            enterButton="Search"
            size="large"
            onSearch={(val) => onSearch(val)}
          />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[router.pathname]}
        >
          <Menu.Item key="/">
            <Link href="/" >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/movie">
            <Link href="/movie ">
              Movies
            </Link>
          </Menu.Item>
          <Menu.Item key="/person-popular">
            <Link href="/person-popular" >
              Person
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
export default React.memo(Headerlayout);
