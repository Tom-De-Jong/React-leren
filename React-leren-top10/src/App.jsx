import './App.css'
import { Top10 } from "./top10";


function App() {
  return (
    <>
     

        <section className="section">
          <h2>Top 10 dingen</h2>

          <ol>
            <Top10 title="koffie"/>
            <Top10 title="bier"/>
          </ol>
        </section>

      
    </>
  )
}

export default App
