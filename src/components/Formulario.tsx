import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "@/core/Cliente"
import Botao from "./Botao"

interface FormularioProps{
    
    cliente: Cliente
    cancelado?: () => void

}
export default function Formulario(props: FormularioProps){
    
    const id = props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)


    return(
        <div className="p-4 rounded-md bg-gray-300">
            {id ? 
                (<Entrada texto="Codigo" valor={id} className="mb-4"/>)
            : false}
            
            <Entrada texto="Nome"  valorMudou={setNome} valor={nome} className="mb-4"/>
            <Entrada texto='Idade' tipo='number' valorMudou={setIdade} valor={idade}/>
            <div className=" flex justify-end mt-3">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}