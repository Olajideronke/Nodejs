// dns: The dns module provides methods for performing DNS lookups

const dns = require('dns');

// Resolving a domain name to an IP address
dns.resolve('www.example.com', (err, addresses) => {
  if (err) throw err;
  console.log(addresses);
});


