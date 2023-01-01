import { ERR } from '&/errors';
import errorHandler from '&/middlewares/errorHandler';
import Contributor, { TContributor } from '&/models/contributors';
import { assertHasProps, assertIsString } from '&/validator/assertionGuards';
import { NextApiHandler } from 'next';

function setUpdatableProperty<T, Prop extends keyof T>(
  value: object,
  allowedProps: ReadonlyArray<Prop>
) {
  if (value === undefined || value === null) {
    throw new ERR.Bad_Request(`Credetials should not be empty`);
  }
  for (const prop of Object.keys(value)) {
    if (!allowedProps.includes(prop as Prop))
      throw new ERR.Forbidden(
        `Updation of Property ${String(prop)} is not allowed`
      );
  }
}

export const getAllContributors: NextApiHandler = errorHandler(
  async (req, res) => {
    //TODO: Implement query system
    const query = {
      select: `gh_username name avatar_url occupation createdAt`,
      sortBy: `updatedAt profile_views`,
      limit: req.query?.limit || 20,
      page: req.query?.page || 1,
    };
    const { select, sort } = req.query;

    if (select && typeof select === 'string') {
      const qstr = select.split(',').join(' ');
      query.select = qstr;
    }

    if (sort && typeof sort === 'string') {
      const qstr = sort.split(',').join(' ');
      query.sortBy = qstr;
    }

    // todo: search non-Deleted items
    const result = Contributor.find({});
    const contributors = await result
      .select(query.select)
      .sort(query.sortBy)
      .limit(Number(query.limit))
      .skip((Number(query.page) - 1) * Number(query.limit));

    res.status(200).json({ count: contributors.length, contributors });
  }
);

export const getSingleContributor: NextApiHandler = errorHandler(
  async (req, res) => {
    const { contId } = req.query;
    assertIsString(contId, `Route does not exist`);
    const contributor = await Contributor.findOne({ gh_username: contId });
    if (!contributor || contributor.isDeleted)
      throw new ERR.Not_Found(`Contributor ${contId} has not contributed yet`);
    res.status(200).json(contributor);
  }
);

export const createContributor: NextApiHandler = errorHandler(
  async (req, res) => {
    assertHasProps<TContributor, keyof TContributor>(req.body, [
      'avatar_url',
      'gh_username',
      'content',
      'ghid',
      'html_url',
      'name',
      'occupation',
    ]);
    const isExistingContributor = await Contributor.findOne({
      gh_username: req.body.gh_username,
    });
    if (isExistingContributor)
      throw new ERR.Bad_Request(
        `Contributor ${req.body.name} already contributed`
      );

    const contributor = await Contributor.create(req.body);
    res.status(201).json(contributor);
  }
);

export const updateContributor: NextApiHandler = errorHandler(
  async (req, res) => {
    const { contId } = req.query;
    assertIsString(contId, `Route does not exist`);
    setUpdatableProperty<TContributor, keyof TContributor>(req.body, [
      'bio',
      'email',
      'profile_views',
      'location',
    ]);
    const findContributor = await Contributor.findOne({
      gh_username: contId,
    });

    if (!findContributor || findContributor.isDeleted)
      throw new ERR.Not_Found(`Contributor ${contId} has not contributed yet`);

    const contributor = await Contributor.findOneAndUpdate(
      { gh_username: contId },
      req.body,
      { new: true }
    );
    res.status(200).json(contributor);
  }
);

export const deleteContributor: NextApiHandler = errorHandler(
  async (req, res) => {
    const { contId } = req.query;
    assertIsString(contId, `Route does not exist`);
    await Contributor.findOneAndUpdate(
      { gh_username: contId },
      { isDeleted: true }
    );
    res.status(200).json({ message: `Contributor deleted` });
  }
);
