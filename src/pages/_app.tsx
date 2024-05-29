import DocumentationProvider from '@/context/DocumentationContext';
import HeaderProvider from '@/context/HeaderContext';
import ThemeProvider from '@/context/ThemeContext';
import useProgressBar from '@/hooks/useProgressBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Fira_Code, Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  display: 'block',
  subsets: ['latin'],
  variable: '--font-inter',
});
const firaCode = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export default function App({ Component, pageProps }: AppProps) {
  useProgressBar(`#0ea5e9`);
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <main className={`${inter.variable} ${firaCode.variable}`}>
        <ThemeProvider>
          <HeaderProvider>
            <DocumentationProvider>
              <Component {...pageProps} />
            </DocumentationProvider>
          </HeaderProvider>
        </ThemeProvider>
      </main>

      <Script src='https://unpkg.com/lucide@latest' />
    </>
  );
}
