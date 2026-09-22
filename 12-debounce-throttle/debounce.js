function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = (query) => {
  console.log("API CAll", query);
};

const debouncedSearch = debounce(search, 1000);
let input = document.getElementById("search");

input.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
