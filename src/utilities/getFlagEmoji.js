/**
 * https://dev.to/jorik/country-code-to-flag-emoji-a21
 * @param {string} countryCode
 * @returns emoji
 */
export function getFlagEmoji(countryCode) {
  return countryCode.replace(/./g, (char) =>
    String.fromCodePoint(127397 + char.charCodeAt())
  );
}
