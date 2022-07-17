export default async ($content, dirName) => {
  const fiveArticles = await $content(dirName)
    .only(["title", "description", "slug", "tags", "createdAt"])
    .sortBy("createdAt", "desc")
    .limit(5)
    .fetch();

  const nextPage = fiveArticles.length === 5;
  const articles = nextPage ? fiveArticles.slice(0, -1) : fiveArticles;

  return {
    nextPage,
    articles
  };
}
