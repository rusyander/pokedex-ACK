import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{'Произошла ошибка'}</p>
      <button onClick={reloadPage}>{'Обновить страницу'}</button>
    </div>
  );
});
