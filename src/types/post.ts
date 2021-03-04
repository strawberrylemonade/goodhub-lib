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

type IHero = IHeroImage;

export interface IHeroImage {
  type: 'image'
  image: IImage
}

export interface IConnection {}

export interface IPost {
  id: string,
  projectId: string,
  organisationId: string,
  postedAt: Date,
  postedBy: string,
  origin: IPostOrigin,

  postedIdentity: string
  type: IPostType
  tags: string[]

  text: Content
  summary?: string
  hero?: IHero
  connections?: IConnection[]
}
