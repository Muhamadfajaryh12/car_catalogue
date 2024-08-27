const Utils = (() => {
  const getToken = () => {
    return localStorage.getItem("token");
  };

  return {
    getToken,
  };
})();

export default Utils;
