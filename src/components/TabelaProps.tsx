import Cliente from "@/core/Cliente"
import { useEffect } from "react"

interface TabelaProps {

    clientes: Cliente[]
}
export default function Tabela(props: TabelaProps) {

    
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, index) => {
            return (
                <tr key={cliente.id}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
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