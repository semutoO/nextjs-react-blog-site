import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";
import { type Author } from "./author";

export type Post = {
  slug: string;
  category: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogMetaType: OpenGraphType;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
    // Article-specific properties
    section?: string;
    tags?: string[];
    modifiedTime?: string;
};
