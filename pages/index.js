import Head from "next/head";
import HeroImage from "../components/HeroImage";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, liveAnywherData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroImage />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl mb-6 font-semibold ">Explore Islands</h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl mt-4  mb-2 font-semibold py-8">
            Live Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywherData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img={"https://links.papareact.com/4cj"}
            title={"The gretest ourdoors"}
            description={"Wish to stay there"}
            buttonText={"Get Inspired"}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const liveAnywherData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return { props: { exploreData, liveAnywherData } };
}
