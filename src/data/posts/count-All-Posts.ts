/* eslint-disable */
// @ts-nocheck

import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function countAllPosts(query?): Promise<string> {
  try {
    const url = `${POSTS_URL}&${query} `;
    const post = await fetchJson(url);
    const numberOfPosts = await post.meta.pagination.total;
    return numberOfPosts;
  } catch (error) {
    console.error('Erro no Fetch countAllPosts', error);
    return [];
  }
}
