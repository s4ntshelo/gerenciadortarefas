import './index.css'
import tarefas from '../../../mook/tarefas'
import {Link} from 'react-router-dom';

function ListarTarefas() {
    return (
        <main>
            <header>
                <h1>Listar Tarefas</h1>
            </header>
            <section>
                <div>
                    <p>Foram encontrados {tarefas.length} Tarefas.</p>
                </div>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>TAREFA</th>
                            <th>RESPONSAVEL</th>
                            <th>VER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tarefas.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.responsavel}</td>
                                    <td><Link to={`/tarefa/${item.id}`}>Ver</Link></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>

                </table>
            </section>
        </main>
    )
}
export default ListarTarefas