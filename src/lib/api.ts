import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts/categories");

export function getPostSlugs() {  
  var postCategories = fs.readdirSync(postsDirectory);
  var postSlugs: string[] = [];

  postCategories.forEach(category => {
    let files = fs.readdirSync(`${postsDirectory}/${category}`);
    postSlugs.push(...files.map(file => `${category}/${file}`));
  });

  return postSlugs;
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(category?: string): Post[] {
  const slugs = getPostSlugs();
  let posts = slugs    
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  if(category){
    posts = posts.filter((post) => post.slug.includes(category));
  }
    
  return posts;
}
