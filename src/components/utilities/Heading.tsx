import type { FC } from 'react';

type HeadingProps = {
  title: string;
  subTitle?: string;
};

export const Heading: FC<HeadingProps> = ({ subTitle, title }) => {
  return (
    <div className="space-y-2 text-skin-base">
      {subTitle && (
        <p className="text-lg font-medium text-accent">{subTitle}</p>
      )}
      <h2 className="text-3xl font-extrabold ">{title}</h2>
    </div>
  );
};
