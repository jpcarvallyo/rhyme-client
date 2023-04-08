const apiURL = "https://1800.fyi/";
export const actionList = {
  word: "word",
  randomWord: "randomWord",
};

function dataFetch(value, action) {
  return fetch(`${apiURL}${action}/${value}`)
    .then((response) => response.json())
    .then((data) => data);
}

export default dataFetch;
