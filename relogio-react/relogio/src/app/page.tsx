
const dataAtual = new Date();

export default function Home() {
  return (
    <>
    <div className="container">
      <div className="box">
        <h1>{dataAtual.getHours()+":"+dataAtual.getMinutes()}</h1>
        <p>Testando uma aplicação completamente feita em React</p>
      </div>
    </div>
    </>
  )
}
