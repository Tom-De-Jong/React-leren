import './App.css'
import { listItem } from "./top10";


function App() {
return(
  <>
  <div className="section">
    <h1 className='header'>Mijn top 10 dingen</h1>
    <ol className='list'>
      <listItem>Programmeren</listItem>
      <listItem>Volleybal</listItem>
      <listItem>Zwemmen</listItem>
      <listItem>Eten</listItem>
      <listItem>Vrienden</listItem>
      <listItem>Webdev</listItem>
      <listItem>random</listItem>
      <listItem>ik weet het</listItem>
      <listItem>niet</listItem>
      <listItem>meer</listItem>
    </ol>
  </div>
  </>
)
}

export default App
