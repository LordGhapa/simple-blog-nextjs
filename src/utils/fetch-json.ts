export const fetchJson = async <T>(url: string): Promise<T> => {
  const raw = await fetch(url);
  const jsonData = await raw.json();
  return jsonData;
};
export const regexImg = /!\[(.*?)\]\((.*?)\)/g;

/*
 /* {HTMLReactParser(
      post.attributes.content.replace(
        regexImg,
        ` <img alt="$1" class="imgPost" src="$2" />`,
      ),
    )}

*/
