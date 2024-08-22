import BlockContainer from "@/components/home/blockContainer";

const BeeBackground = ({ children, main, className }) => {
  return (
    <BlockContainer
      id="background"
      className={`flex-col gap-6 bg-[#FFC904] bg-[url('http://localhost:1337/uploads/Bee_a5aa961c72.svg')] bg-no-repeat bg-cover ${
        main ? "bg-[center_top_1.5rem]" : "bg-[center_top_20.5rem]"
      } ${className}`}
    >
      {children}
    </BlockContainer>
  );
};

export default BeeBackground;
