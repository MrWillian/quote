import Layout from '../components/Layouts/Layout';
import { WriteDownContainer } from '../components';
import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('home.page_title')}>
      <div className="flex flex-col items-center justify-center pt-10">
        <div>
          <h1 className="font-black leading-normal tracking-widest uppercase text-8xl drop-shadow-lg shadow-black">
            {t('home.title')}
          </h1>
          <h4>{t('home.by')}<span className="font-bold opacity-75 animate-ping drop-shadow-lg">Quote App</span></h4>
        </div>
        <WriteDownContainer className="fixed right-0 w-full -bottom-40 animate-bounce" height={300} width={400} />
      </div>
    </Layout>
  );
}

export default IndexPage;
