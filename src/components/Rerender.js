import React from 'react';

function Rerender({ data }) {
  const { count, updateValue } = data;
  console.log('Được phép render đã render lại');
  return (
    <div className="rerender">
      <p>{count}</p>
      <button onClick={() => updateValue()}>Increment ++</button>
    </div>
  );
}

export default Rerender;
