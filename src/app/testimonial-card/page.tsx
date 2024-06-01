import Image from 'next/image';
import './style.css';

export default function TestimonialCard() {
  return (
    <div className='flex flex-col min-h-screen body-styles'>
      <main className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex-1">
        <div className="shadow-md rounded-lg mt-[200px] bg-white max-w-[340px] max-h-[233px] mx-auto p-6">
          <div style={{ display: "flex" }}>
            <Image 
              src="/gfe/testimonial-card/profile-thumbnail.png" 
              width={48} 
              height={48}
              className="mr-4"
              alt="Image of testimonial author"
            />
            <div>
              <div className="text-lg font-semibold mb-px line-clamp-1 text-neutral-900">Sarah Dole</div>
              <div className="text-sm font-normal line-clamp-1 text-neutral-600">@sarahdole</div>
            </div>
          </div>
          <div className="text-base mt-4 line-clamp-5 text-neutral-600">
            I&apos;ve been searching for high-quality abstract images for my design projects, 
            and I&apos;m thrilled to have found this platform. The variety and depth of creativity are astounding!
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