import React, { ButtonHTMLAttributes, ComponentProps } from 'react';

// export const Button = ({ className, ...rest }: ComponentProps<'button'>) => {
export const Button = ({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type='button'></Button>;
};
