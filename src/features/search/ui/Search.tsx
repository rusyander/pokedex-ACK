import { ChangeEvent, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Search.module.scss';

interface SearchProps {
  className?: string;
  searchInput: string;
  setSearchInput: (value: string) => void;
}

export const Search = memo((props: SearchProps) => {
  const { className, setSearchInput, searchInput } = props;
  const searchPokemon = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className={classNames(cls.Search, {}, [className])}>
      <input
        className={cls.input}
        type="text"
        value={searchInput}
        onChange={searchPokemon}
        placeholder="Search"
      />
    </div>
  );
});
