function checkCookieHasASpecificValue() {
  if (document.cookie.split(";").some((item) => item.includes("favorite_task=collect Data"))) {
    const output = document.getElementById("a-specific-value-of-the-cookie");
    output.textContent = '> The cookie "reader" has a value of "1"';
  }
}

function clearASpecificValueOfTheCookie() {
  const output = document.getElementById("a-specific-value-of-the-cookie");
  output.textContent = "";
}
