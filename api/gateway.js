module.exports = function(req) {
  const ua = req.headers['user-agent'] || '';
  const acc = req.headers['accept'] || '';
  return !acc.includes('text/html') || ua.includes('Roblox') || ua.includes('Xeno') || ua.includes('Delta') || ua === "";
};
