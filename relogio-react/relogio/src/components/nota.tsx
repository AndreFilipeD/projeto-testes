type Props = {
    heart: number;
    hheart: number;
}

type emoji = {

}

export const HeartScore = ({heart}:Props) =>{

    if(heart>5){heart = 5};
    if(heart<0){heart = 0};

    const intHeart = Math.floor(heart)

    return(
        <>
            <p>{heart}
            {'🧡'.repeat(intHeart)}
            {'🖤'.repeat(5 - intHeart)}
            </p>
        </>
    )
}

export const HardHeartScore = ({hheart}:Props) => {

    if(hheart > 5){hheart = 5}
    if(hheart < 0){hheart = 0}

const solidHeart: number = Math.floor(hheart)

const emoji: string[] = ['😠','😟','😐','🙂','😁']

    return (
        <>
        <p>{hheart}{hheart >= 1 ? emoji[solidHeart-1].repeat(solidHeart):''}{'😶'.repeat(5-solidHeart)}</p>
        
        </>
    )
    
}