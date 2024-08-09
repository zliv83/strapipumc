import { Image } from "@nextui-org/image";

const Staff = ({ headshot, name, position, bio }) => {
  return (
    <>
      <div id="headshot">
        <Image src={headshot} alt="headshot" />
      </div>
      <div id="name and bio" className="flex flex-col gap-6 llg:justify-center">
        <div className="flex flex-col gap-2">
          <h2
            id="name"
            className="text-primary text-center text-4xl llg:text-left llg:text-5xl"
          >
            {name}
          </h2>
          <h2
            id="position"
            className="text-center text-3xl llg:text-left llg:text-4xl"
          >
            {position}
          </h2>
        </div>
        <p id="bio" className="text-xl text-center llg:text-left llg:text-2xl">
          {bio}
        </p>
      </div>
    </>
  );
};

export default Staff;
