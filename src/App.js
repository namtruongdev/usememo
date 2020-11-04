import { useCallback, useState } from 'react';
import './App.css';
import Norerender from './components/Norerender';
import Rerender from './components/Rerender';
import Tuesday from './components/Tuesday';

function App() {
  console.log('App đã render lại!');
  const noRerender = 'Truong';
  const [value, setValue] = useState({
    count: 0,
  });
  const [tuesday, setTuesday] = useState(0);

  const updateTuesday = useCallback(() => {
    setTuesday(tuesday + 1);
  }, [tuesday]);

  const updateValue = useCallback(() => {
    setValue({
      count: value.count + 1,
    });
  }, [value]);

  return (
    <div className="app">
      <Rerender data={{ ...value, updateValue }} />
      <Norerender data={noRerender} />
      <Tuesday data={{ value: tuesday, updateTuesday }} />
    </div>
  );
}

export default App;
