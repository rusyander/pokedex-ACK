import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = (props: PageProps) => {
  const { className, children } = props;

  return (
    <section className={classNames(cls.page, {}, [className])}>
      {children}
    </section>
  );
};
