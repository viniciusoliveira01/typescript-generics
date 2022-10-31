import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

type ISearchInputProps = {
  setSearchQuery: (searchQuery: string) => void;
};

const SearchInput = ({ setSearchQuery }: ISearchInputProps) => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <>
      <input
        type="text"
        id="search"
        className="form-control mt-5 mb-5"
        placeholder="Search..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(event.target.value)
        }
      />
    </>
  );
};

export default SearchInput;
