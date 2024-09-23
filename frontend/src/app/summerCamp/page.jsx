import Image from "next/image";
import pageData from "lib/pageData";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import SummerCampInfoComponent from "./components/summerCampInfo";
import NoData from "@/components/shared/NoData";

const { SubTitle, SummerCampInfo, metadata, hasError } = await pageData(
  "/registration",
  "deep, 5"
);

export { metadata };

export default function SummerCamp() {
  if (hasError) {
    return <NoData />;
  }
  const Sun = () => {
    return (
      <div className="max-h-24 max-w-24">
        <Image
          src="/sun.webp"
          alt="An illustration of the sun smiling"
          width={3600}
          height={3600}
        />
      </div>
    );
  };

  const Subtitle = () => <h3 className="text-5xl text-center">{SubTitle}</h3>;

  const Desktop = () => (
    <div className="hidden llg:flex flex-col gap-12 p-12">
      <div className="flex flex-row items-center gap-12 self-center">
        <Sun />
        <Subtitle />
        <Sun />
      </div>
      <SummerCampInfoComponent summerCampInfo={SummerCampInfo} />
    </div>
  );

  const Mobile = () => (
    <div className="flex flex-col gap-12 llg:hidden items-center p-6">
      <Subtitle />
      <Sun />
      <SummerCampInfoComponent summerCampInfo={SummerCampInfo} />
      <Sun />
    </div>
  );

  return (
    <>
      <Hero
        img="/SummerCamp.webp"
        alt="Illustration of children playing on a hill in the sun"
        myHeight="h-[15rem] llg:h-[45rem] "
      />
      <PageView className="llg:bg-PumcYellow">
        <div className="flex flex-col gap-12">
          <h1 className="text-center text-7xl llg:text-9xl text-primary">
            Summer Fun camp at PUMC Preschool
          </h1>
          <Desktop />
          <Mobile />
        </div>
      </PageView>
    </>
  );
}
