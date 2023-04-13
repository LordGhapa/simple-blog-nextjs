/* eslint-disable */
// @ts-nocheck

import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function getAllPosts(query?): Promise<PostData[]> {
  try {
    const url = `${POSTS_URL}&${query} `;
    const post = await fetchJson(url);
    const content = post.data;
    return content;
  } catch (error) {
    console.error('Erro no Fetch getAllPosts', error);
    return [];
  }
}
