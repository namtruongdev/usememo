import React, { memo } from 'react';

function Tuesday({ data, updateTuesday }) {
  console.log('tuesday render lại');
  return (
    <div>
      <p>{data}</p>
      <button onClick={updateTuesday}>+</button>
    </div>
  );
}

export default memo(Tuesday);
