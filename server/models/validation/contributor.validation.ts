import { z } from 'zod';

const ContV = z.object({
  ghid: z.number(),
  gh_username: z.string(),
  name: z.string(),
  avatar_url: z.string(),
  email: z.string().email(`Not a valid email`).nullable(),
  html_url: z.string(),
  location: z.string().nullable(),
  occupation: z.string(),
  bio: z.string().nullable(),
  content: z.string(),
  profile_views: z.number().default(0),
  isDeleted: z.boolean().default(false),
});
export default ContV;
export type TContributor = z.infer<typeof ContV>;
export type TCont = Pick<
  TContributor,
  'avatar_url' | 'gh_username' | 'name' | 'bio' | 'occupation'
>;
