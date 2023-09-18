interface EntradaProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada( props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label htmlFor="inputText">
                {props.texto}
            </label>
            <input id="inputText" onChange={(e) => props.valorMudou?.(e.target.value)} className={`border border-purple-500 rounded-lg focus:outline-none`} type={props.tipo ?? 'text'} value={props.valor} readOnly={props.somenteLeitura}/>
        </div>
    )
}