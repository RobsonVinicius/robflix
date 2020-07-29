import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <div>
      <PageDefault>
        <h1>Cadastro Categoria</h1>
        <form>
          <label>
            Nome da Categoria:
            <input type="text"></input>
          </label>
        </form>
        <button>Cadastrar</button>
        <Link to="/">
          Ir para a home
        </Link>
      </PageDefault>
    </div>
  )
}

export default CadastroCategoria;