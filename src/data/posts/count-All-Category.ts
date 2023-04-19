/* eslint-disable */
// @ts-nocheck

import { CATEGORY_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function countAllCategory(query?): Promise<string> {
  try {
    const url = `${CATEGORY_URL}&${query} `;
    const post = await fetchJson(url);
    const numberOfPosts = await post.meta.pagination.total;
    return numberOfPosts;
  } catch (error) {
    console.error('Erro no Fetch countAllCategory', error);
    return [];
  }
}
