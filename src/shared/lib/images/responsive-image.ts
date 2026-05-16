export type ResponsiveImageProfile =
  | 'service-card'
  | 'team-avatar'
  | 'team-card';

interface ResponsiveImageConfig {
  widths: readonly number[];
  maxWidth: number;
  defaultSrcWidth: number;
  sizes: string;
  /** When false, the largest srcset candidate uses `-{maxWidth}w`, not the base file. */
  maxUsesBaseFile?: boolean;
}

const PROFILES: Record<ResponsiveImageProfile, ResponsiveImageConfig> = {
  'service-card': {
    widths: [400, 640],
    maxWidth: 960,
    defaultSrcWidth: 640,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  'team-avatar': {
    widths: [96, 192],
    maxWidth: 384,
    maxUsesBaseFile: false,
    defaultSrcWidth: 192,
    sizes: 'min(7rem, calc((100% + 3.75rem) / 4))',
  },
  'team-card': {
    widths: [400, 640],
    maxWidth: 768,
    maxUsesBaseFile: true,
    defaultSrcWidth: 640,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
};

export const SERVICE_CARD_IMAGE_SIZES = PROFILES['service-card'].sizes;

export function toPublicImagePath(src: string): string {
  return src.startsWith('/') ? src : `/${src}`;
}

export function buildResponsiveSrcSet(
  src: string,
  widths: readonly number[],
  maxWidth: number,
  maxUsesBaseFile = true,
): string {
  const normalized = toPublicImagePath(src);
  const extension = normalized.match(/\.[a-z0-9]+$/i)?.[0] ?? '.webp';
  const base = normalized.slice(0, -extension.length);
  const largestSrc = maxUsesBaseFile
    ? normalized
    : `${base}-${maxWidth}w${extension}`;

  const candidates = [
    ...widths.map((width) => `${base}-${width}w${extension} ${width}w`),
    `${largestSrc} ${maxWidth}w`,
  ];

  return candidates.join(', ');
}

export function getResponsiveImageProps(
  src: string,
  profile: ResponsiveImageProfile = 'service-card',
) {
  const { widths, maxWidth, defaultSrcWidth, sizes, maxUsesBaseFile = true } =
    PROFILES[profile];
  const normalized = toPublicImagePath(src);
  const extension = normalized.match(/\.[a-z0-9]+$/i)?.[0] ?? '.webp';
  const base = normalized.slice(0, -extension.length);

  return {
    src: `${base}-${defaultSrcWidth}w${extension}`,
    srcSet: buildResponsiveSrcSet(src, widths, maxWidth, maxUsesBaseFile),
    sizes,
  };
}