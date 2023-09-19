import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/TabelaProps";

import Cliente from "@/core/Cliente";
import ClienteRespositorio from "@/core/ClienteRepositorio";import ColecaoCliente from "@/backend/db/ColecaoCliente";
import { useEffect, useState } from "react";
export default function Home() {

  const repo: ClienteRespositorio  = new ColecaoCliente()


  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio)
  const [clientes,setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])
  
  function obterTodos(){
    repo.obterTodos().then((clientes)=>{
      setClientes(clientes);
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel('form');
  }
  function clienteExcluido(cliente: Cliente) {
    console.log('Cliente nome:', cliente.nome)
  }

  async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente);
      setVisivel('tabela');
  }
  function novoCliente(){
    setCliente(Cliente.vazio);
    setVisivel('form')
  }

  
  

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">

      <Layout title="Cadastro simples">
        {visivel === 'tabela' ? (

          <>
            <div className="flex justify-end">
              <Botao className="mb-4 mt-4" cor="green" onClick={()=> novoCliente()}>Novo cliente</Botao>
            </div>

            <Tabela clientes={clientes} clienteExcluido={clienteExcluido} clienteSelecionado={clienteSelecionado}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={()=> setVisivel('tabela')}/>
        )}



      </Layout>
    </div>
  )
}
