import { AppBar, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar color="default" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
       contact app
      </Typography>
      <NavLink
                to="/add-contact"
                className="flex ml-auto items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150"
                title="Return Home"
              >
                <span>create contact</span>
              </NavLink>
    </Toolbar>
  </AppBar>
  )
}

export default Header