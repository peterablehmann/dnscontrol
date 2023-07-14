/*
   dnsconfig.js: dnscontrol configuration file for Peter Lehmann.
*/

// Providers:

var REG_NONE = NewRegistrar("none");    // No registrar.
var DNS_HETZNER = NewDnsProvider("hetzner");  // Hetzner DNS.

// Domains:
require("zones/bigdriver.net.js");
require("zones/lehmann.zone.js");
require("zones/uic-fahrzeugnummer.de.js");
require("zones/xnee.de.js");
require("zones/xnee.net.js");
require("zones/xxhe.de.js");