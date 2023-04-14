/* eslint-disable */
// @ts-nocheck

import { CATEGORY_URL } from '../../config/app-config';
import { CategoryData } from '../../domain/posts/category';
import { fetchJson } from '../../utils/fetch-json';

export async function getAllCategory(query?): Promise<CategoryData[]> {
  try {
    const url = `${CATEGORY_URL}&${query} `;
    const post = await fetchJson(url);
    const content = post.data;
    return content;
  } catch (error) {
    console.error('Erro no Fetch getAllPosts', error);
    return [];
  }
}
