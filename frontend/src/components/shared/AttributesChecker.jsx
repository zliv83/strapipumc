export default function AttributesChecker({ attributes, children }) {
  if (!attributes) {
    return (
      <div>
        <h1>Error: Data not available</h1>
        <p>Unable to load the form information. Please try again later.</p>
      </div>
    );
  }
  return children;
}
