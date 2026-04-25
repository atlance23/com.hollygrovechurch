/**
 * Evaluate structured conditionals
 */
function evaluateCondition(cond, scope) {
  if (!cond) return true;

  if (cond.and) {
    return cond.and.every(expr => resolvePath(expr, scope));
  }

  if (cond.or) {
    return cond.or.some(expr => resolvePath(expr, scope));
  }

  if (cond.not) {
    return !resolvePath(cond.not, scope);
  }

  return false;
}
