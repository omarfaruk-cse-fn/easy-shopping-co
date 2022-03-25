import React, { useState } from 'react';

const Test = () => {

    const [count, setCount] = useState(0)

    const plus = () => {
        if (count >= 10) {
        }
        else {
            setCount(count + 1)
        }
    }

    const minus = () => {
        if (count <= 0) {
        }
        else {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={plus} className='ms-3 p-3'>+</button>
            <button onClick={minus} className='ms-3 p-3'>-</button>
        </div>
    );
};

export default Test;