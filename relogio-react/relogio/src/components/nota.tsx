type Props = {
    heart: number
}

export const HeartScore = ({heart}: Props) =>{

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