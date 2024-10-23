import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import StyleIcon from '@mui/icons-material/Style';
import MoxfieldPlusIcon from '../icon.svg?react';
import SvgIcon from '@mui/material/SvgIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import { messageActions } from '../../shared/types';

enum menuOptions {
  'OPTIONS',
  'TAGGER',
}
type Props = {
  state: boolean;
  hadlerOpen: VoidFunction;
  hadlerClose: VoidFunction;
};
const SpeedDialMenu = (props: Props) => {
  const actions = [
    { icon: <SettingsIcon />, name: 'Options', action: menuOptions.OPTIONS },
    { icon: <StyleIcon />, name: 'Spark Tagger', action: menuOptions.TAGGER },
  ];
  const handleAction = (action: menuOptions) => {
    switch (action) {
      case menuOptions.OPTIONS:
        chrome.runtime.sendMessage({
          action: messageActions.OPEN_OPTIONS_PAGE,
        });
        break;
      case menuOptions.TAGGER:
        console.log(action);
        break;
      default:
        console.warn(`Unknown action ${menuOptions[action]}`);
        break;
    }
  };
  return (
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
      onClose={() => props.hadlerClose()}
      onOpen={() => props.hadlerOpen()}
      open={props.state}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={() => handleAction(action.action)}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialMenu;
