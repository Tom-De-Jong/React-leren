import './App.css'
import { Top10 } from "./top10";


function App() {

  let top10 = [
    { title: "Koffie", desc: "De brandstof voor elke productieve coding sessie" },
    { title: "Dark Mode", desc: "Want licht thema is pijn aan je ogen" },
    { title: "Snelle WiFi", desc: "Niets zo frustrerend als trage internet tijdens deployen" },
    { title: "Stack Overflow", desc: "De redder in nood bij vage errors" },
    { title: "Git", desc: "Versiebeheer dat je project én je leven redt" },
    { title: "VS Code", desc: "De favoriete editor van bijna elke web dev" },
    { title: "CSS Tricks", desc: "Voor wanneer flexbox weer eens niet meewerkt" },
    { title: "Een tweede monitor", desc: "Meer scherm = meer productiviteit" },
    { title: "Meme breaks", desc: "Even lachen tussen het debuggen door" },
    { title: "Succesvolle deploy op vrijdag", desc: "Zonder dat alles crasht" }
  ]

  // let list = [];

  // for (let i = 0; i < top10.length; i++) {
  //   const element = top10[i];
  //   list.push(

  //     <Top10 title={top10[i].title} desc={top10[i].desc} />

  //   )
  // }

  let list = top10.map((item, index) =>{
    return <Top10 title={top10[index].title} desc={top10[index].desc} />
})


  return (
    <>


      <section className="section">
        <h2>Top 10 dingen met ai testdata</h2>

        <ol>
          
          {list}


        </ol>
      </section>


    </>
  )
}

export default App
