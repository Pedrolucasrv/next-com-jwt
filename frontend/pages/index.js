import React from 'react';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { authService } from '../src/services/auth/authService';

export default function HomeScreen() {

  const [values, setValues] = useState({
    usuario: 'omariosouto',
    senha: 'safepassword'
  })

  function handleChange(event){
    const fieldValue = event.target.value;
    const fieldName = event.target.name

    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue
      };
    })

  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => { 
        //onSubmit = Controller (pega dados do usuarui e passa para um servico)


        e.preventDefault();



        authService.login({
            username:values.usuario,
            password:values.senha
        }).then(() => {
          Router.push('/auth-page-ssr')

        }).catch(() => {
          alert('deu ruim mermao')
        })
        }}>
        <input
          placeholder="Usuário" name="usuario"
          defaultValue={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          defaultValue={values.senha}
          onChange={handleChange}
        />
        <pre>
          {JSON.stringify(values,null,2)}
        </pre>
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
