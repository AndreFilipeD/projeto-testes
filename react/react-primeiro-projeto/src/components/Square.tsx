const lados = {
    ladoa: 7,
    ladob: 8,
    ladoc: 9,
    ladod: 10
} 

export const Square = () => {
    return(
        <div className="w-50 h-50 bg-orange-700 text-white">
            
            <h2>Quadradin {lados.ladoa} {lados.ladob} {lados.ladoc} {lados.ladod}</h2>
        </div>
    )
}