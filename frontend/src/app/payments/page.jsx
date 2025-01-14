import { Divider } from "@nextui-org/divider";

import { fetchStrapi } from "lib/fetchStrapi";
import PageView from "@/components/shared/pageView";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1, BlockH1 } from "@/components/shared/h1s";
import FeeTables from "../../components/shared/feeTables";
import MyButton from "@/components/shared/myButton";
import WYSIWYG from "@/components/shared/WYSIWYG";
import NoData from "@/components/shared/NoData";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/payment", { populate: "deep, 5" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function Payments() {
  const {
    data: {
      attributes: { TuitionInfoText, my_tables, currentYear },
      error,
    },
  } = await fetchStrapi("/payment", { populate: "deep, 5" });
  if (error) {
    return <NoData />;
  }
  return (
    <>
      <Hero
        img="/payment.webp"
        alt="Child with laptop and credit card"
        myHeight="h-[15rem] llg:h-[25rem] "
        className="object-[0%_25%]"
      >
        <HeroMask />
        <HeroH1 className="z-30">Payments</HeroH1>
      </Hero>

      <PageView className="llg:bg-PumcBlue">
        <BlockH1 className="text-primary">Tuition Information</BlockH1>
        <WYSIWYG content={TuitionInfoText} pClassName="text-2xl llg:text-3xl" />
        <MyButton
          alignment="self-center llg:self-end"
          className="mt-6 w-[12rem]"
          label="Make a Payment"
          size="lg"
          href="https://pumcpreschool.breezechms.com/give/online"
          ariaLabel="Link to make a payment on the preschool's payment portal"
        />
        <Divider className="mt-12" />
        <FeeTables tables={my_tables.data} year={currentYear} />
      </PageView>
    </>
  );
}
