let inputVal = document.querySelector("#input");
let msg = document.querySelector("#message");
let countSpacesCheckbox = document.querySelector("#countSpaces");

inputVal.addEventListener("input", () => {
    let val = inputVal.value;
    let charCount;

    // Check if the checkbox is checked to determine how to count characters
    if (countSpacesCheckbox.checked) {
        charCount = val.length; // Count spaces
    } else {
        charCount = val.replace(/\s/g, '').length; // Exclude spaces
    }

    let wordCount = val.trim() === "" ? 0 : val.trim().split(/\s+/).length; // Word count

    // Display the counts
    msg.innerText = `Characters: ${charCount} | Words: ${wordCount}`;
});