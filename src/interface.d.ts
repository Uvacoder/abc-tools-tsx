import { StaticImageData } from 'next/image'

export interface Tool {
  slug: string
  name: string
  iconEl?: React.ReactElement // when icon is a React component in src/app/icons
  iconImg?: StaticImageData // when icon is imported as an image
  description?: string
  implemented?: boolean
  docFile?: string
}

export interface DynamicSegmentParamsProps {
  params: {
    slug: string
  }
}

interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode
  size?: string | number
  color?: string
  title?: string
}
export declare type IconType = (props: IconBaseProps) => JSX.Element
