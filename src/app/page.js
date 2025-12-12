import { Appetizerss } from "./Appetizerss";
import Footer from "./Footer";
import { Header } from "./Header";
import { Saladss } from "./Saladss";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="w-full">
          <img src="/Bigphoto.png" alt="Big photo" className="w-full h-auto" />
        </div>

        <div className="flex flex-col gap-16 py-10">
          <Appetizerss />
          <Saladss />
        </div>

        <Footer />
      </div>
    </>
  );
}
