import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { NavConfigProps } from "layouts/dashboard/nav/config";
import { Icon } from "@iconify/react";

export default function NavSection({ data }: { data: NavConfigProps[] }) {
  return (
    <Box>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item: NavConfigProps) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}
function NavItem({ item }: { item: NavConfigProps }) {
  const { title, path, icon, children } = item;
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {children ? (
        <div>
          <StyledNavItem onClick={() => setOpen((prev) => !prev)}>
            <ListItemIcon
              sx={{
                color: 'inherit'
              }}
            >
              <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
            </ListItemIcon>
            <ListItemText primary={title} />
            {open ? (
              <Icon icon="mdi:chevron-down" />
            ) : (
              <Icon icon="mdi:chevron-up" />
            )}
          </StyledNavItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div style={{ paddingLeft: 16 }}>
              {children.map((subitem: any) => (
                <NavItem key={subitem.title} item={subitem} />
              ))}
            </div>
          </Collapse>
        </div>
      ) : (
        <NavLink to={path}>
          {({ isActive }) => (
            <StyledNavItem selected={isActive}>
              <ListItemIcon>
                <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
              </ListItemIcon>
              <ListItemText primary={title} />
            </StyledNavItem>
          )}
        </NavLink>
      )}
    </div>
  );
}
