import { ContributorPanel, Intro } from '@/components/home';
import Container from '@layouts/Container';
import Layout from '@layouts/Main';
import type { NextPage } from 'next';

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout className="relative z-0 overflow-hidden ">
      <div className="absolute inset-0 -z-10 backdrop-blur-xl bg-square-slate-500/10 [mask-image:linear-gradient(-90deg,rgba(255,255,255,0),white,rgba(255,255,255,0),rgba(255,255,255,0))]" />
      <Container className={`min-h-screen space-y-8 py-8`}>
        <Intro />
        <ContributorPanel />
      </Container>
    </Layout>
  );
};

export default Home;
