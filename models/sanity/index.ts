export interface Asset {
  _id: string;
  url: string;
}

export interface Image {
  _type: "image";
  alt: string;
  asset: Asset;
}

export interface Slug {
  current: string;
  _type: "slug";
}

export interface Author {
  _rev: string;
  _type: "author";
  _id: string;
  slug: Slug;
  _createdAt: string; // ISO date string
  name: string;
  bio: any[]; // Adjust the type based on the actual structure of bio
  _updatedAt: string; // ISO date string
  image: Image;
}

export interface Post {
  _id: string;
  _type: "post";
  mainImage: Image;
  _updatedAt: string; // ISO date string
  _rev: string;
  body: any[]; // Adjust the type based on the actual structure of body
  title: string;
  slug: Slug;
  publishedAt: string; // ISO date string
  _createdAt: string; // ISO date string
  summary: string;
  author: Author;
  categories: string[]; // Array of category names
}
