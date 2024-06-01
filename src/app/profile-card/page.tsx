import Image from 'next/image';
import './style.css';

export default function ProfileCard() {
  return (
    <div className='flex flex-col min-h-screen body-styles'>
      <main className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex-1">
        <div className="shadow-md rounded-lg mt-[200px] bg-white max-w-[340px] max-h-[428px] mx-auto pt-6 pb-6 pl-4 pr-4">
          <div>
            <div style={{ display: 'flex', justifyContent:'center' }}>
              <Image 
                  src="/gfe/testimonial-card/profile-thumbnail.png" 
                  width={48} 
                  height={48}
                  className="mr-4"
                  alt="Image of testimonial author"
              />
            </div>
            <div className='mt-6 mb-6'>
              <div className="text-xl font-medium mb-1 line-clamp-1 text-neutral-900 text-center">Sarah Dole</div>
              <div className="text-sm font-normal line-clamp-1 text-neutral-600 text-center">@sarahdole</div>
            </div>
          </div>
          <div className="text-base mt-4 line-clamp-5 text-neutral-600 text-center mb-10">
            I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
          </div>
          <div>
            <button className='text-base font-medium text-white bg-indigo-700 pt-4 pb-4 pl-2.5 pr-2.5 w-[100%] rounded-md'>Contact me</button>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
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