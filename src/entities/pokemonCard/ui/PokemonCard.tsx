import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PokemonCard.module.scss';
import { Card } from 'shared/ui/Card/Card';

interface PokemonCardProps {
  className?: string;
  pockemon: any;
  openPokeInfo: (value: any) => void;
}

export const PokemonCard = memo((props: PokemonCardProps) => {
  const { className, pockemon, openPokeInfo } = props;

  return (
    <div className={classNames(cls.PokemonCard, {}, [className])}>
      <Card className={cls.card}>
        <div
          className={cls.card}
          key={pockemon?.id}
          onClick={() => openPokeInfo(pockemon)}
        >
          <img src={pockemon?.sprites?.front_default} alt={pockemon?.name} />
          <div>
            <h5>{pockemon?.name}</h5>
          </div>
        </div>
      </Card>
    </div>
  );
});
