import { Image } from "@nextui-org/react";

const Education = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold">
            Bachelor of Science, Computer Science
          </h3>
          <a
            href="https://www.uvic.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-md md:text-lg underline transition-colors hover:text-primary/90"
          >
            The University of Victoria
          </a>
          <p className="text-sm md:text-md italic text-forground/80">2018 - 2023</p>
          <p className="text-sm md:text-md text-primary/80">Victoria, Canada, British Columbia</p>
        </div>

        <div className="relative mx-auto my-4 w-[60%] md:w-[40%]">
          <Image
            isBlurred
            src="/uvic.jpg"
            alt="University Logo"
            className="object-contain max-w-full max-h-full"
            />
        </div>
      </div>
    </div>
  );
};

export default Education;
