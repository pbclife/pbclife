import Footer from '@components/footer';
import Header from '@components/header';
import Menu from '@components/menu';
import Head from '@utilities/Head';

import Script from 'next/script';
import type { ComponentProps, FC } from 'react';

export type LayoutProps = ComponentProps<'div'> & {
  title?: string;
  description?: string;
};

const Layout: FC<LayoutProps> = ({
  title,
  description,
  className,
  ...props
}) => {
  return (
    <>
      <Head title={title} description={description} />
      <section className="z-0">
        <Header />
        {/* Menu  */}
        <div className="sticky top-0 z-10">
          <Menu />
        </div>
        {/* outlet */}
        <div className={`bg-skin-base ${className || ``}`} {...props} />
        <Footer />
      </section>
    </>
  );
};

export default Layout;
