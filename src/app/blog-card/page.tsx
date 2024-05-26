import Image from 'next/image';
import './style.css';

export default function BlogCard() {
  return (
    <div className='flex flex-col min-h-screen'>
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
          <div className='p-6'>
            <div>
              <button className='bg-green-50 text-green-700 pt-1 pb-1 pr-2 pl-2 rounded-full border border-green-200'>Interior</button>
              <div className='text-lg text-neutral-900 mt-2 font-bold'>Top 5 Living Room Aspirations</div>
            </div>
            <div className='mt-3'>
              <div className='text-neutral-600 text-base'>Curated vibrants colors for your living, make it pop & calm in the same time.</div>
              <button className='text-indigo-700 text-base mt-6 hover:text-indigo-800 disabled:text-neutral-600 focus:text-base focus:border-4 focus:border-indigo-100 focus:text-indigo-800'>Read more &#x2192;</button>
              {/* <button className='rounded-lg border-4 border-indigo-100 text-indigo-800'>Read more &#x2192;</button> */}
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