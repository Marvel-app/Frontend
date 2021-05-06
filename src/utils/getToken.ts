export const getToken = () => {
  const token =
    document.cookie.match('(^|;)\\s*jwt\\s*=\\s*([^;]+)')?.pop() || '';
  return token;
};
