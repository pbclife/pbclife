import LinkComp from '@utilities/LinkComp';
import * as lucide from 'lucide-react';
import type { ComponentProps, FC, ReactNode } from 'react';

type CardProps = {
  isActive?: boolean;
  children?: ReactNode;
  Icon?: FC<ComponentProps<'svg'>>;
  subTitle?: string;
  title?: string;
  href?: string;
};

const Card: FC<CardProps> = ({
  children,
  isActive = false,
  Icon,
  title,
  subTitle,
  href,
}) => {

  if(typeof Icon === 'string') {
    Icon= lucide[Icon];
  }

  return (
    <LinkComp href={href}>
      <div
        className={`not-prose relative h-fit space-y-2 rounded-xl border p-4 text-base font-normal text-skin-base hover:border-accent dark:hover:border-accent ${
          isActive
            ? `border-purple-600/30 dark:border-purple-600/50 `
            : `border-skin-base`
        }`}
      >
        {/* icon */}
        {Icon && (
          <Icon
            className={`h-12 w-12 ${
              isActive ? `text-purple-600 dark:text-purple-500` : `text-accent`
            }`}
          />
        )}
        {/* typography */}
        <div className="mt-4">
          {/* title */}
          <h3 className="flex flex-col -space-y-1 text-xl font-semibold">
            {title}
            {subTitle && (
              <span className="flex items-center gap-x-2 text-sm text-skin-muted">
                {subTitle}
                {isActive && (
                  <span className="rounded-md bg-purple-50 px-2 py-1 text-xs capitalize text-purple-600 dark:bg-purple-600/10 dark:text-purple-200 ">
                    Mostly Active
                  </span>
                )}
              </span>
            )}
          </h3>
          {/* desc */}
          <div className="mt-4 text-skin-muted/90">{children}</div>
        </div>
      </div>
    </LinkComp>
  );
};

export default Card;
