"use client";
import { MdSearch } from "react-icons/md";
import style from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handlerSearch = useDebouncedCallback((e) => {
    if (e.target.value) {
        params.set("page",1)
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  });

  return (
    <div className={style.container}>
      <MdSearch></MdSearch>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handlerSearch}
        className={style.input}
      />
    </div>
  );
};

export default Search;
