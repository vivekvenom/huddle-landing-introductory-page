import bgDesktop from "./assets/images/bg-desktop.svg";
import bgMobile from "./assets/images/bg-mobile.svg";
import desktopMobile from "./assets/images/illustration-mockups.svg";
import Logo from "./assets/images/logo.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const App = () => {
  return (
    <main className="h-[100vh] space-y-12 bg-violet bg-[url('./assets/images/bg-mobile.svg')] bg-cover bg-center bg-no-repeat p-6 md:space-y-9 md:bg-[url('./assets/images/bg-desktop.svg')] md:p-8">
      <header className="md:mx-auto md:max-w-[1200px]">
        <img className="w-28 md:w-auto" src={Logo} alt="" />
      </header>
      <section className="space-y-10 text-center md:mx-auto md:flex md:max-w-[1200px] md:gap-10">
        <div className="flex justify-center md:w-1/2 md:justify-start">
          <img className="w-64 md:w-full" src={desktopMobile} alt="" />
        </div>
        <div className="space-y-4 text-white md:flex md:w-1/2 md:flex-col md:space-y-6 md:text-left">
          <h1 className="font-poppins text-2xl font-semibold md:text-3xl/relaxed lg:text-4xl/relaxed">
            Build The Community Your Fans Will Love
          </h1>
          <p className="opacity-98 font-openSans text-base font-extralight opacity-90">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <button className="rounded-3xl bg-white px-16 py-1.5 text-center text-sm text-violet hover:bg-magenta hover:text-white md:w-40 md:px-10 md:py-2 md:text-base">
            Register
          </button>
        </div>
      </section>
      <footer className="md:max-w-[1200px]">
        <ul className="flex justify-center space-x-4 md:justify-end">
          <li>
            <FaFacebookF className="h-8 w-8 cursor-pointer rounded-full border-[1px] border-white p-2 text-white hover:bg-white hover:text-violet" />
          </li>
          <li>
            <FaInstagram className="h-8 w-8 cursor-pointer rounded-full border-[1px] border-white p-2 text-white hover:bg-white hover:text-violet" />
          </li>
          <li>
            <FaTwitter className="h-8 w-8 cursor-pointer rounded-full border-[1px] border-white p-2 text-white hover:bg-white hover:text-violet" />
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default App;
