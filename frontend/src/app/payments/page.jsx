import { Divider } from "@nextui-org/divider";

import { fetchStrapi } from "lib/fetchStrapi";
import PageView from "@/components/shared/pageView";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1, BlockH1 } from "@/components/shared/h1s";
import FeeTables from "@/components/shared/feeTables";
import MyButton from "@/components/shared/myButton";
import WYSIWYG from "@/components/shared/WYSIWYG";

const route = "/payment";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
}

const MakeAPayment = ({ className }) => (
  <MyButton
    className={`self-center llg:self-end mt-6 ${className}`}
    label="Make a Payment"
    size="lg"
    href="https://pumcpreschool.breezechms.com/give/online"
    ariaLabel="Link to make a payment on the preschool's payment portal"
  />
);

export default async function Payments() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep, 5" });
  const image = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img={image.url}
        alt={image.alternativeText}
        size="about"
        className="object-[0%_25%]"
      >
        <HeroMask />
        <HeroH1 className="z-30">{attributes.HeroText}</HeroH1>
      </Hero>

      <PageView className="llg:bg-PumcBlue">
        <BlockH1 className="text-primary">
          {attributes.TuitionInfoTitle}
        </BlockH1>
        <WYSIWYG
          content={attributes.TuitionInfoText}
          pClassName="text-2xl llg:text-3xl"
        />
        <MakeAPayment />
        <Divider className="mt-12" />
        <FeeTables tables={attributes.my_tables.data} />
      </PageView>
    </>
  );
}
