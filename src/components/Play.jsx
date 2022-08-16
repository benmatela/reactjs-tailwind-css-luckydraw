import React, { useState } from 'react'
import Board from './Board';
import Spin from './Spin';

function Play() {
    const findRange = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const [drawnNumbers, setDrawnNumbers] = useState(findRange(1, 50));

  return (
    <div className='text-white'>
        <Spin />
        <Board />
        {drawnNumbers}
    </div>
  )
}

export default Play