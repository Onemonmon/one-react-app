import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import Admin from "@/pages/Admin";
import User from "@/pages/User";
import Welcome from "@/pages/Welcome";
import routesConfig from "@config/route";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function BasicLayout() {
  return (
    <HashRouter>
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {routesConfig.map((n) => {
                if (n.routes && n.routes.length) {
                  return (
                    <SubMenu key={n.path} icon={n.icon} title={n.name}>
                      {n.routes.map((m) => (
                        <Menu.Item key={m.path}>
                          <NavLink to={m.path}>{m.name}</NavLink>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  );
                }
                return (
                  <Menu.Item icon={n.icon} key={n.path}>
                    <NavLink to={n.path}>{n.name}</NavLink>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/" component={Admin}></Route>
                <Route exact path="/admin/" component={Admin}></Route>
                <Route path="/admin/user" component={User}></Route>
                <Route path="/welcome" component={Welcome}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </HashRouter>
  );
}

export default BasicLayout;
