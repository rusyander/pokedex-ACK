import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PokemonList.module.scss';
import { HStack } from 'shared/ui/Stack';
import { PokemonCard } from 'entities/pokemonCard';
import { PokemonModal } from 'entities/pokemonModal';
import { PokemonSkeleton } from './PokemonSkeleton';

interface PokemonListProps {
  className?: string;
  pokeData: any;
  searchInput: string;
  isLoading: boolean;
  pageCount: number;
}

export const PokemonList = memo((props: PokemonListProps) => {
  const { className, pokeData, searchInput, isLoading, pageCount } = props;
  const [pokemonElement, setPokemonElement]: any = useState();
  const [isModal, setIsModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModal(false);
  }, [setIsModal]);

  const onOpenModal = useCallback(() => {
    setIsModal(true);
  }, [setIsModal]);

  const openPokeInfo = async (res: any) => {
    onOpenModal();
    if (res) {
      setPokemonElement(res);
    }
  };

  return (
    <div className={classNames(cls.PokemonList, {}, [className])}>
      <HStack key={pokeData?.name} gap="16">
        {isLoading && (
          <div className={classNames(cls.skeletonList, {}, [className])}>
            {new Array(pageCount).fill(0).map((_, index) => (
              <PokemonSkeleton key={index} />
            ))}
          </div>
        )}
        {!isLoading &&
          pokeData
            ?.filter((item: any) => {
              if (searchInput === '') {
                return item;
              } else if (
                item?.name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return item;
              }
            })
            ?.map((pockemon: any) => {
              return (
                <PokemonCard
                  key={pockemon?.url}
                  pockemon={pockemon}
                  openPokeInfo={openPokeInfo}
                />
              );
            })}
      </HStack>

      <PokemonModal
        pokemonElement={pokemonElement}
        isModal={isModal}
        onCloseModal={onCloseModal}
        isLoading={isLoading}
      />
    </div>
  );
});
