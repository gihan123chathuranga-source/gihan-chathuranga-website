
const WP = (process.env.WP_URL || "https://cms.gihanchathuranga.com").replace(/\/$/, "");

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string | null;
  imageAlt: string;
  category: string;
  categorySlug: string;
  categoryId: number;
  minutes: number;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

// WordPress API types
type WpRendered = {
  rendered?: string;
};

type WpMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: {
      large?: {
        source_url?: string;
      };
    };
  };
};

type WpTerm = {
  taxonomy?: string;
  name?: string;
  slug?: string;
  id?: number;
};

type WpPost = {
  id: number;
  slug: string;
  title?: WpRendered;
  excerpt?: WpRendered;
  content?: WpRendered;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: WpMedia[];
    "wp:term"?: WpTerm[][];
  };
};

// Strip HTML tags
const strip = (html = "") =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&hellip;|\[&hellip;\]/g, "…")
    .replace(/&#8217;|&#x2019;/g, "’")
    .replace(/&#8211;|&#x2013;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#038;/g, "&")
    .replace(/&#8212;/g, "—")
    .replace(/\s+/g, " ")
    .trim();

// Normalize WordPress post
const normalize = (p: WpPost): Post => {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];

  const terms = p._embedded?.["wp:term"]?.flat() ?? [];

  const cat =
    terms.find((term) => term.taxonomy === "category") ??
    terms[0];

  const content = p.content?.rendered ?? "";

  const words = strip(content)
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    id: p.id,
    slug: p.slug,
    title: strip(p.title?.rendered ?? "Untitled"),
    excerpt: strip(p.excerpt?.rendered ?? ""),
    content,
    date: p.date,

    image:
      media?.media_details?.sizes?.large?.source_url ??
      media?.source_url ??
      null,

    imageAlt:
      media?.alt_text ||
      strip(p.title?.rendered ?? ""),

    category: cat?.name ?? "General Knowledge",
    categorySlug: cat?.slug ?? "general-knowledge",
    categoryId: cat?.id ?? 0,

    minutes: Math.max(1, Math.ceil(words / 220)),
  };
};

// Fetch WordPress API
async function wpFetch<T>(
  path: string,
  revalidate = 300
): Promise<T | null> {
  try {
    const response = await fetch(
      `${WP}/wp-json/wp/v2/${path}`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

// Get posts
export async function getPosts(
  perPage = 10,
  page = 1
): Promise<Post[]> {
  const data = await wpFetch<WpPost[]>(
    `posts?_embed&status=publish&per_page=${perPage}&page=${page}&orderby=date&order=desc`
  );

  return Array.isArray(data)
    ? data.map(normalize)
    : [];
}

// Get single post
export async function getPost(
  slug: string
): Promise<Post | null> {
  const data = await wpFetch<WpPost[]>(
    `posts?_embed&slug=${encodeURIComponent(slug)}&status=publish`
  );

  return data?.[0]
    ? normalize(data[0])
    : null;
}

// Get categories
export async function getCategories(): Promise<Category[]> {
  const data = await wpFetch<Category[]>(
    "categories?per_page=100&hide_empty=true",
    3600
  );

  return Array.isArray(data)
    ? data
    : [];
}

// Get category counts
export async function getCategoryCounts(): Promise<
  Record<string, number>
> {
  const cats = await getCategories();

  return Object.fromEntries(
    cats.map((category) => [
      category.slug,
      category.count,
    ])
  );
}

// Get posts by category
export async function getCategoryPosts(
  slug: string,
  page = 1
): Promise<{
  category: Category | null;
  posts: Post[];
}> {
  const cats = await wpFetch<Category[]>(
    `categories?slug=${encodeURIComponent(slug)}`,
    3600
  );

  const category = cats?.[0] ?? null;

  if (!category) {
    return {
      category: null,
      posts: [],
    };
  }

  const data = await wpFetch<WpPost[]>(
    `posts?_embed&categories=${category.id}&per_page=12&page=${page}&status=publish`
  );

  return {
    category,
    posts: Array.isArray(data)
      ? data.map(normalize)
      : [],
  };
}

// Search posts
export async function searchPosts(
  query: string
): Promise<Post[]> {
  if (!query.trim()) {
    return [];
  }

  const data = await wpFetch<WpPost[]>(
    `posts?_embed&search=${encodeURIComponent(query)}&per_page=30&status=publish`
  );

  return Array.isArray(data)
    ? data.map(normalize)
    : [];
}

// Format date
export const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
