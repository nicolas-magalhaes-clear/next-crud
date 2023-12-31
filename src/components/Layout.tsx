import Titulo from './Titulo'

interface LayoutProps{
    title: string,
    children: any
}

export default function Layout(props: LayoutProps) {

    return (
        <div className="flex flex-col w-2/3 bg-white text-gray-800 p-3 rounded-lg">
            <div>
                <Titulo>{props.title}</Titulo>
            </div>
            {props.children}
        </div>
    )

}