import dynamic from "next/dynamic";
import pageData from "lib/pageData";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";
const Content = dynamic(() => import("./components/Content"));

const { BullitenBoardContent, metadata, hasError } = await pageData(
  "/bulletin-board"
);

export { metadata };

export default function BulletinBoard() {
  if (hasError) {
    return <NoData />;
  }
  return (
    <div>
      <Hero
        img="/Bulletin.webp"
        alt="Large tan cork bord on a orange wall"
        myHeight="h-[15rem] llg:h-[50rem]"
      >
        <ImageMask />
        <p className="text-6xl llg:text-9xl z-30">
          Bulletin <br className="llg:hidden" /> Board
        </p>
      </Hero>
      <PageView>
        <Content content={BullitenBoardContent} />
      </PageView>
    </div>
  );
}
