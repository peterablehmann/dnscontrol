D("xnee.de", REG_NONE,
	DnsProvider(DNS_HETZNER),
	DefaultTTL("6h"),

	// Mail
	MX('@', 10, 'www208.your-server.de.'),
	TXT('default2307._domainkey', 'v=DKIM1;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoenazkcLnbrxXR9t99nq1kBwSCLRNsX6QztHfH8CPKLHHq9/MnR7Rcn0kVi4tUPR7fwTEaW/OctZaecP7O3bOXP9bg2FXKD+Yb/ps/iHK/ANbWJ6jH5UnJlqm7/0Tyg/g83/FG81UrFefGRMUYXbxBvM7XvvvF5aSQESW93fE1JP7INqo5n18r0zFzWGmxEtdicvrCevGRDLx46TGqJzNEPepME3PrP/Glob2Hy3Eh+3RTfFwJjR51VDGQcLSzbyI34WUOE0HUYqXLh0xI2WLXlne47e4uqAo1xO1HlVrl4T7cBlDSxiYgKnuvIgnHuBGfYhLX2wSOvPzLFC7IKIhwIDAQAB'),
	TXT('@', 'v=spf1 mx ~all'),
	TXT('_dmarc', 'v=DMARC1;p=quarantine;sp=quarantine;pct=100;rua=mailto:postmaster@xnee.de;ruf=mailto:postmaster@xnee.de;adkim=s;aspf=s;'),
	SRV('_autodiscover._tcp', 0, 100, 443, 'mail.your-server.de.'),
	SRV('_imaps._tcp', 0, 100, 993, 'mail.your-server.de.'),
	SRV('_pop3s._tcp', 0, 100, 995, 'mail.your-server.de.'),
	SRV('_submission._tcp', 0, 100, 587, 'mail.your-server.de.'),
	CNAME('autoconfig', 'mail.your-server.de.'),

	// Syncthing
	A('sync', '135.181.206.213'),
	AAAA('sync', '2a01:4f9:c011:aeba::1'),

	// VYOS
	A('vyos', '116.203.203.78'),
	AAAA('vyos', '2a01:4f8:1c1c:e5c6::1'),

	// Wireguard
	A('wireguard', '78.46.178.158'),
	AAAA('wireguard', '2a01:4f8:c012:23d1::1'),
	
	// Minio
	A('minio', '167.235.61.248'),
	AAAA('minio', '2a01:4f8:c0c:f0df::1')
)