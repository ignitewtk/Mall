import { useEffect, useRef, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: { [key: string]: unknown}) => {
  const result = {
    ...object,
  };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  console.log(result);
  return result;
};



// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//       if (timeout) {
//           clearTimeout(timeout)
//       }
//       timeout = setTimeout(function() {
//           func(...param) 
//       }, delay)
//   }
// }

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
      const timeout = setTimeout(() => setDebouncedValue(value), delay)
      return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}


export const useDocumentTitle = (title: string, keepOnUnmunt: boolean = true) => {
  const oldTitle = useRef(document.title).current
  useEffect(() => {
    document.title = title
  }, [title])
  useEffect(() => {
    return () => {
      if (!keepOnUnmunt) {
        document.title = oldTitle
      }
    }
  }, [keepOnUnmunt, oldTitle])
}