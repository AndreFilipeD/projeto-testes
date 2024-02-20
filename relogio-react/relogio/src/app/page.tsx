import { HeartScore, HardHeartScore } from "@/components/nota";

export default function Home() {

  const dataAtual = new Date();
  const hora = dataAtual.getHours()
  const min = dataAtual.getMinutes()
  var total: number = 3.7

  return (
    <>
    <div className="container">
      <div className="box">
        <h1>{hora+":"+min}</h1>
        <p>
          {hora >=0 && hora < 13 && 'BOM DIA 🔆'}
          {hora >=13 && hora < 18 && 'BOA TARDE 🌇'}
          {hora >=18 && hora <= 23 && 'BOA NOITE 🌆'}
        </p>
        
        <p>
        <hr></hr>
        NOTA easy
        </p>
        <p>
        {total}
        {total>=1?'🧡':'🖤'}
        {total>=2?'🧡':'🖤'}
        {total>=3?'🧡':'🖤'}
        {total>=4?'🧡':'🖤'}
        {total>=5?'🧡':'🖤'}
        </p>

        <p>
        <hr></hr>
        NOTA medium
        </p>

        <HeartScore heart = {2.8}/>

        <p>
        <hr></hr>
        NOTA hard
        </p>

        <HardHeartScore hheart = {4}/>

      </div>
    </div>
    </>
  )
}
