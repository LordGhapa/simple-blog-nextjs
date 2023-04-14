export interface CategoryData {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    posts: {
      data: [
        {
          id: 1;
          attributes: {
            title: string;
            content: string;
            slug: string;
            createdAt: string;
            updatedAt: string;
          };
        },
      ];
    };
  };
}
