export default function Todo({darkTheme}){
    const todoItems=[
        {
            id:1,
            resumen:"Realizar maqueta agile",
        },
        {
            id:2,
            resumen:"Comprobar maqueta agile",
        },
        {
            id:3,
            resumen:"Poner en marcha maqueta",
        }
    ]
    const todoItemsRen = todoItems.map((item) => 
        <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            {item.resumen}
            <span class="badge bg-primary rounded-pill">14</span>
        </li>
    );
    return(
        <div className="p-5 todoList bg-body-tertiary">
            <ul className={darkTheme?"list-group list-group-item-dark":"list-group"}>
                {todoItemsRen}
            </ul>
        </div>
    )
}