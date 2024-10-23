import * as React from 'react';
import ThemeContext from '../shared/muiTheme';
import Backdrop from '@mui/material/Backdrop';
import SpeedDialMenu from './components/SpeedDial';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    //Add Font
    if (document.getElementById('robotofontlink') === null) {
      document?.head.appendChild(
        Object.assign(document.createElement('link'), {
          id: 'robotofontlink',
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        }),
      );
      console.log('add font');
    }
  }, []);
  return (
    <ThemeContext>
      <Backdrop open={open} sx={{ zIndex: 100 }} />
      <SpeedDialMenu
        hadlerClose={handleClose}
        hadlerOpen={handleOpen}
        state={open}
      />
    </ThemeContext>
  );
};

export default App;
