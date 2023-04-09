export function getPixelsRGB(imageElement) {
  let canvas = document.createElement("canvas");
  canvas.width = 3;
  canvas.height = 3;

  let context = canvas.getContext("2d");
  context.width = 3;
  context.height = 3;

  context.drawImage(imageElement, 0, 0, 10, 10);

  let pixels = context.getImageData(2, 1, 1, 1).data;

  const rgb = `rgba(${pixels[0]},${pixels[1]},${pixels[2]},0.5)`;
  return rgb;
}
