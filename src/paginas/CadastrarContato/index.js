import { useState } from 'react';
import './index.css';
import tarefa from '../../mook/tarefas'
import tarefas from '../../mook/tarefas';
import { useNavigate } from 'react-router-dom';


function CadastrarTarefa() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    function cadastrarTarefa(e){
        e.preventDefault()

    if (!nome.trim()){
        setError("O campo NOME não pode estar vazio!!!");
        return;
    }

    if (!telefone.trim()){
        setError("O campo TELEFONE não pode estar vazio!!!");
        return;
    }

    if (!cidade.trim()){
        setError("O campo CIDADE não pode estar vazio!!!");
        return;
    }

    if (!email.trim()){
        setError("O campo EMAIL não pode estar vazio!!!");
        return;
    }

    try{
        const addTarefa = {
            'id': tarefas.length + 1,
            'titulo': titulo,
            'descricao': descricao,
            'responsavel': responsavel
        }

        tarefas.push(addTarefa);
        setNome("");
        setTelefone("");
        setCidade("");
        setEmail("");

        navigate(-1)
    
    }catch(error){
        console.log("Erro ao cadastrar tarefa: " + error)
    }
      
    }

    return (
        <main>
            <header>
                <h1>Novo Contato</h1>
            </header>
            <section>
                <h2>Formulário para cadastro de contatos</h2>
                <p>Entre com todos os campos!!!</p>
                {
                    error && (
                        <div className='error'>
                            <p className='textoError'>{error}</p>
                        </div>
                    )
                }

                <div className='formulario'>
                    <form onSubmit={cadastrarContato}>
                        <label>Nome do Contato</label>
                        <input type="text" value={nome} onChange={e=>setNome(e.target.value)} />
                        
                        <label>Telefone</label>
                        <textarea value={telefone} onChange={e=>setTelefone(e.target.value)} ></textarea>
                        
                        <label>Responsável</label>
                        <input type="text" value={responsavel} onChange={e=>setResponsavel(e.target.value)} />

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarTarefa;