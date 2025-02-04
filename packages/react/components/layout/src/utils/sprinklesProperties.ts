export const extractSprinkleProps = (
  props: Record<any, string>,
  keys: Set<string>,
) => {
  const result: { [key in string]?: string } = {};

  for (const key of keys) {
    if (key in props) {
      result[key] = props[key];
    }
  }

  return result;
};
