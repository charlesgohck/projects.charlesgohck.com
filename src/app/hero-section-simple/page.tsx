import Image from 'next/image';
import './style.css';

export default function HeroSectionSimple() {
  return (
    <div className='flex flex-col body-styles'>
      <main className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] p-4 h-screen">
        <div className='flex justify-center items-center pt-2 pb-2 bg-white rounded-md shadow-sm w-full h-full'>
          <div className='flex flex-wrap justify-center items-center lg:w-[1408px] lg:h-[718px] md:w-[736px] md:h-[938] sm:w-[343px] sm:h-[686px]'>
            <div id="hero-details" className='lg:w-[488px] lg:h-[324px] md:w-[704px] md:h-[252px] sm:w-[319px] sm:h-[260px]'>
              <div className='lg:text-6xl md:text-5xl sm:text-4xl font-semibold text-neutral-900 mb-6'>Well crafted abstract images</div>
              <div className='lg:text-xl md:text-xl sm:text-lg font-normal text-neutral-600 mb-16'>High quality abstract images for your projects, wallpaper and presentations.</div>
              <div className='md:inline-block sm:flex sm:justify-center'>
                <button className='lg:w-[175.5px] lg:h-[60px] md:w-[213px] md:h-[60px] sm:w-[151.5px] sm:h-[48px] lg:text-lg md:text-lg sm:text-base font-medium lg:mr-8 md:mr-2.5 sm:mr-2.5 pt-4 pb-4 pl-6 pr-6 rounded-md shadow-sm bg-white focus:border-4 focus:border-0.5 border-gray-300 focus:border-indigo-200 text-neutral-900 disabled:bg-slate-200 disabled:text-gray-400'>Learn more</button>
                <button className='lg:w-[175.5px] lg:h-[60px] md:w-[213px] md:h-[60px] sm:w-[151.5px] sm:h-[48px] lg:text-lg md:text-lg sm:text-base font-medium pt-4 pb-4 pl-6 pr-6 rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800 focus:border-4 focus:border-0.5 border-gray-300 focus:border-indigo-200 disabled:bg-slate-200 disabled:text-gray-400'>See pricing</button>
              </div>
            </div>
            <Image
              className='p-4 rounded-2xl lg:w-[696px] md:w-[704px] sm:w-[319px]'
              id='hero-image'
              src={"/gfe/hero-section-simple/prism.png"}
              alt={'Photo of prism image for hero section simple project'}
              priority
              width={696}
              height={526}
            />
          </div>
        </div>

        <div className="credits" data-gfe-screenshot-exclude="true">
          A challenge by&nbsp;
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
          >GreatFrontEnd Projects</a>. Built by&nbsp;
          <a
            href="https://www.greatfrontend.com/projects/u/charlesgohck"
            target="_blank"
          >charlesgohck</a>.
        </div>
      </main>
    </div>
  );
}