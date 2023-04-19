/* eslint-disable */
// @ts-nocheck

import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
interface GetPost {
  data: {
    0: PostData;
    [key: string]: never;
  };
}
export async function getPost(slug: string | string[]): Promise<GetPost> {
  try {
    const slugString = Array.isArray(slug) ? slug[0] : slug;

    const url = `${POSTS_URL}&filters[slug][$eqi]=${slugString} `;

    const jsonPosts = await fetchJson(url);

    return jsonPosts;
  } catch (error) {
    console.error('Erro no Fetch getPost', error);
    return [];
  }
}
