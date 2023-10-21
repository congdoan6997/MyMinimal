import { AppBar, Badge, Box, Button, Container, Stack, Toolbar } from '@mui/material';
import React from 'react';
import Logo from 'src/components/logo';
import NavDesktop from './nav/desktop/nav-desktop';
import { navConfig } from './config-navigation';

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Container sx={{ display: 'flex' , alignItems: 'center'}}>
          <Badge>
           <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }}/>

          <NavDesktop  offsetTop={false} data={navConfig}/>
          <Stack alignItems='center' direction={{sx: 'row', md:'row-reverse'}}>
            <Button variant='contained'>Purchase</Button>
            <Button variant='contained'>Login</Button>
            <Button variant='contained'>Settings</Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
