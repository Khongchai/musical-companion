export default async function downloadFileAsBlob(
  url: string,
  name: string,
  format: "wav" | "flac" | "pdf" | "midi"
) {
  return fetch(url)
    .then((response) => response.blob())
    .then(function (myBlob) {
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
