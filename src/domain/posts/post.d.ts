export interface PostData {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          width: string;
          height: string;
          formats: {
            small: FormatImg;
            thumbnail: FormatImg;
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    author: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    categorie: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };
  };
}
interface FormatImg {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}
export interface DynamicPostProps {
  post: PostData;
  content: string;
  categoryName?: string[];
}
