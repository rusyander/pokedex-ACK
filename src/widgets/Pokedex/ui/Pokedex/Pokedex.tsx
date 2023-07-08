import { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Pokedex.module.scss';
import { Pagination } from 'features/pagination';
import { Filter } from 'features/filter';
import { Search } from 'features/search';
import { PokemonList } from 'features/pokemonList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  countSelector,
  dataResultsSelector,
  disableSelector,
  errorSelector,
  fullInfoSelector,
  isLoadingSelector,
  nextSelector,
  pageCountSelector,
  previousSelector,
  searchSelector,
  urlSelector,
} from '../../model/selectors/poskedSelectors';
import { fetchPokedexData } from '../../model/servisec/fetchData';
import { PokedexSliceActions } from '../../model/slice/pokedexSlice';
import { fetchPokedexFullInfo } from '../../model/servisec/fetchFullInfo';
import { VStack } from 'shared/ui/Stack';

interface PokedexProps {
  className?: string;
}

export const Pokedex = memo((props: PokedexProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const dataResults = useSelector(dataResultsSelector);
  const fullInfo = useSelector(fullInfoSelector);

  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const count = useSelector(countSelector);
  const pageCount = useSelector(pageCountSelector);
  const search = useSelector(searchSelector);
  const next = useSelector(nextSelector);
  const previous = useSelector(previousSelector);
  const disable = useSelector(disableSelector);
  const url = useSelector(urlSelector);

  const addUrl = (url: string) => {
    dispatch(PokedexSliceActions.setUrl(url));
  };

  const addSearch = (search: string) => {
    dispatch(PokedexSliceActions.setSearch(search));
  };

  const pokedexCount = (pageCount: number) => {
    dispatch(PokedexSliceActions.setCount(pageCount));
    pokeFunc();
  };

  const pokeFunc = async () => {
    dispatch(fetchPokedexData());
    if (dataResults) {
      setTimeout(() => {
        dispatch(fetchPokedexFullInfo());
      }, 100);
    }
  };

  useEffect(() => {
    pokeFunc();
  }, [url]);

  // ------------------------------ Filter ------------------------------

  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });
  const [filteredData, setFilteredData]: any = useState();

  const handleCheckbox = (e: any) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = fullInfo.filter((pokemon: any) =>
        pokemon.types.map((type: any) => type.type.name).includes(e.target.name)
      );
      // setFilteredData([...fullInfo, ...filteredResults]);
      setFilteredData(filteredResults);
      console.log('filteredResults1111', filteredResults);
    } else {
      setFilteredData(fullInfo);
    }
  };

  return (
    <VStack gap="16" className={classNames(cls.pokedex, {}, [className])}>
      <div className={cls.content}>
        <Search searchInput={search} setSearchInput={addSearch} />
        <Filter handleCheckbox={handleCheckbox} />
        <PokemonList
          // pokeData={fullInfo}
          pokeData={filteredData === undefined ? fullInfo : filteredData}
          searchInput={search}
          isLoading={isLoading}
          pageCount={pageCount}
        />
      </div>
      <Pagination
        disable={disable}
        nextUrl={next}
        prevUrl={previous}
        setUrl={addUrl}
        pageSizeElement={pageCount}
        setPageSizeElement={pokedexCount}
        tatalCount={count}
        pokeFunc={pokeFunc}
      />
    </VStack>
  );
});
