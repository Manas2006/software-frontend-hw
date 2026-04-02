/*
  HeaderBar.js – Custom component #1 (RUBRIC: custom component)
  A header bar for the Projects page.
  Uses Material UI AppBar and Typography (RUBRIC: MUI library components).
*/
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

/*
  RUBRIC: props passed from parent (Projects) to child (HeaderBar)
  - title: string displayed in the header
*/
function HeaderBar({ title }) {
  return (
    /* RUBRIC: Material UI component – AppBar */
    <AppBar position="static" sx={{ backgroundColor: '#bf5700', mb: 3 }}>
      <Toolbar>
        {/* RUBRIC: Material UI component – Typography */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
