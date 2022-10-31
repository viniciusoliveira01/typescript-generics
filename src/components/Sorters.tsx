import IProperty from "../interfaces/ISorters";

export interface ISortersProps<T> {
  object: T;
  setProperty: (propertyType: IProperty<T>) => void;
}

function Sorters<T>({ object, setProperty }: ISortersProps<T>) {
  return (
    <div className="col-md-3">
      <select
        id="sorters"
        className="form-select"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          const values = event.target.value.split("-");
          if (values.length === 2) {
            setProperty({
              property: values[0] as any,
              isDescending: values[1] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => (
          <>
            <option value={`${key}-true`} key={`${key}-true`}>
              Sort by {key} descending
            </option>
            <option value={`${key}-false`} key={`${key}-false`}>
              Sort by {key} ascending
            </option>
          </>
        ))}
      </select>
    </div>
  );
}

export default Sorters;
