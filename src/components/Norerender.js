import React from 'react';

const Norerender = ({ data }) => {
  console.log('Không được phép render nhưng vẫn render lại');
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default React.memo(Norerender);
