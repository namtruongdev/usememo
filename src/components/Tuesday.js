import React from 'react';

function Tuesday({ data }) {
  console.log('tuesday render lại');
  const { value, updateTuesday } = data;
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => updateTuesday()}>+</button>
    </div>
  );
}

export default Tuesday;
