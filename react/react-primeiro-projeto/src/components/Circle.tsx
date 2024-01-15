const pi = () => {
    return 3.14
}

export const Square = () => {
    return(
        <div className="w-50 h-50 bg-orange-700 text-white">
            Quadradin
        </div>
    )
}

export const Circle = () => {
    return(
        <div className="w-50 h-50 bg-orange-700 text-white rounded-full">
            <h2>Circulo {pi()}</h2>
        </div>
    )
}