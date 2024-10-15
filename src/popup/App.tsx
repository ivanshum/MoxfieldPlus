import { SharedFunction } from '../shared/utils';
import ThemeContext from '../shared/muiTheme';
import { Button } from '@mui/material';

const App = () => {
  return (
    <ThemeContext>
      <div>
        <div>I am in App.tsx</div>
        <Button onClick={() => SharedFunction()}>Shared function caller</Button>
      </div>
    </ThemeContext>
  );
};

export default App;
