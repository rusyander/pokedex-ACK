import { memo } from 'react';
import cls from './PokemonModal.module.scss';
import { Modal } from 'shared/ui/Modal';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface PokemonModalProps {
  className?: string;
  isModal: boolean;
  onCloseModal: () => void;
  pokemonElement: any;
  isLoading: boolean;
}

export const PokemonModal = memo((props: PokemonModalProps) => {
  const { isModal, onCloseModal, pokemonElement, isLoading } = props;

  return (
    <Modal isOpen={isModal} onClose={onCloseModal} lazy>
      {isLoading && (
        <VStack gap="16">
          <Skeleton width={150} height={20} />
          <Skeleton width={150} height={150} border="50%" />
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
        </VStack>
      )}
      <>
        <h1>{pokemonElement?.name}</h1>

        <img
          src={pokemonElement?.sprites?.front_default}
          className={cls.img}
          alt={pokemonElement?.name}
        />
        <p>Height : {pokemonElement?.height}</p>
        <p>Weight : {pokemonElement?.weight}</p>
      </>
    </Modal>
  );
});
