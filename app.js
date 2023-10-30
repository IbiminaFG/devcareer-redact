const buttonElement = document.getElementById("redact-button");

buttonElement.addEventListener("click", function () {
  const textareaElement = document.getElementById("content");
  const wordsToRedact = document
    .getElementById("words-to-redact")
    .value.split(" ");
  const replacement = document.getElementById("replacement").value;
  const redactedContentElement = document.getElementById("redacted-content");
  let redactedContent = textareaElement.value;

  let replacementValue = "";

  if (replacement) {
    for (let i = 0; i <= 4; i++) {
      replacementValue = replacementValue + replacement;
    }
  } else {
    replacementValue = "*****";
  }
  console.log(replacementValue);

  wordsToRedact.forEach((word) => {
    redactedContent = redactedContent.replace(
      new RegExp(word, "gi"),
      replacementValue.slice(0, 5)
    );
  });

  redactedContentElement.textContent = redactedContent;
});
