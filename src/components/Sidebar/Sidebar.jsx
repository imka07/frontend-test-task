import React, { useState } from "react";
import styled, { css } from "styled-components";

const SidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ collapsed }) => (collapsed ? "60px" : "240px")};
  background: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: width 0.3s;
  overflow: hidden;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px;
  transition: background 0.2s, color 0.2s;
  color: ${({ active, theme }) =>
    active ? theme.textActive : theme.text};
  background: ${({ active, theme }) =>
    active ? theme.sidebarActive : "transparent"};

  &:hover {
    color: ${({ theme }) => theme.textHover};
    background: ${({ theme }) => theme.sidebarHover};
  }

  ${({ collapsed }) =>
    collapsed &&
    css`
      justify-content: center;
    `}
`;

const Label = styled.span`
  ${({ collapsed }) =>
    collapsed
      ? css`
          display: none;
        `
      : css`
          flex: 1;
          margin-left: 12px;
        `}
  transition: opacity 0.3s;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 45px;
  left: 16px;
  right: 16px;
  background: ${({ theme }) => theme.buttonBg};
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.textOnButton};

  &:active {
    background: ${({ theme }) => theme.buttonActive};
  }
`;

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    { label: "Дашборд", icon: "dashboard" },
    { label: "Продажи", icon: "sales" },
    { label: "Цены", icon: "costs" },
    { label: "Оплата", icon: "payments" },
    { label: "Финансы", icon: "finances" },
    { label: "Сообщения", icon: "messages" },
  ];

  return (
    <SidebarContainer collapsed={collapsed}>
      <Logo>
        <Icon
          src="/assets/logo.png"
          alt="Logo"
          style={{ marginRight: collapsed ? 0 : "12px" }}
        />
        <Label collapsed={collapsed}>Ваша Компания</Label>
      </Logo>

      <NavList>
        {items.map(({ label, icon }) => (
          <NavItem
            key={icon}
            active={active === icon}
            collapsed={collapsed}
            onClick={() => setActive(icon)}
          >
            <Icon src={`/assets/icons/${icon}.png`} alt={label} />
            <Label collapsed={collapsed}>{label}</Label>
          </NavItem>
        ))}
      </NavList>

      <ToggleButton onClick={() => setCollapsed((c) => !c)}>
        {collapsed ? "▶" : "◀"}
      </ToggleButton>
    </SidebarContainer>
  );
}
