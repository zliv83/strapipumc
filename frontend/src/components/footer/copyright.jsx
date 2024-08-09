const Copyright = ({ className }) => {
  const year = new Date().getFullYear();
  return <div className={className}>&copy; {year} PUMC Preschool</div>;
};

export default Copyright;
