export default function useDecode(encodedString) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(encodedString, "text/html");
  return doc.documentElement.textContent;
}
