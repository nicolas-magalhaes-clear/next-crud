import Cliente from "@/core/Cliente"
import { useEffect } from "react"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {

    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}>{IconeEdicao}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={()=> props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50`}>{IconeLixo}</button>
                ) : false}

            </td>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((cliente, index) => {
            return (
                <tr key={cliente.id} className={`${index % 2 == 0 ? 'bg-purple-400' : 'bg-purple-200'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }
    return (
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>

                {renderizarDados()}
            </tbody>
        </table>
    )
}