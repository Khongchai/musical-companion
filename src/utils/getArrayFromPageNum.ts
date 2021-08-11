export default function extractPagesFromTotalNumberOfPages(totalPages: number) {
  const arr = [];
  for (let i = 0; i < totalPages; i++) {
    arr.push(i + 1);
  }
  return arr;
}
