import { Suspense } from 'react';
import { classNames } from '../shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';

export default function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={''}>
        <div className="content-page">
          <MainPage />
        </div>
      </Suspense>
    </div>
  );
}
