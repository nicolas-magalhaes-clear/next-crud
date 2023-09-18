export default function Titulo(props: any){

    return (
        
        <div className="flex flex-col justify-center ">
            <h1 className="pl- pt-2">{props.children}</h1>    
            <hr className="border-2 border-purple"/>    
        </div>
    
    )

}