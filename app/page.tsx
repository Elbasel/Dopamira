import Image from "next/image";
import { ReactNode } from "react";

const Home = (): ReactNode => {
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
