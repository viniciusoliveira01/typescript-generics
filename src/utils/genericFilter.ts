import IFilter from "../interfaces/IFilter";

const genericFilter = <T>(
  object: T,
  filterProperties: Array<IFilter<T>>
): boolean => {
  return filterProperties.every((filterProperty) => {
    const { property, isTruthySelected } = filterProperty;
    return isTruthySelected ? object[property] : !object[property];
  });
};

export default genericFilter;
