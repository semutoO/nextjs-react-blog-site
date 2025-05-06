import Container from "@/app/_components/container";
import { TopPost } from "@/app/_components/top-post";
import { MoreBlogPosts } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";

const category = "technology";

export default function Index() {
  const allPosts = getAllPosts(category);
  const topPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>     
      <Header category={category}/>   
        <TopPost
          title={topPost.title}
          coverImage={topPost.coverImage}
          date={topPost.date}
          author={topPost.author}
          slug={topPost.slug}
          excerpt={topPost.excerpt}
        />
        {morePosts.length > 0 && <MoreBlogPosts posts={morePosts} category={category}/>}
      </Container>
    </main>
  );
}
