/*
   dnsconfig.js: dnscontrol configuration file for Peter Lehmann.
*/

// Providers:

var REG_NONE = NewRegistrar("none");    // No registrar.
var DNS_HETZNER = NewDnsProvider("hetzner");  // Hetzner DNS.

// Domains:

D("bigdriver.net", REG_NONE,
	DnsProvider(DNS_HETZNER),
	DefaultTTL("6h"),
	MX('@', 10, 'www208.your-server.de.'),
	NAMESERVER('helium.ns.hetzner.de.'),
	NAMESERVER('oxygen.ns.hetzner.com.'),
	NAMESERVER('hydrogen.ns.hetzner.com.'),
	SRV('_autodiscover._tcp', 0, 100, 443, 'mail.your-server.de.'),
	SRV('_imaps._tcp', 0, 100, 993, 'mail.your-server.de.'),
	SRV('_pop3s._tcp', 0, 100, 995, 'mail.your-server.de.'),
	SRV('_submission._tcp', 0, 100, 587, 'mail.your-server.de.'),
	CNAME('autoconfig', 'mail.your-server.de.'),
	CNAME('cloud', 'nx24177.your-storageshare.de.'),
	CNAME('www', 'lehmann.zone.')
)

D("lehmann.zone", REG_NONE,
	DnsProvider(DNS_HETZNER),
	DefaultTTL("6h"),
	NAMESERVER('hydrogen.ns.hetzner.com.'),
	NAMESERVER('oxygen.ns.hetzner.com.'),
	NAMESERVER('helium.ns.hetzner.de.'),
	MX('@', 10, 'www208.your-server.de.'),
	SRV('_autodiscover._tcp', 0, 100, 443, 'mail.your-server.de.'),
	SRV('_imaps._tcp', 0, 100, 993, 'mail.your-server.de.'),
	SRV('_pop3s._tcp', 0, 100, 995, 'mail.your-server.de.'),
	SRV('_submission._tcp', 0, 100, 587, 'mail.your-server.de.'),
	CNAME('autoconfig', 'mail.your-server.de.'),
	CNAME('cloud', 'nx24177.your-storageshare.de.'),
	CNAME('www', 'lehmann.zone.'),
    A('@', '78.46.0.148'),
    AAAA('@', '2a01:4f8:d0a:2160::2'),
	TXT('default2307._domainkey', 'v=DKIM1;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoenazkcLnbrxXR9t99nq1kBwSCLRNsX6QztHfH8CPKLHHq9/MnR7Rcn0kVi4tUPR7fwTEaW/OctZaecP7O3bOXP9bg2FXKD+Yb/ps/iHK/ANbWJ6jH5UnJlqm7/0Tyg/g83/FG81UrFefGRMUYXbxBvM7XvvvF5aSQESW93fE1JP7INqo5n18r0zFzWGmxEtdicvrCevGRDLx46TGqJzNEPepME3PrP/Glob2Hy3Eh+3RTfFwJjR51VDGQcLSzbyI34WUOE0HUYqXLh0xI2WLXlne47e4uqAo1xO1HlVrl4T7cBlDSxiYgKnuvIgnHuBGfYhLX2wSOvPzLFC7IKIhwIDAQAB'),
	TXT('@', 'v=spf1 a mx ~all')
)

D("uic-fahrzeugnummer.de", REG_NONE,
	DnsProvider(DNS_HETZNER),
	DefaultTTL(7200),
	TXT('@', 'v=spf1 +a +mx ?all'),
	//NAMESERVER('ns.second-ns.com.'),
	//NAMESERVER('ns3.second-ns.de.'),
	A('@', '78.46.0.148'),
	AAAA('@', '2a01:4f8:d0a:2160::2'),
	MX('@', 10, 'www208.your-server.de.'),
	//NAMESERVER('ns1.your-server.de.'),
	SRV('_autodiscover._tcp', 0, 100, 443, 'mail.your-server.de.'),
	SRV('_imaps._tcp', 0, 100, 993, 'mail.your-server.de.'),
	SRV('_pop3s._tcp', 0, 100, 995, 'mail.your-server.de.'),
	SRV('_submission._tcp', 0, 100, 587, 'mail.your-server.de.'),
	CNAME('autoconfig', 'mail.your-server.de.'),
	A('www', '78.46.0.148'),
	AAAA('www', '2a01:4f8:d0a:2160::2')
)

D("xnee.de", REG_NONE,
	DnsProvider(DNS_HETZNER),
	DefaultTTL(86400),
	MX('@', 10, 'www208.your-server.de.'),
	NAMESERVER('oxygen.ns.hetzner.com.'),
	NAMESERVER('hydrogen.ns.hetzner.com.'),
	NAMESERVER('helium.ns.hetzner.de.'),
	AAAA('sync', '2a01:4f9:c011:aeba::1'),
	A('sync', '135.181.206.213'),
	AAAA('vyos', '2a01:4f8:1c1c:e5c6::1'),
	A('vyos', '116.203.203.78'),
	AAAA('wireguard', '2a01:4f8:c012:23d1::1'),
	A('wireguard', '78.46.178.158')
)

D("xnee.net", REG_NONE,
        DnsProvider(DNS_HETZNER),
        DefaultTTL("6h"),
        MX('@', 1, 'smtp.google.com.', TTL("3600")),
        TXT('@', 'google-site-verification=W0b7D1H3u7ra9NNvgBGE-_U2OdkdpdKXHDBuo6p6OMM'),
        NAMESERVER('hydrogen.ns.hetzner.com.'),
        NAMESERVER('oxygen.ns.hetzner.com.'),
        NAMESERVER('helium.ns.hetzner.de.')
)

D("xxhe.de", REG_NONE,
	DnsProvider(DNS_HETZNER),
	NAMESERVER('hydrogen.ns.hetzner.com.'),
	NAMESERVER('oxygen.ns.hetzner.com.'),
	NAMESERVER('helium.ns.hetzner.de.'),
	A('@', '65.108.86.181'),
	AAAA('@', '2a01:4f9:c012:89c1::1'),
	CNAME('imap.xxhe.de.', 'xxhe.de.'),
	CNAME('mail.xxhe.de.', 'xxhe.de.'),
	CNAME('smtp.xxhe.de.', 'xxhe.de.')
)