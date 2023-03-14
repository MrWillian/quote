import Layout from '../components/Layouts/Layout';
import { WriteDownContainer } from '../components';

const IndexPage = () => (
  <Layout title="Início | Quote App">
    <div className="flex flex-col justify-center items-center pt-10">
      <div>
        <h1 className="text-8xl font-black uppercase tracking-widest leading-normal drop-shadow-lg shadow-black">Do Not Forget Anymore!</h1>
        <h4>by <span className="font-bold animate-ping opacity-75 drop-shadow-lg">Quote App</span></h4>
      </div>
      <WriteDownContainer className="fixed -bottom-40 z-90 h-1/2 w-full animate-bounce" />
    </div>
  </Layout>
)

export default IndexPage;
