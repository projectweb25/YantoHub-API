module.exports = function(req) {
  const ua = req.headers['user-agent'] || '';
  const acc = req.headers['accept'] || '';
  if (ua.includes('Roblox') || ua.includes('Xeno') || ua.includes('Delta') || ua === "") {
    return true;
  }
  return !acc.includes('text/html');
};
