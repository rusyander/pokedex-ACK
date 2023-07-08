import { memo } from 'react';
import cls from './PokemonList.module.scss';

import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
interface PokemonSkeletonProps {
  className?: string;
}

export const PokemonSkeleton = memo((props: PokemonSkeletonProps) => {
  const { className } = props;
  return (
    <Card className={cls.card}>
      <VStack className={cls.cardSceleton} gap="16" align="center">
        <Skeleton
          className={cls.skeleton}
          height={70}
          width={70}
          border="50%"
        />
        <Skeleton className={cls.skeleton} height={20} width={97} />
      </VStack>
    </Card>
  );
});
