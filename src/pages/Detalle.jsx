import { useParams } from "react-router-dom";
import { usePokemonWithoutQuery } from "../hooks/usePokemon";
import { BarChart } from "@tremor/react";

export default function Detalle () {
  const { name } = useParams()
  const { isLoading, error, data: pokemonData } = usePokemonWithoutQuery('repoData', name)
  if (isLoading) {
    return <div id="loading">Loading...</div>
  }

  if (error) {
    return <div>No se encontro este pokemon, ¿no sera un pokemon legendario aun no descubierto? ...</div>
  }

  let chartdata = []
  pokemonData.stats.forEach((s, index)=>{
    const elemento = {
      name: s.stat.name,
      Stat: Number(s.base_stat),
    }
    chartdata.push(elemento)
  })

  return (
    <div className="flex flex-col w-full">
      <section>
        <h2 className="font-bold text-2xl justify-center text-center">{name}</h2>
        <div className="flex gap-12 justify-center">
          <div>
            <h6>Tipo</h6>
            {
              pokemonData.types.map(d=>{
                return <span key={"key-" + d.type.name} className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-900 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">{d.type.name}</span>
              })
            }
          </div>
          <div>
            <h5>Altura</h5>
            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-900 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">{
              Number(pokemonData.height)/10 + "M"
            }</span>
          </div>
          <div>
            <h5>Peso</h5>
            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-900 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">{
              Number(pokemonData.weight)/10+ "KG"
            }</span>
          </div>
        </div>
        <div className="flex justify-center">
          <img width="200" src={pokemonData.sprites.front_default} alt="front_default" />
          <img width="200" src={pokemonData.sprites.back_default} alt="back_default" />
        </div>
        <BarChart
          className="mt-6 max-w-xl m-auto"
          data={chartdata}
          index="name"
          categories={["Stat"]}
          colors={["blue"]}
          yAxisWidth={48}
          showXAxis
        />
      </section>
    </div>)
}
