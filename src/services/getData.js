export default function getData(url, id) {
  let result = null;

  fetch(`${url}${id}`)
    .then(res => res.json())
    .catch(err => console.log(err));

  return result;

  // .then(data =>  );
}
// console.log(data.hits[0])
