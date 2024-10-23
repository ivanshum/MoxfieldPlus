import * as React from 'react';
import ThemeContext from '../shared/muiTheme';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import StyleIcon from '@mui/icons-material/Style';
import MoxfieldPlusIcon from './icon.svg?react';
import SvgIcon from '@mui/material/SvgIcon';

const App = () => {
  const actions = [{ icon: <StyleIcon />, name: 'Spark Tagger' }];
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
      <SpeedDial
        direction="down"
        ariaLabel="Moxfield+ menu"
        icon={
          <SvgIcon
            component={MoxfieldPlusIcon}
            sx={{ fontSize: 40, color: 'white' }}
            inheritViewBox
          />
        }
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          transform: 'translateY(55px)',
        }}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </ThemeContext>
  );
};

export default App;
