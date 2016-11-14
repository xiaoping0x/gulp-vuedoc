/**
 * Validate oneOf
 * @param  {Array} vals 枚举值
 * @return {Function}   Vue的validator方法
 */
export default function oneOf(vals) {
  return val => vals.indexOf(val) !== -1;
}
