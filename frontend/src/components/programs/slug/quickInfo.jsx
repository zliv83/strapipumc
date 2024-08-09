const QuickRow = ({ id, children }) => {
  return (
    <div id={id} className="flex flex-row gap-2 items-center">
      {children}
    </div>
  );
};

const Label = ({ children }) => {
  return <span className="font-medium text-3xl">{children}</span>;
};

const Description = ({ children }) => {
  return <span className="text-2xl">{children}</span>;
};

export default function QuickInfo({
  title,
  ageLabel,
  ageDescription,
  optionsListTitle,
  optionsList,
  ratioLabel,
  ratioDescription,
  nutFree,
}) {
  return (
    <div
      id="quick info"
      className="bg-PumcBlue text-background flex flex-col gap-4 justify-center items-center p-4 llg:items-start llg:pl-24"
    >
      <Label>{title}</Label>
      {ageLabel ? (
        <QuickRow id="age">
          <Label>{`${ageLabel}:`}</Label>
          <Description>{ageDescription}</Description>
        </QuickRow>
      ) : null}

      <div id="options" className="flex flex-col ">
        <Label>{`${optionsListTitle}:`}</Label>
        <ul className="list-disc pl-8 text-2xl">
          {optionsList.map((item) => (
            <li key={item.id}>{item.listItem}</li>
          ))}
        </ul>
      </div>
      <QuickRow id="ratio">
        <Label>{`${ratioLabel}:`}</Label>
        <Description>{ratioDescription}</Description>
      </QuickRow>
      {nutFree ? <Description>{nutFree}</Description> : null}
    </div>
  );
}
