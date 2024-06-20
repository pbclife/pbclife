import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useState } from 'react';

const GoToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const GoToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }


  const listenToScroll = () => {
    const downScroll = document.body.scrollTop || document.documentElement.scrollTop
    const heightToHidden = 250;
    if (downScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  }, [])

  return (
    <>
      {isVisible && (
        <div className='top-btn fixed flex justify-center items-center text-2xl font-normal w-12 h-12 text-white bg-[#DC4A78] rounded-full bottom-12 right-20 z-[999] cursor-pointer md: bottom-4 right-4' onClick={GoToBtn}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      )};
      </>
  );
};

export default GoToTop;