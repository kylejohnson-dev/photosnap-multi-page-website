import Typography from "@/components/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center sm:items-start bg-white">
      <div className="w-full flex">
        <div className="grow grid place-content-center bg-black px-24">
          <div className="max-w-[387px]">
            <Typography variant="h1" className="text-white mb-[21px]">Create and share your photo stories.</Typography>
            <Typography className="text-white">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</Typography>
            <a href="#" className="flex items-center uppercase font-bold text-[12px] leading-[2px] text-white mt-12">
              Get an invite
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-4">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <Image 
          src="/home/desktop/create-and-share.jpg"
          alt="Man holding a camera on a dock looking at the water."
          width={830}
          height={650}
          className="max-w-[830px]"
        />
      </div>
      <div className="w-full flex">
        <Image 
          src="/home/desktop/beautiful-stories.jpg"
          alt="Man holding a camera on a dock looking at the water."
          width={830}
          height={650}
          className="max-w-[830px]"
        />
        <div className="grow grid place-content-center bg-white px-24">
          <div className="max-w-[387px]">
            <Typography variant="h1" className="mb-[21px]">Beautiful stories every time</Typography>
            <Typography>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</Typography>
            <a href="#" className="flex items-center uppercase font-bold text-[12px] leading-[2px] text-black mt-12">
              View the stories
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-4">
                <g fill="none" fillRule="evenodd" stroke="#000">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="grow grid place-content-center bg-white px-24">
          <div className="max-w-[387px]">
            <Typography variant="h1" className="mb-[21px]">Designed for everyone</Typography>
            <Typography>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </Typography>
            <a href="#" className="flex items-center uppercase font-bold text-[12px] leading-[2px] text-black mt-12">
              View the stories
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-4">
                <g fill="none" fillRule="evenodd" stroke="#000">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <Image 
          src="/home/desktop/designed-for-everyone.jpg"
          alt="Man holding a camera on a dock looking at the water."
          width={830}
          height={650}
          className="max-w-[830px]"
        />
      </div>
      <section className="w-full h-[500px] grid grid-cols-4">
        <div className="relative bg-[url('/stories/desktop/mountains.jpg')] bg-cover bg-center h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h4 className="font-bold text-[18px] leading-[25px] text-white">The Mountains</h4>
            <p className="font-normal text-[13px] text-white">by John Appleseed</p>
            <span className="block w-full h-px bg-[#979797] mt-4 mb-5"></span>
            <p className="flex items-center uppercase font-bold text-[12px] tracking-[2px] text-white">Read story
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-auto">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                </g>
              </svg>
            </p>
          </div>
        </div>
        <div className="relative bg-[url('/stories/desktop/cityscapes.jpg')] bg-cover bg-center h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h4 className="font-bold text-[18px] leading-[25px] text-white">Sunset Cityscapes</h4>
            <p className="font-normal text-[13px] text-white">by Benjamin Cruz</p>
            <span className="block w-full h-px bg-[#979797] mt-4 mb-5"></span>
            <p className="flex items-center uppercase font-bold text-[12px] tracking-[2px] text-white">Read story
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-auto">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                </g>
              </svg>
            </p>
          </div>
        </div>
        <div className="relative bg-[url('/stories/desktop/18-days-voyage.jpg')] bg-cover bg-center h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h4 className="font-bold text-[18px] leading-[25px] text-white">18 Days Voyage</h4>
            <p className="font-normal text-[13px] text-white">by Alexei Borodin</p>
            <span className="block w-full h-px bg-[#979797] mt-4 mb-5"></span>
            <p className="flex items-center uppercase font-bold text-[12px] tracking-[2px] text-white">Read story
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-auto">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                </g>
              </svg>
            </p>
          </div>
        </div>
        <div className="relative bg-[url('/stories/desktop/architecturals.jpg')] bg-cover bg-center h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h4 className="font-bold text-[18px] leading-[25px] text-white">Architecturals</h4>
            <p className="font-normal text-[13px] text-white">by Samantha Brooke</p>
            <span className="block w-full h-px bg-[#979797] mt-4 mb-5"></span>
            <p className="flex items-center uppercase font-bold text-[12px] tracking-[2px] text-white">Read story
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-auto">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                </g>
              </svg>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1110px] flex items-center justify-center gap-x-7 mx-auto my-32">
        <div className="flex flex-col items-center space-y-12">
          <Image 
            src="/features/desktop/responsive.svg"
            alt="Responsive icon"
            width={72}
            height={72}
          />
          <div className="space-y-4">
            <Typography variant="h3" className="font-bold text-[18] text-center">100% Responsive</Typography>
            <Typography className="text-center">No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</Typography>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-12">
          <Image 
            src="/features/desktop/responsive.svg"
            alt="Responsive icon"
            width={72}
            height={72}
          />
          <div className="space-y-4">
            <Typography variant="h3" className="text-center">No Photo Upload Limit</Typography>
            <Typography className="text-center">Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</Typography>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-12">
          <Image 
            src="/features/desktop/responsive.svg"
            alt="Responsive icon"
            width={72}
            height={72}
          />
          <div className="space-y-4">
            <Typography variant="h3" className="text-center">Available to Embed</Typography>
            <Typography className="text-center">Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </Typography>
          </div>
        </div>
      </section>
    </main>
  );
}
