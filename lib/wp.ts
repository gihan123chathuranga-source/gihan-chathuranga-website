const WP = (process.env.WP_URL || "https://cms.gihanchathuranga.com").replace(/\/$/, "");

export const WP_API = `${WP}/wp-json/wp/v2`;

export async function wpFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const url = `${WP_API}/${endpoint.replace(/^\/+/, "")}`;

  const response = await fetch(url, {
    ...options,
    next: {
      revalidate: 60,
      ...options.next,
    },
  });

  if (!response.ok) {
    throw new Error(
      `WordPress API Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
