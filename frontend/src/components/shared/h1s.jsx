export const BlockH1 = ({ className, children }) => {
  return (
    <h1
      id="Block title"
      className={`text-[3rem] text-center llg:self-start llg:text-[6rem]  ${className}`}
    >
      {children}
    </h1>
  );
};

export const HeroH1 = ({ className, children }) => {
  return (
    <h1
      id="Block title"
      className={`text-[3rem] text-center llg:text-[6rem]  ${className}`}
    >
      {children}
    </h1>
  );
};
