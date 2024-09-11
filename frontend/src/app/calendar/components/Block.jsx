const Block = ({ label, children }) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-primary text-4xl text-center llg:text-left llg:text-6xl pb-4">
      {label}
    </h2>
    {children}
  </section>
);

export default Block;
