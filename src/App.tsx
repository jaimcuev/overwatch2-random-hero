import { useState } from "react"

import heroesData from "./data/heroes.json"
import rolesData from "./data/roles.json"

import { IRole } from "./model"

import useRandomHero from "./hooks/useRandomHero"
import LoadingHero from "./components/LoadingHero"
import Hero from "./components/Hero"
import Roles from "./components/Roles"
import Logo from "./components/Logo"
import Button from "./components/Button"

function App() {
  const [roles] = useState<IRole[]>(rolesData)
  const { heroesByRole, isLoading, random, randomHero } = useRandomHero({ heroes: heroesData })

  return (
    <div 
      className="flex flex-col items-center justify-center h-dvh w-screen gap-5 sm:gap-10 text-white font-futurano text-md p-5"
      style={{ background: 'radial-gradient(50% 252.84% at 50% 49.94%, #242a42 7.27%, #121524 100%)' }}>
      <Logo />
      <Roles 
        onClickRole={random}
        isLoading={isLoading}
        roles={roles} />
      { isLoading && <LoadingHero heroes={heroesByRole} /> }
      { randomHero && (
        <div className="flex flex-col items-center justify-center gap-5">
          <Hero hero={randomHero} />
          <Button onClick={() => random(randomHero.role)} kind="primary">
            Try again
          </Button>
        </div>
      ) }
    </div>
  )
}

export default App
