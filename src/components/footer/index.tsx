import Container from '@layouts/Container';
import Glow from '@utilities/Glow';
import GradientBG from '@utilities/GradientBg';
import Logo from '@utilities/Logo';
import StarUs from '@utilities/StarUs';
import colors from 'tailwindcss/colors';
import GoToTop from '../topbutton/GoToTop';
import FooterList from './FooterList';
import Slogun from './Slogun';

export default function Footer() {
  return (
    <footer className="relative z-0 border-t border-accent/90">
      <Glow className="!top-0 right-0 w-full max-w-6xl" />
      <div className="absolute inset-0 -z-10 bg-grid-slate-500/50 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.1),rgba(255,255,255,0))] "></div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-primary via-primary/90 to-primary/70 backdrop-blur-2xl"></div>
      <GradientBG
        className="absolute inset-0 -z-30 h-full w-full animate-bg-shift"
        colors={[
          colors.yellow[400],
          colors.teal[500],
          colors.purple[600],
          colors.pink[600],
        ]}
      />
      <Container className=" py-8 font-semibold text-skin-base">
        <div className="mb-4 flex flex-col xs:flex-row xs:items-center xs:justify-between">
          <Logo />
          <StarUs />
        </div>
        {/* Slogun & links */}
        <div className="flex flex-col-reverse gap-8 xs:flex-col sm:flex-row sm:items-start sm:justify-between sm:px-8">
          {/* sm:left */}
          <Slogun />
          {/* sm:right */}
          <FooterList />
        </div>
      </Container>
      <GoToTop/>
    </footer>
  );
}
