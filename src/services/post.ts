import { Content, IImage } from './content';

export enum IPostOrigin {
  GoodHub = 'GoodHub'
}

export enum IPostType {
  Update = 'Update',
  CallToAction = 'CallToAction',
  Announcement = 'Announcement',
  Other = 'Other'
}

export enum IPostIdentity {
  Individual = 'Individual',
  Organisation = 'Organisation'
}

type IHero = IHeroImage;

export interface IHeroImage {
  type: 'image'
  image: IImage
}

export interface IConnection {}

export interface IComment {
  id: string
  parentId: string
  content: Content
  replyId?: string
  postedIdentity: IPostIdentity
  postedAt: Date
}

export interface IPost {
  id: string,
  projectId: string,
  organisationId: string,
  postedAt: Date,
  postedBy: string,
  origin: IPostOrigin,

  postedIdentity: IPostIdentity
  type: IPostType
  tags: string[]
  likes?: string[]

  text: Content
  summary?: string
  hero?: IHero
  connections?: IConnection[]
}
