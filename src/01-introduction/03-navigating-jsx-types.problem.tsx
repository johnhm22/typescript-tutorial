export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={5}
      // How do I figure out what type onChange expects?
      onChange={(e) => console.log('onChange')}

      // React.FormEventHandler<HTMLDivElement> | undefined

      // How do I get autocomplete with JSX?
    />
  );
};

type Example = React.FormEventHandler<HTMLDivElement> | undefined;
