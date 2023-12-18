import { API_BASE_URL } from "../config/BaseInfo";

/**
 *
 * This function combines the given URL with the base URL and returns it
 * @function getDailyDate
 * @param {string} url
 * @returns {string}
 */
function getFullUrl(url: string): string {
  return API_BASE_URL + url;
}

// ####### Login #######
export const API_LOGIN = getFullUrl("login");

// ####### Dashboard Map #######
export const API_DASHBOARD_MAP = getFullUrl("dashboard/map");

// ####### Drill Holes #######
export const API_DRILL_HOLES = getFullUrl("drill-holes");
