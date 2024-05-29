import { getMdxContent } from '@/lib/mdx/getMdxContent';
import { prepareMeta } from '@/lib/utils';
import type {
  GetContentsFromSlug,
  GetGuidePaths,
} from '@/types/client/FileSystem';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { getPriorityWiseGuides } from './guides/getPriorityWiseGuides';
import withStyledLi from './mdx/rehype/withStyledLi';

// const docsDir = path.join(process.cwd(), 'docs');
const guideDirPath = path.join(process.cwd(), 'docs', 'guides');

// Get all catch-all paths
export const getGuidePaths: GetGuidePaths<{ guide: string[] }> = async () => {
  const slugsWithPriority = await getPriorityWiseGuides(guideDirPath);
  return slugsWithPriority.map((slugWithPriority) => {
    return {
      params: {
        guide: slugWithPriority.map((s) => s.slug),
      },
    };
  });
};

// Get contents from slug
export const getContentsFromSlug: GetContentsFromSlug = async (slug) => {
  const filePath = path.join(guideDirPath, `${slug}.mdx`);
  const file = await fs.readFile(filePath);

  const { data, content } = matter(file);
  const source = await getMdxContent(content, withStyledLi);

  // Extracting DirName and FileName from catch-all-params
  const meta = prepareMeta(data, slug);

  return {
    meta,
    source,
  };
};
