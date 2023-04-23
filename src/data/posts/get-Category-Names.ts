import { CategoryData } from '../../domain/posts/category';
import { getAllCategory } from './get-all-category';

export default async function categoryNames() {
  let categorias: CategoryData[] | string[] = await getAllCategory();
  return (categorias = categorias.map((r) => r.attributes?.name));
}
