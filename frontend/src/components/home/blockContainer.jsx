const BlockContainer = ({ className, children }) => {
  return <div className={`p-6 llg:p-12 flex ${className}`}>{children}</div>;
};

export default BlockContainer;
