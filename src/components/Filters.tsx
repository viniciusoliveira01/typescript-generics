import React from "react";
import IFilter from "../interfaces/IFilter";

export interface IFilterProps<T> {
  object: T;
  properties: Array<IFilter<T>>;
  onChangeFilter: (property: IFilter<T>) => void;
}

function Filters<T>({ object, properties, onChangeFilter }: IFilterProps<T>) {
  return (
    <div className="p-1 my-2">
      {Object.keys(object).map((key) => {
        return (
          <>
            <input
              className="m-1 ml-3"
              type="checkbox"
              id={`${key}-true`}
              value={key}
              onChange={() =>
                onChangeFilter({
                  property: key as any,
                  isTruthySelected: true,
                })
              }
              checked={properties.some(
                (property) =>
                  property.property === key && property.isTruthySelected
              )}
            />
            <label htmlFor={`${key}-true`}>{key} is truthy</label>

            <input
              className="m-1 ml-3"
              type="checkbox"
              id={`${key}-false`}
              value={key}
              onChange={() =>
                onChangeFilter({
                  property: key as any,
                  isTruthySelected: false,
                })
              }
              checked={properties.some(
                (property) =>
                  property.property === key && !property.isTruthySelected
              )}
            />
            <label htmlFor={`${key}-false`}>{key} is falsy</label>
          </>
        );
      })}
    </div>
  );
}
export default Filters;
