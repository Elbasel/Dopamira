import Image from "next/image";

export const Metadata = {
  title: "Dopamira Shop",
  description: "The one stop shop for her.",
};

const Home = () => {
  return (
    <main className="">
      <Image
        src="/dopamiraComingSoon.png"
        alt="coming soon logo"
        width={500}
        height={500}
        className="inline-block object-contain w-full h-full"
      />
    </main>
  );
};

export default Home;
