import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  return (
    <section className="max-w-screen-xl h-screen m-auto">
      <Navbar />
      <main className="h-screen">
        <Hero />
        <Hero />
        <Hero />
      </main>
    </section>
  )
}

export default App