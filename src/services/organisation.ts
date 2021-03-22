import { IImage } from './content';

export interface IOrganisation {
  id: string,
  name: string
  people: string[],
  profilePicture?: IImage
}