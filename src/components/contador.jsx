import { useState } from 'react'

export default function Contador() {
    const [count, setCount] = useState(0)
    return (
        <div className='col-md-3'>
            {count}

            <div className="card ">
                <button onClick={() => setCount((count) => count + 1)}>
                    Aumentar
                </button>

                <button onClick={() => setCount((count) => count - 1)}>
                    Disminuir
                </button>
            </div>
        </div>
    )
}
