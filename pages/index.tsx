import Link from 'next/link';
import Layout from '../components/Layouts/Layout';

const IndexPage = () => (
  <Layout title="Home | Quote App">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage;
