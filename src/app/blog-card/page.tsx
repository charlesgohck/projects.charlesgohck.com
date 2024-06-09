import Image from 'next/image';
import './style.css'

export default function BlogCard() {
  return (
    <div className="flex flex-col min-h-screen body-styles">
      <main className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex-1">
        <div className="shadow-md rounded-lg mt-[120px] bg-white w-[340px] h-[504px] mx-auto">
          <div style={{ width: "340px", height: "288px", overflow: "hidden" }} className='rounded-t-lg flex items-center justify-center'>
            <Image 
                src={"/gfe/blog-card/spacejoy-YqFz7UMm8qE-unsplash.jpg"} 
                alt={'Space joy living room aspirations example photo.'}
                priority
                width={340}
                height={288}
            />
          </div>
          <div className='pt-6 pb-6 pl-4 pr-4'>
            <div>
              <button className='bg-green-50 text-green-700 pt-0.25 pb-0.25 pr-2 pl-2 rounded-full border border-green-200 text-sm font-normal'>Interior</button>
              <div className='text-lg text-neutral-900 mt-2 font-semibold'>Top 5 Living Room Inspirations</div>
            </div>
            <div className='mt-3'>
              <div className='text-neutral-600 text-base font-medium'>Curated vibrants colors for your living, make it pop & calm in the same time.</div>
              <button 
                className='flex justify-between items-center box-border w-[114px] h-[24px] text-indigo-700 text-base font-medium mt-6 hover:text-indigo-800 disabled:text-neutral-600 focus:border-4 focus:rounded-lg focus:border-indigo-100'
              >
                <span className='w-[88px] h-[24px] text-base font-medium text-left'>Read more</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z" fill="#4338CA"/>
                </svg>
              </button>
              <br/>
              {/* <button className='text-base border-4 box-content rounded-lg border-indigo-100 text-indigo-800'>Read more &#x2192;</button> */}
            </div>
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