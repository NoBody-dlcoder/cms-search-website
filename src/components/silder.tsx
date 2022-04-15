import React, { memo, useState } from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { SliderWrapper } from '../ts/common/slider';

const { SubMenu } = Menu;

export default memo(function HYMine() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <SliderWrapper>
      <div className={`${collapsed ? 'container' : ''}`}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
        >
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </SliderWrapper>
  )
})

