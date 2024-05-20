import { useState } from "react"
import { IHero } from "../model"

interface useRandomHeroProps {
  heroes: IHero[]
}

const useRandomHero = ({ heroes }: useRandomHeroProps) => {
  const [heroesByRole, setHeroesByRole] = useState<IHero[]>(heroes)
  const [randomHero, setRandomHero] = useState<IHero | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const fetchHeroesByRole = (role: string): IHero[] => {
    return heroes.filter(hero => hero.role === role)
  }

  const random = async (role: string) => {
    setIsLoading(true)
    setRandomHero(null)
    setHeroesByRole(fetchHeroesByRole(role))
    setTimeout(() => {
      setIsLoading(false)
      const heroesByRole = fetchHeroesByRole(role)
      const randomIndex = Math.floor(Math.random() * heroesByRole.length)
      setRandomHero(heroesByRole[randomIndex])
    }, 500)
  }

  return { randomHero, heroesByRole, isLoading, random }
}

export default useRandomHero