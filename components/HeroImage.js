import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p>Not sure where to go? Perfect.</p>
        <button
          className="text-purple-500 bg-white py-4 
        px-10 rounded-full shadow-md font-bold mt-4
         hover:shadow-xl hover:scale-105 transition duration-500"
        >
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
