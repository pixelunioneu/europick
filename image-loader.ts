import type { ImageLoaderProps } from "next/image";

const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({ src }: ImageLoaderProps) {
  if (process.env.NODE_ENV === "development") {
    return src;
  }

  return `/${normalizeSrc(src)}`;
}
