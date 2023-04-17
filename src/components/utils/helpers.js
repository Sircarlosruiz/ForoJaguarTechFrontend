import { useEffect } from "react";

export const toTitleCase = (str) => {
  str = str.toLowerCase().split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(" ");
};

export const removeDuplicatesByKey = (arr, key) => {
  return arr.reduce((acc, obj) => {
    if (!acc.find((item) => item[key] === obj[key])) {
      acc.push(obj);
    }
    return acc;
  }, []);
};

export const filterDuplicatesInObjectByKey = (object) =>
  Array.from(new Set(object.map((x) => x.key))).map((key) =>
    object.find((a) => a.key === key)
  );

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
