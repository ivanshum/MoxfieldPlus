import { SharedFunction } from '../shared/utils';

const App = () => {
  return (
    <div>
      <div>I am in Content</div>
      <button onClick={() => SharedFunction()}>Shared function caller</button>
    </div>
  );
};

export default App;
