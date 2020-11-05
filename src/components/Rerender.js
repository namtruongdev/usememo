import React from 'react';

function Rerender({ data, updateValue }) {
  console.log('Được phép render đã render lại');
  return (
    <div className="rerender">
      <p>{data}</p>
      <button onClick={updateValue}>Increment ++</button>
    </div>
  );
}

export default React.memo(Rerender);
