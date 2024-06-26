import Image from 'next/image';
import './style.css';

export default function ProfileCard() {
  return (
    <div className='flex flex-col min-h-screen body-styles'>
      <main className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex-1">
        <div className="shadow-md rounded-lg mt-[200px] bg-white max-w-[340px] max-h-[428px] mx-auto pt-6 pb-6 pl-4 pr-4">
          <div>
            <div className='flex justify-center items-center'>
              <Image 
                  src="/gfe/testimonial-card/profile-thumbnail.png" 
                  width={64} 
                  height={64}
                  alt="Image of profile author"
              />
            </div>
            <div className='mt-6 mb-6'>
              <div className="text-xl font-medium mb-1 line-clamp-1 text-neutral-900 text-center">Sarah Dole</div>
              <div className="text-sm font-normal line-clamp-1 text-neutral-600 text-center">Front End Engineer @ Microsoft</div>
            </div>
          </div>
          <div className="text-base font-normal mt-6 line-clamp-5 text-neutral-600 text-center mb-10">
            I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
          </div>
          <div>
            <button className='grid place-content-center box-border w-77 h-11 text-base font-medium text-white bg-indigo-700 pl-4 pr-4 pt-2.5 pb-2.5 w-[100%] rounded-md hover:bg-indigo-900 focus:bg-indigo-900 focus:border-4 disabled:bg-neutral-300 disabled:text-neutral-600'>Contact me</button>
            <div className='mt-6 flex justify-center gap-4'>
              <button className='grid place-items-center box-border w-9 h-9 p-1 hover:bg-zinc-50 hover:rounded-md focus:rounded-md focus:bg-zinc-50 focus:border-4 focus:border-indigo-100'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0008 1.66666C5.39665 1.66666 1.66748 5.39583 1.66748 10C1.66748 13.6875 4.0529 16.8021 7.3654 17.9062C7.78206 17.9792 7.93831 17.7292 7.93831 17.5104C7.93831 17.3125 7.9279 16.6562 7.9279 15.9583C5.83415 16.3437 5.29248 15.4479 5.12581 14.9792C5.03206 14.7396 4.62581 14 4.27165 13.8021C3.97998 13.6458 3.56331 13.2604 4.26123 13.25C4.91748 13.2396 5.38623 13.8542 5.54248 14.1042C6.29248 15.3646 7.4904 15.0104 7.96956 14.7917C8.04248 14.25 8.26123 13.8854 8.50083 13.6771C6.64665 13.4687 4.70915 12.75 4.70915 9.5625C4.70915 8.65625 5.03206 7.90625 5.56331 7.32291C5.47998 7.11458 5.18831 6.26041 5.64665 5.11458C5.64665 5.11458 6.34456 4.89583 7.93831 5.96875C8.605 5.78125 9.31333 5.6875 10.0217 5.6875C10.73 5.6875 11.4383 5.78125 12.105 5.96875C13.6987 4.88541 14.3967 5.11458 14.3967 5.11458C14.855 6.26041 14.5633 7.11458 14.48 7.32291C15.0112 7.90625 15.3342 8.64583 15.3342 9.5625C15.3342 12.7604 13.3862 13.4687 11.5321 13.6771C11.8342 13.9375 12.0946 14.4375 12.0946 15.2187C12.0946 16.3333 12.0842 17.2292 12.0842 17.5104C12.0842 17.7292 12.2404 17.9896 12.6571 17.9062C16.0492 16.7611 18.3332 13.5802 18.3342 10C18.3342 5.39583 14.605 1.66666 10.0008 1.66666Z" fill="#4338CA"/>
              </svg>
              </button>
              <button className='grid place-items-center box-border w-9 h-9 p-1 hover:bg-zinc-50 hover:rounded-md focus:rounded-md focus:bg-zinc-50 focus:border-4 focus:border-indigo-100'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2802 15.2825H13.0589V11.8018C13.0589 10.9718 13.0421 9.90375 11.9014 9.90375C10.7433 9.90375 10.5664 10.8069 10.5664 11.7406V15.2825H8.34517V8.125H10.4789V9.10058H10.5077C10.8058 8.53808 11.5308 7.94437 12.6139 7.94437C14.8646 7.94437 15.2808 9.42567 15.2808 11.3538L15.2802 15.2825ZM5.83645 7.14562C5.12145 7.14562 4.54707 6.56687 4.54707 5.855C4.54707 5.14375 5.12207 4.56563 5.83645 4.56563C6.54895 4.56563 7.12645 5.14375 7.12645 5.855C7.12645 6.56687 6.54832 7.14562 5.83645 7.14562ZM6.9502 15.2825H4.7227V8.125H6.9502V15.2825ZM16.3914 2.5H3.6077C2.99582 2.5 2.50082 2.98375 2.50082 3.58063V16.4194C2.50082 17.0168 2.99582 17.5 3.6077 17.5H16.3896C17.0008 17.5 17.5008 17.0168 17.5008 16.4194V3.58063C17.5008 2.98375 17.0008 2.5 16.3896 2.5H16.3914Z" fill="#4338CA"/>
              </svg>
              </button>
              <button className='grid place-items-center box-border w-9 h-9 p-1 hover:bg-zinc-50 hover:rounded-md focus:rounded-md focus:bg-zinc-50 focus:border-4 focus:border-indigo-100'>
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.85675 0.66748C10.7946 0.66903 11.2698 0.673989 11.6805 0.686214L11.8422 0.691506C12.0291 0.698147 12.2134 0.706481 12.4357 0.716897C13.3224 0.757864 13.9273 0.898147 14.4586 1.1044C15.0078 1.3162 15.4717 1.60231 15.9349 2.06551C16.3974 2.5287 16.6836 2.99398 16.8961 3.5419C17.1016 4.07245 17.2419 4.67801 17.2836 5.56481C17.2935 5.78703 17.3015 5.97136 17.3081 6.15824L17.3133 6.31997C17.3255 6.7306 17.3311 7.20591 17.3328 8.14375L17.3335 8.76516C17.3336 8.84108 17.3336 8.91942 17.3336 9.00025L17.3335 9.23533L17.333 9.85675C17.3314 10.7946 17.3265 11.2698 17.3142 11.6805L17.3089 11.8422C17.3023 12.0291 17.294 12.2134 17.2836 12.4357C17.2426 13.3224 17.1016 13.9273 16.8961 14.4586C16.6842 15.0078 16.3974 15.4717 15.9349 15.9349C15.4717 16.3974 15.0057 16.6836 14.4586 16.8961C13.9273 17.1016 13.3224 17.2419 12.4357 17.2836C12.2134 17.2935 12.0291 17.3015 11.8422 17.3081L11.6805 17.3133C11.2698 17.3255 10.7946 17.3311 9.85675 17.3328L9.23533 17.3335C9.15941 17.3336 9.08108 17.3336 9.00025 17.3336L8.76516 17.3335L8.14375 17.333C7.20591 17.3314 6.7306 17.3265 6.31997 17.3142L6.15824 17.3089C5.97136 17.3023 5.78703 17.294 5.56481 17.2836C4.67801 17.2426 4.07384 17.1016 3.5419 16.8961C2.99328 16.6842 2.5287 16.3974 2.06551 15.9349C1.60231 15.4717 1.3169 15.0057 1.1044 14.4586C0.898147 13.9273 0.758564 13.3224 0.716897 12.4357C0.706997 12.2134 0.698922 12.0291 0.692381 11.8422L0.687139 11.6805C0.674947 11.2698 0.669389 10.7946 0.667589 9.85675L0.66748 8.14375C0.66903 7.20591 0.673989 6.7306 0.686214 6.31997L0.691506 6.15824C0.698147 5.97136 0.706481 5.78703 0.716897 5.56481C0.757864 4.67731 0.898147 4.07315 1.1044 3.5419C1.3162 2.99328 1.60231 2.5287 2.06551 2.06551C2.5287 1.60231 2.99398 1.3169 3.5419 1.1044C4.07315 0.898147 4.67731 0.758564 5.56481 0.716897C5.78703 0.706997 5.97136 0.698922 6.15824 0.692381L6.31997 0.687139C6.7306 0.674947 7.20591 0.669389 8.14375 0.667589L9.85675 0.66748ZM9.00025 4.83356C6.69781 4.83356 4.83356 6.69984 4.83356 9.00025C4.83356 11.3027 6.69984 13.1669 9.00025 13.1669C11.3027 13.1669 13.1669 11.3006 13.1669 9.00025C13.1669 6.69781 11.3006 4.83356 9.00025 4.83356ZM9.00025 6.50023C10.381 6.50023 11.5002 7.61908 11.5002 9.00025C11.5002 10.381 10.3813 11.5002 9.00025 11.5002C7.6195 11.5002 6.50023 10.3813 6.50023 9.00025C6.50023 7.6195 7.61908 6.50023 9.00025 6.50023ZM13.3752 3.58356C12.8008 3.58356 12.3336 4.05015 12.3336 4.62452C12.3336 5.19889 12.8002 5.6662 13.3752 5.6662C13.9496 5.6662 14.4169 5.19961 14.4169 4.62452C14.4169 4.05015 13.9488 3.58284 13.3752 3.58356Z" fill="#4338CA"/>
              </svg>
              </button>
              <button className='grid place-items-center box-border w-9 h-9 p-1 hover:bg-zinc-50 hover:rounded-md focus:rounded-md focus:bg-zinc-50 focus:border-4 focus:border-indigo-100'>
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1707 0.875H16.9273L10.9048 7.75833L17.9898 17.125H12.4423L8.09733 11.4442L3.12569 17.125H0.36736L6.80903 9.7625L0.0123596 0.875H5.70069L9.62816 6.0675L14.1707 0.875ZM13.2032 15.475H14.7307L4.87069 2.43833H3.23153L13.2032 15.475Z" fill="#4338CA"/>
              </svg>
              </button>
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