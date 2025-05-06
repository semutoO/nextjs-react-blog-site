import Container from "@/app/_components/container";
import { TopPost } from "@/app/_components/top-post";
import { Intro } from "@/app/_components/intro";
import { MoreBlogPosts } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const topPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <TopPost
          title={topPost.title}
          coverImage={topPost.coverImage}
          date={topPost.date}
          author={topPost.author}
          slug={topPost.slug}
          excerpt={topPost.excerpt}
        />
        {morePosts.length > 0 && <MoreBlogPosts posts={morePosts} />}
      </Container>
    </main>
  );
}
