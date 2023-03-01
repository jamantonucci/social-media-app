export const appName = "Social Media App";

/**
 * List of available categories
 */
export const categories = [
  { id: "edu", text: "Education" },
  { id: "ent", text: "Entertainment" },
  { id: "nws", text: "News" },
  { id: "gam", text: "Games" },
  { id: "etc", text: "Other" },
];

/**
 * Get category from its id
 * @param {string} id 
 *  The id of the category to retrieve
 * @returns 
 *  The category text
 */
export const getCategory = (id) => {
  const item = categories.find(
    (category) => category.id === id
  );
  return item?.text || "None";
}

/**
 * List of available statuses
 */
export const statuses = [
  { id: "d", text: "Draft" },
  { id: "p", text: "Published" },
  { id: "a", text: "Archived" },
];

/**
 * Get status from its id
 * @param {string} id
 *  The id of the status to retrieve 
 * @returns 
 *  The status text
 */
export const getStatus = (id) => {
  const item = statuses.find(
    (postStatus) => postStatus.id === id
  );
  return item?.text || "Not set";
}

// Two ways to export: as default, or as "named"
// Named exports must be surrounded by { curly braces }
// in both the import and export statements.
// export default appName; // Only one default export per file.
// export { postStatus, postCategories };
