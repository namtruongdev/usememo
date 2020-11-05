import { useCallback, useState, useRef } from 'react';
import './App.css';
import Norerender from './components/Norerender';
import Rerender from './components/Rerender';
import Tuesday from './components/Tuesday';

function App() {
  console.log('App đã render lại!');
  const test = useRef(null);
  console.log(test);
  const noRerender = 'Truong';
  const [value, setValue] = useState(0);
  const [tuesday, setTuesday] = useState(0);

  const updateTuesday = useCallback(() => {
    setTuesday(tuesday + 1);
  }, [tuesday]);

  const updateValue = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div className="app">
      <input ref={test} />
      <Rerender data={value} updateValue={updateValue} />
      <Norerender data={noRerender} />
      <Tuesday data={tuesday} updateTuesday={updateTuesday} />
    </div>
  );
}

export default App;
