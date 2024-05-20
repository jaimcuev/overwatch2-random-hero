import { IHero } from "../model";

interface HeroProps {
  hero: IHero;
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img 
        src={hero.portrait} 
        alt={hero.name} 
        className="border-2 rounded-md w-[150px] h-[150px] sm:w-[260px] sm:h-[260px]" />
      <div className="text-center">
        <h2 className="font-bidNoodleToo text-6xl">{hero.name}</h2>
      </div>
    </div>
  );
}

export default Hero;