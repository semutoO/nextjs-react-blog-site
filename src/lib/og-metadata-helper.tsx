import { Post } from "@/interfaces/post";

export function getOpenGraphMetadata(post: Post) {
    // Base OpenGraph metadata
    const base = {
      title: post.title,
      images: [post.ogImage.url],
      type: post.ogMetaType
    };
    
    // Type-specific properties
    const typeSpecificProps = {
      'article': {
        article: {
          publishedTime: post.date,
          authors: [post.author?.name],
          section: post.section,
          tags: post.tags,
          modifiedTime: post.modifiedTime,        
        }
      },
      'profile': {
        profile: {
          firstName: post.author?.name?.split(' ')[0],
          lastName: post.author?.name?.split(' ').slice(1).join(' '),
        }
      },      
    };
        
    return {
      ...base,
      ...(typeSpecificProps[post.ogMetaType as keyof typeof typeSpecificProps] || {})
    };
}
