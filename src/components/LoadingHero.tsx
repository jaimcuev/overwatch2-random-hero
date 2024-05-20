import React, { useEffect, useState } from "react"
import Hero from "./Hero";
import { IHero } from "../model"

interface LoadingHeroProps {
  heroes: IHero[];
}

const LoadingHero: React.FC<LoadingHeroProps> = ({ heroes }) => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * heroes.length);
      setCurrentHeroIndex(randomIndex);
    }, 50); 
    return () => clearInterval(interval);
  }, [heroes]);

  return (
    heroes.map((hero, index) => (
      <div key={hero.key} 
        className={`animate-pulse ${index === currentHeroIndex ? 'block' : 'hidden'}`}>
        <Hero hero={hero} />
      </div>
    ))
  )

}

export default LoadingHero