import { memo, useCallback } from 'react';
import cls from './Pagination.module.scss';
import { Select } from 'shared/ui/Select/Select';
import { Button } from 'shared/ui/Button/Button';

interface PaginationProps {
  disable: boolean;
  setUrl: (value: string) => void;
  prevUrl: string;
  nextUrl: string;

  pageSizeElement: number;
  setPageSizeElement: (value: number) => void;
  tatalCount: number;
  pokeFunc: (value: number) => void;
}

const pageCountOptions = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
];

export const Pagination = memo((props: PaginationProps) => {
  const {
    disable,
    nextUrl,
    prevUrl,
    setUrl,
    pageSizeElement,
    setPageSizeElement,
    tatalCount,
    pokeFunc,
  } = props;

  const prevPage = () => {
    setUrl(prevUrl);
  };

  const nextPage = () => {
    setUrl(nextUrl);
  };

  return (
    <div className={cls.pagination}>
      <div className={cls.paginationElement}>
        <div>
          <Button
            theme="background"
            type="button"
            disabled={disable}
            onClick={prevPage}
          >
            Previous
          </Button>
          &nbsp;&nbsp;
          <Button theme="background" type="button" onClick={nextPage}>
            Next
          </Button>
        </div>
        <Select
          selectedItemForPage={pageSizeElement}
          setPageSizeElement={setPageSizeElement}
          options={pageCountOptions}
          isOpenPosition="top"
          totalCount={tatalCount}
          onPaginationPageChange={pokeFunc}
        />
      </div>
    </div>
  );
});
