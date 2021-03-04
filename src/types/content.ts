type url = string;

export type IImage = {
  id: string
  original: url
  standard: url
  thumbnail: url,
  alt: string,
  ratio: number,
  placeholder: {
    backgroundImage: string
    backgroundPosition: string
    backgroundSize: string
    backgroundRepeat: string
  }
}

export interface ParagraphBlock {
  type: 'paragraph',
  data: {
    text: string
  }
}

export type Block = ParagraphBlock;
export interface Content {
  time: number
  blocks: Block[]
  version: string
}
