"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { useRouter } from "next/navigation";

//----------------------------------------------------------------

import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks_store";
import { logout } from "@/store/user_auth/user_auth_slice";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { ButtonGroup, Icon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user_auth);
  const router = useRouter();

  const pages = ["home", "categores", "About Us"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handel_logout = () => {
    router.push("/home");
    dispatch(logout());
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const { item_id } = useAppSelector((state) => state.user_items);

  const items_number = Object.values(item_id).reduce((acc, item) => {
    return acc + item;
  }, 0);
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button
                      onClick={() => {
                        {
                          router.push(`/${page}`);
                        }
                      }}
                    >
                      {page}
                      {/* <Link href={`/${page}`}>{page}</Link> */}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 0.5,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  onClick={() => {
                    {
                      router.push(`/${page}`);
                    }
                  }}
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link href={`${page}`}>{page}</Link>
                </Button>
              ))}
            </Box>
            {token ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                  <IconButton
                    onClick={() => {
                      router.push("/cart");
                    }}
                    sx={{ marginRight: "10px" }}
                  >
                    <StyledBadge badgeContent={items_number} color="info">
                      <Icon
                        sx={{
                          width: "30px",
                          height: "30px",
                        }}
                      >
                        <ShoppingCartIcon />
                      </Icon>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Icon sx={{ width: "30px", height: "30px" }}>
                      <PersonIcon />
                    </Icon>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        onClick={() => {
                          router.push("/profile");
                        }}
                      >
                        Profile
                      </Button>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button onClick={handel_logout}>Logout</Button>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <ButtonGroup
                sx={{ boxShadow: "none" }}
                variant="contained"
                aria-label="Basic button group"
              >
                <Button
                  onClick={() => {
                    {
                      router.push("/Login");
                    }
                  }}
                  sx={{ color: "white" }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    {
                      router.push("/signup");
                    }
                  }}
                  sx={{ color: "white" }}
                >
                  signup
                </Button>
              </ButtonGroup>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
