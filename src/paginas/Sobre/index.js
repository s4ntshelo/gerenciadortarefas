import './index.css'
import fotoPerfil from './minha-foto.png';
import habilidadeemLer from './ler.png';
import habilidadeescrever from './escrever.png';
import musica from './musica.png';


function Sobre(){
    return (
        <main>

            <header>
                <h1>Sobre</h1>
            </header> 
            <section>
                <div className='fotoPerfil'>
                    <img className='fotoPerfil' src={fotoPerfil} />
                    <p>Heloá Vitória</p>
                </div>
                <div>
                    <article>
                        <h2>Ler</h2>
                        <img src={habilidadeemLer} />
                        <p className='descrição'>
                            Eu leio livros fisicos e virtuais há mais de 4 anos.
                        </p>
                    </article>
                    <article>
                        <h2>Escrita</h2>
                        <img src={habilidadeescrever} />
                        <p className='descrição'>
                            Sou escritora de livros em uma plataforma digital há 1 ano.
                        </p>
                    </article>
                    <article>
                        <h2>Música</h2>
                        <img src={musica} />
                        <p className='descrição'>
                            Gosto muito de escutar música.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    )    
}

export default Sobre;