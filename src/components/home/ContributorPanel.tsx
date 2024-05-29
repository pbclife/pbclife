import clsx from 'clsx';
import {
  LightbulbIcon,
  MicroscopeIcon,
  Plus,
  SquirrelIcon,
} from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

type ContributorPanelProps = {};

export const ContributorPanel: FC<ContributorPanelProps> = () => {
  return (
    <div className="-mx-4 pb-8">
      <div className="relative ">
        <div className="z-0 w-full rounded-xl border border-slate-700 bg-slate-900 pt-4 shadow-2xl shadow-accent/5 backdrop-blur-md">
          {/* header */}
          <div className="-my-[1px] flex items-center justify-between gap-4 border-y border-slate-700 bg-slate-800/50 py-2 px-4  text-slate-500">
            <span className="flex items-center gap-4 font-mono text-lg">
              <SquirrelIcon className="h-8 w-8 text-lime-500" />{' '}
              <span className="hidden sm:block">
                Beginner friendly
                <span className="text-lime-500"> Guides</span>
              </span>
            </span>
            <Link
              href={`/guides/starting-contribution/welcome`}
              className="flex items-center gap-2 rounded border border-emerald-500 bg-emerald-700/80 px-2 py-0.5 font-medium text-slate-200"
            >
              <MicroscopeIcon className="h-5 w-5" /> Explore
            </Link>
          </div>
          {/* body */}
          <div className="flex min-h-screen-50 w-full">
            {/* sidebar */}
            <div className="ml-4 hidden min-h-64 w-60 flex-shrink-0 border-x border-slate-700 bg-slate-800/40 p-4 lg:flex lg:flex-col lg:justify-between">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((v) => (
                  <SidebarSkeleton
                    key={v}
                    className={v % 2 === 0 ? `animate-pulse` : ``}
                  />
                ))}
              </div>
              <Link
                href={`https://github.com/pbclife/gitopener.vercel.app/tree/main/docs/guides`}
                className="flex items-center justify-center gap-2 rounded border border-emerald-500 bg-emerald-700/80 px-2 py-0.5 font-medium text-slate-200"
              >
                <Plus className="h-5 w-5" /> Contribute
              </Link>
            </div>
            {/* outlet */}
            <div className="flex-auto p-4 text-slate-300 sm:p-8">
              {/* question */}
              <h3 className="text-2xl font-bold">
                How to write professional commits ?
              </h3>
              <p className="mt-2 text-slate-400">
                {`To write professional commits in GitHub, it's important to follow
              a few best practices.`}
              </p>
              {/* ans */}
              <h4 className="my-4 text-xl font-bold">The conventional way:</h4>
              {/* convention */}
              <div className="mb-4 flex gap-2">
                <span className="rounded border border-lime-600/50 bg-lime-600/10 py-0.5 px-2 text-lime-600">
                  type
                </span>
                <span className="rounded border border-yellow-600/50 bg-yellow-600/10  py-0.5 px-2 text-yellow-600">
                  scope
                </span>
                :
                <span className="rounded border border-fuchsia-600/50 bg-fuchsia-600/10 py-0.5 px-2 text-fuchsia-600 ">
                  description
                </span>
              </div>
              <div className="my-8 space-y-4">
                {/* type */}
                <div className="flex gap-2">
                  <LightbulbIcon className="h-5 w-5 flex-shrink-0 text-lime-500" />
                  <span>
                    <span className="rounded border border-lime-600/50 bg-lime-600/10 py-0.5 px-2 text-lime-600">
                      {`type`}
                    </span>
                    {` : `} Commit Type like build, ci, docs, feat, fix etc.
                    This field is mandatory.
                  </span>
                </div>
                {/* scope */}
                <div className="flex gap-2">
                  <LightbulbIcon className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                  <span>
                    <span className="rounded border border-yellow-600/50 bg-yellow-600/10 py-0.5 px-2 text-yellow-600">
                      {`scope`}
                    </span>
                    {` : `} Phrase describing a section of the codebase. This
                    field is optional.
                  </span>
                </div>
                {/* description */}
                <div className="flex gap-2">
                  <LightbulbIcon className="h-5 w-5 flex-shrink-0 text-fuchsia-500" />
                  <span className="leading-6">
                    <span className="rounded border border-fuchsia-600/50 bg-fuchsia-600/10 py-0.5 px-2 text-fuchsia-600">
                      {`description`}
                    </span>
                    {` : `} Description should be in the present tense. Not
                    capitalized. No period in the end. Each description consists
                    of a Title, Body and Footer. The Title and Body are
                    mandatory if the description is large enough. The footer is
                    optional.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* overlay */}
        <div className="absolute top-0 -left-5 -z-10 h-full min-h-screen-50 w-full rotate-3 rounded-lg border border-emerald-500 bg-emerald-700/80"></div>
      </div>
    </div>
  );
};

export const SidebarSkeleton: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx('w-full space-y-2', className)}>
      <div className="h-4 w-full  rounded-md bg-slate-700"></div>
      <div className="h-2 w-[75%]  rounded-md bg-slate-700"></div>
    </div>
  );
};
