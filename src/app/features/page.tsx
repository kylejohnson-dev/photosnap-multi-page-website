import Typography from "@/components/typography";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-250px-72px)] bg-white">
      <div className="w-full flex">
        <div className="grow grid place-content-center bg-black px-24">
          <div className="max-w-[387px]">
            <Typography variant="h1" className="text-white mb-[21px]">Features</Typography>
            <Typography className="text-white opacity-60">We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.</Typography>
          </div>
        </div>
        <Image 
          src="/features/desktop/hero.jpg"
          alt="Man holding a camera on a dock looking at the water."
          width={830}
          height={490}
          className="max-w-[830px]"
        />
      </div>
      <section className="w-full max-w-[1110px] grid grid-cols-3 gap-x-9 gap-y-24 bg-white mx-auto py-32">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center justify-end space-y-12">
            <Image 
              src={feature.icon}
              alt="Icon"
              width={72}
              height={72}
              aria-hidden="true"
            />
            <div className="space-y-4 mt-auto">
              <Typography variant="h3" className="text-center">{feature.title}</Typography>
              <Typography className="text-center opacity-60">{feature.description}</Typography>
            </div>
          </div>
        ))}
      </section>
      <div className="w-full h-[280px] bg-[url('/shared/desktop/bg-beta.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="max-w-[1110px] flex items-center justify-between mx-auto h-full">
          <Typography variant="h1" className="text-white max-w-[400px]">We&#39;re in beta. Get your invite today!</Typography>
          <p className="flex items-center uppercase font-bold text-[12px] tracking-[2px] text-white">Read story
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-4">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
              </g>
            </svg>
          </p>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "100% Responsive",
    description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    icon: "/features/desktop/responsive.svg"
  },
  {
    title: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    icon: "/features/desktop/no-limit.svg"
  },
  {
    title: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    icon: "/features/desktop/embed.svg"
  },
  {
    title: "Custom Domain",
    description: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    icon: "/features/desktop/custom-domain.svg"
  },
  {
    title: "Boost Your Exposure",
    description: "Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.",
    icon: "/features/desktop/boost-exposure.svg"
  },
  {
    title: "Drag & Drop Image",
    description: "Easily drag and drop your image and get beautiful shots every time. No over the top tooling to add friction to creating stories.",
    icon: "/features/desktop/drag-drop.svg"
  },
];
