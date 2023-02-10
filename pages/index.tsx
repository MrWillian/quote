import Link from 'next/link';
import Layout from '../components/Layout';
import { useSession, signIn, signOut } from "next-auth/react";

const IndexPage = () => (
  <Layout title="Home | Quote App">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage;
