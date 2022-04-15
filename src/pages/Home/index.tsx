import React from 'react'
import { Layout } from 'antd'
import { Content, Header, } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'

import HomeSider from '../../components/silder'
import { HomeWrapper } from '../../ts/Home/home'

export default function Home() {

  return (
    <HomeWrapper>
      <Layout className='container'>
        <Header style={{ height: '60px' }}>Header</Header>
        <Layout className='main-content'>
          <Sider width="auto" theme='light'><HomeSider /></Sider>
          <Content className='right-content'>Content</Content>
        </Layout>
      </Layout>
    </HomeWrapper >
  )
}
