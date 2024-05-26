import Image from 'next/image';
import './style.css';

export default function BlogCard() {
  return (
    <div className='flex flex-col min-h-screen body'>
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
              <button className='bg-green-50 text-green-700 pt-0.25 pb-0.25 pr-2 pl-2 rounded-full border border-green-200'>Interior</button>
              <div className='text-lg text-neutral-900 mt-2 font-bold'>Top 5 Living Room Aspirations</div>
            </div>
            <div className='mt-3'>
              <div className='text-neutral-600 text-base'>Curated vibrants colors for your living, make it pop & calm in the same time.</div>
              <button 
                className='text-indigo-700 text-base mt-6 hover:text-indigo-800 disabled:text-neutral-600 focus:text-base focus:border-4 focus:box-content focus:rounded-lg focus:border-indigo-100 focus:text-indigo-800'
                style={{ display: 'flex', alignItems: 'center' }}
              >
                Read more &nbsp;<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4764 6.16658L6.00637 1.69657L7.18487 0.518066L13.6667 6.99992L7.18487 13.4817L6.00637 12.3032L10.4764 7.83325H0.333374V6.16658H10.4764Z" fill="#4338CA"/>
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