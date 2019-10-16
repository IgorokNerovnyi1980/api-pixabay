const key = "12890359-830a9631307ee9805698c2d1f";

function random() {
  const result = Math.floor(Math.random() * Math.floor(1000));
  return result;
}

// export const id = String(random());
export const img = `https://pixabay.com/api/?key=${key}&id=`;
export const video = `https://pixabay.com/api/videos/?key=${key}&id=`;

export const arrId = function(num) {
  const value = num;
  const result = Array(value)
    .fill("")
    .map(item => (item = String(random())));
  return result;
};
