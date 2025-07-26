import Typography from "@/components/typography";

export default function Page() {
  return (
    <main className="min-h-[calc(100vh-250px-72px)] bg-white">
      <div className="relative h-[650px] bg-[url('/stories/desktop/moon-of-appalacia.jpg')] bg-cover bg-center">
        <div className="absolute top-1/2 -translate-y-1/2 left-[120px] max-w-[425px]">
          <Typography variant="h4" className="text-white">Last month&#39;s featured story</Typography>
          <Typography variant="h1" className="text-white mt-6 mb-16">Hazy full moon of appalachia</Typography>
          <p className="text-white"><span className="opacity-75">March 2nd 2020</span> by John Appleseed</p>
          <Typography className="text-white opacity-60 my-6">The dissected plateau area, while not actually made up of geological mountains, is popularly called &#34;mountains,&#34; especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</Typography>
          <p className="flex items-center uppercase font-bold text-[12px] tracking-[2px] text-white">Read story
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14" className="ml-4">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
              </g>
            </svg>
          </p>
        </div>
      </div>
      <section className="w-full grid grid-cols-4">
        {stories.map((story) => (
          <div 
            key={story.title} 
            className="relative bg-cover bg-center h-[500px]"
            style={{ backgroundImage: `url(${story.image})` }}
          >
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <p className="font-normal text-[13px] text-white">{story.date}</p>
            <h4 className="font-bold text-[18px] leading-[25px] text-white my-1">{story.title}</h4>
            <p className="font-normal text-[13px] text-white">by {story.author}</p>
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
        ))}
      </section>
    </main>
  );
}

const stories = [
  {
    image: "/stories/desktop/mountains.jpg",
    title: "The Mountains", 
    author: "John Appleseed",
    date: "April 16th 2020",
  },
  {
    image: "/stories/desktop/cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    date: "April 14th 2020",
  },
  {
    image: "/stories/desktop/18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    date: "April 11th 2020",
  },
  {
    image: "/stories/desktop/architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
    date: "April 9th 2020",
  },
  {
    image: "/stories/desktop/world-tour.jpg",
    title: "World Tour 2019",
    author: "Timothy Wagner",
    date: "April 7th 2020",
  },
  {
    image: "/stories/desktop/unforeseen-corners.jpg",
    title: "Unforeseen Corners",
    author: "William Malcolm",
    date: "April 3rd 2020",
  },
  {
    image: "/stories/desktop/king-on-africa.jpg",
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    date: "March 29th 2020",
  },
  {
    image: "/stories/desktop/trip-to-nowhere.jpg",
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    date: "March 21st 2020",
  },
  {
    image: "/stories/desktop/rage-of-the-sea.jpg",
    title: "Rage of The Sea",
    author: "Mohammed Aziz",
    date: "March 19th 2020",
  },
  {
    image: "/stories/desktop/running-free.jpg",
    title: "Running Free",
    author: "Michelle",
    date: "March 16th 2020",
  },
  {
    image: "/stories/desktop/behind-the-waves.jpg",
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    date: "March 11th 2020",
  },
  {
    image: "/stories/desktop/calm-waters.jpg",
    title: "Calm Waters",
    author: "Samantha Brooke",
    date: "March 9th 2020",
  },
  {
    image: "/stories/desktop/milky-way.jpg",
    title: "The Milky Way",
    author: "Benjamin Cruz",
    date: "March 5th 2020",
  },
  {
    image: "/stories/desktop/dark-forest.jpg",
    title: "Night at The Dark Forest",
    author: "Mohammed Abdul",
    date: "March 4th 2020",
  },
  {
    image: "/stories/desktop/somwarpet.jpg",
    title: "Somwarpet's Beauty",
    author: "Michelle",
    date: "March 1st 2020",
  },
  {
    image: "/stories/desktop/land-of-dreams.jpg",
    title: "Land of Dreams",
    author: "William Malcolm",
    date: "February 25th 2020",
  }
]
