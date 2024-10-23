import * as React from 'react';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import ThemeContext from '../shared/muiTheme';
import RangeSlider from './components/RangeSlider';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const App = () => {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
      </div>
    );
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.primary.main,
    },
  }));
  return (
    <ThemeContext>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4" component={'h1'}>
          Moxfield+ settings
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="Settings tab">
            <Tab label="General settings" id={`simple-tabpanel-0`} />
            <Tab label="Tagger settings" id={`simple-tabpanel-1`} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <FormControlLabel
            value={true}
            control={<Checkbox disabled checked />}
            label="Use moxfield authorization"
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <FormGroup>
            <Typography component={'div'} gutterBottom>
              Level of tag creation
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              component="label"
              justifyContent="flex-start"
            >
              <Typography>Deck</Typography>
              <MaterialUISwitch />
              <Typography>Global</Typography>
            </Stack>
          </FormGroup>
          <FormGroup>
            <Typography component={'div'} gutterBottom>
              Create tags by:
            </Typography>
            <FormControlLabel
              value={false}
              control={<Checkbox />}
              label="Card type"
            />
            <FormControlLabel
              value={false}
              control={<Checkbox />}
              label="Card Subtype"
            />
            <FormControlLabel
              value={false}
              control={<Checkbox />}
              label="Scryfall Tagger Card tags"
            />
            <FormControlLabel
              value={false}
              control={<Checkbox />}
              label="Scryfall Tagger Art tags"
            />
          </FormGroup>
          <Button>Add custom option (scryfall syntax)</Button>
          <Typography component={'div'} gutterBottom>
            Minimum cards with same tag
          </Typography>
          <RangeSlider />
        </CustomTabPanel>
      </Paper>
    </ThemeContext>
  );
};

export default App;
