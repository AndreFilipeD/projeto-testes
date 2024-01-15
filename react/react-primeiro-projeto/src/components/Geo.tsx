import {Square} from './Square'
import {Circle} from './Circle'

const descricao: string = "Formas Geométricas Ok"

export const Geo = () => {
    return(
        <div>
            <h1>{descricao}</h1>
            <Square />
            <br/>
            <Circle />
        </div>
    )
}