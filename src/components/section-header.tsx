export const SectionHeader = ({ heading, subheading }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="text-4xl mb-4 font-semibold">{heading}</h2>
      <p className="max-w-screen-md text-center leading-normal text-muted-foreground sm:text-lg sm:leading-8 mb-8">
        {subheading}
      </p>
    </>
  );
};
