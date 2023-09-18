import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/TabelaProps";
import Cliente from "@/core/Cliente";
import { useState } from "react";
export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 4, '4')

  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log('Cliente nome:', cliente.nome)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">

      <Layout title="Cadastro simples">
        {visivel === 'tabela' ? (

          <>
            <div className="flex justify-end">
              <Botao className="mb-4 mt-4" cor="green" onClick={()=> setVisivel('form')}>Novo cliente</Botao>
            </div>

            <Tabela clientes={clientes} clienteExcluido={clienteExcluido} clienteSelecionado={clienteSelecionado}></Tabela>
          </>
        ) : (
          <Formulario cliente={clientes[0]}  cancelado={()=> setVisivel('tabela')}/>
        )}



      </Layout>
    </div>
  )
}
