import {
  getResponsiveImageProps,
  type ResponsiveImageProfile,
} from '@/shared/lib/images/responsive-image';
import { cn } from '@/lib/utils';

type ResponsiveImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  profile?: ResponsiveImageProfile;
  sizes?: string;
};

export const ResponsiveImage = ({
  src,
  profile = 'service-card',
  sizes,
  className,
  loading = 'lazy',
  decoding = 'async',
  ...props
}: ResponsiveImageProps) => {
  const responsive = getResponsiveImageProps(src, profile);

  return (
    <img
      {...props}
      {...responsive}
      sizes={sizes ?? responsive.sizes}
      className={cn(className)}
      loading={loading}
      decoding={decoding}
    />
  );
};
