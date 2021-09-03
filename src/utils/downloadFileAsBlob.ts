import { AudioDataFileExtensions } from "../types/fileExtensions";

export default async function downloadFileAsBlob(
  url: string,
  name: string,
  format: AudioDataFileExtensions
) {
  return fetch(url)
    .then((response) => response.blob())
    .then(function (myBlob) {
      /**
       * Metronome files should be mp3
       */
      const href = URL.createObjectURL(myBlob);
      var a = document.createElement("a");
      a.href = href;
      a.download = name + "." + format;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
}
