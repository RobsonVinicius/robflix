import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');  
  return (    
    <PageDefault>
      <h1>Cadastro Categoria: {nomeDaCategoria}</h1>
      <form>
        <label>
          Nome da Categoria:
          <input 
            type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandlerQueErroPediu(infosDoEvento) {
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
            ></input>
          
        </label>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key="categoria">
              {categoria}
            </li>
          )
        })}
      </ul>

      <button>Cadastrar</button>
      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>    
  )
}

export default CadastroCategoria;