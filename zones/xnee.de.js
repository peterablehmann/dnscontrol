D("xnee.de", REG_NONE,
	DnsProvider(DNS_HETZNER),
	DefaultTTL("6h"),

	// Mail
	MX('@', 10, 'www208.your-server.de.'),
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
	AAAA('wireguard', '2a01:4f8:c012:23d1::1')
	
)