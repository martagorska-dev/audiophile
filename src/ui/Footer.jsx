import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className="relative bg-background-300 px-6 sm:px-10">
      <div className="mx-auto flex max-w-[1110px] flex-col">
        <div className="h-1 w-24 self-center bg-primary-100 sm:self-start"></div>
        <div className="pb-10 pt-14 sm:pb-12 md:pt-16 lg:pt-20">
          <div className="flex flex-col items-center gap-12 sm:items-start sm:gap-8 lg:flex-row lg:justify-between">
            <Logo />
            <Navigation />
          </div>
          <div className="grid grid-cols-1 grid-rows-[auto,auto] gap-y-12 pt-12 text-gray-100 sm:grid-cols-2 sm:gap-y-20 sm:pt-8 lg:items-end lg:gap-y-14 lg:pt-10">
            <p className="col-span-full text-center sm:text-left lg:col-span-1">
              Earphones Audiophile is an all in one stop to fulfill your audio
              needs. We&apos;re a small team of music lovers and sound
              specialists who are devoted to helping you get the most out of
              personal audio. Come and visit our demo facility - we&apos;re open
              7 days a week.
            </p>
            <SocialMedia />
            <p className="col-start-1 row-start-2 text-center font-bold sm:text-left">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
