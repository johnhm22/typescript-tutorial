import { ComponentProps } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

// type Props = Omit<ComponentProps<'input'>, 'onChange'>;

type OverrideProps<T, TOverriden> = Omit<T, keyof TOverriden> & TOverriden;
type InputProps = OverrideProps<
  ComponentProps<'input'>,
  { onChange: (value: string) => void }
>;

export const Input = (
  // props: ComponentProps<"input"> & { onChange: (value: string) => void }
  // props: Props & { onChange: (value: string) => void },
  props: InputProps,
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
