import { Content, IImage } from './content';
import { IProject } from './project';

interface Color {
  rgb: [number, number, number],
  hsl: [number, number, number],
  hex: string
}

export interface IExternalLink {
  name: string
  description: string
  url: string
  icon?: string
}

export interface IWebsiteHeroStyle {
  position: 'leading' | 'center' | 'trailing'
  style: 'greyscale' | 'tinted' | 'light' | 'dark'
}

export interface IWebsiteHero {
  title: string
  subtitle: string
  style: IWebsiteHeroStyle
  image?: IImage
}

export interface IWebsiteConfiguration {
  id: string
  name: string
  verified: boolean
  alert?: string
  slug?: string
  domainName?: string
  primaryColor: Color
  secondaryColor: Color
  logos?: {
    outline: string
    small: string
    large: string
  }
  pages?: {
    about: boolean
    updates: boolean
    contact: boolean
  }
  about?: Content
  hero?: IWebsiteHero
  featuredProjects?: IProject[]
  externalLinks?: IExternalLink[]
  footer?: {
    text: Content
    items: IImage[]
  }
}

export interface IOrganisation {
  id: string,
  name: string
  people: string[],
  profilePicture?: IImage
}