import { GitCommit, Plus } from 'lucide-react';
import type { FC } from 'react';
import CodeBlock from '../mdxcomponents/CodeBlock';
import Glow from '../utilities/Glow';
import { Heading } from '../utilities/Heading';
import TypoComp from '../utilities/TypoComponent';

type IntroProps = {};
const githubRepo = 'https://github.com/pbclife/gitopener.vercel.app';
export const Intro: FC<IntroProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="">
        <Heading title="What is Gitopener?" subTitle="Introduction" />
        <TypoComp className="my-4 max-w-full sm:my-6">
          <p className="text-justify">
            {`Git Opener is an open-source project for everyone. If you are looking for a good project to get started with open source and you want to see your code in action, then you are in the right place. Just checkout our contribution guidelines before you start. If you don't know how things get done, don't worry; we have covered basic questions that might come to your mind when you start. Just give them a read and tight your helmet, believe me, the journey will be wild...`}
          </p>
        </TypoComp>
      </div>
      <div className="relative h-fit">
        <Glow className="w-[100%]  translate-x-32 opacity-60" />
        <CodeBlock fileName="git_opener.tsx" toCopy={githubRepo}>
          <div className="w-full flex-shrink-0 space-y-2 py-4">
            {/* Instruction */}
            <div className="-ml-[1px] flex items-center gap-4 border-l-2 border-emerald-500 bg-emerald-500/10 px-4 py-2 text-white">
              <Plus className="h-4 w-4 flex-shrink-0 text-emerald-400" />
              Jump start your contribution with Git Opener
            </div>
            {/* Steps 1 */}
            <div className="flex flex-col gap-4 px-4 py-2 text-white">
              <div className="flex items-center gap-4">
                <GitCommit className="h-5 w-5 text-accent" />
                Fork the repository
              </div>
              <div className="flex items-center gap-4">
                <GitCommit className="h-5 w-5 text-accent" />
                Contribute
              </div>
              <div className="flex items-center gap-4">
                <GitCommit className="h-5 w-5 text-accent" />
                Create pull request
              </div>
            </div>
          </div>
        </CodeBlock>
        {/* overlay */}
        <div className="absolute left-0 top-6 -z-10 h-64 w-full rotate-6 rounded-md border-2 border-accent/25 bg-accent/10 backdrop-blur-md"></div>
      </div>
    </div>
  );
};
