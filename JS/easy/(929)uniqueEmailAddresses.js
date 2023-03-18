/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let sanitizedEmail = emails.map((email) => {
    let [local, domain] = email.split("@");
    if (local.includes("+")) {
      local = local.slice(0, local.indexOf("+"));
    }
    local = local.replaceAll(".", "");
    return `${local}@${domain}`;
  });
  let uniqueOnly = new Set(sanitizedEmail);
  return uniqueOnly.size;
};
