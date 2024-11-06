
export default function Tareas() {
    return (
        <div className="col-md-3">
            <h1>Lista de Tareas</h1>
            <ul className="task-list">
                <li className="task-item">
                    <input type="checkbox" id="task1"/>
                        <label htmlFor="task1">Tarea 1</label>
                </li>
                <li className="task-item">
                    <input type="checkbox" id="task2"/>
                        <label htmlFor="task2">Tarea 2</label>
                </li>
                <li className="task-item">
                    <input type="checkbox" id="task3"/>
                        <label htmlFor="task3">Tarea 3</label>
                </li>
                <li className="task-item">
                    <input type="checkbox" id="task4"/>
                        <label htmlFor="task4">Tarea 4</label>
                </li>
                <li className="task-item">
                    <input type="checkbox" id="task5"/>
                        <label htmlFor="task5">Tarea 5</label>
                </li>
            </ul>
        </div>
    )
}
