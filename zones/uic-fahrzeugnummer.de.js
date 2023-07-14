D("uic-fahrzeugnummer.de", REG_NONE,
	DnsProvider(DNS_HETZNER),
	DefaultTTL("6h"),

	// Mail
	MX('@', 10, 'www208.your-server.de.'),
	SRV('_autodiscover._tcp', 0, 100, 443, 'mail.your-server.de.'),
	SRV('_imaps._tcp', 0, 100, 993, 'mail.your-server.de.'),
	SRV('_pop3s._tcp', 0, 100, 995, 'mail.your-server.de.'),
	SRV('_submission._tcp', 0, 100, 587, 'mail.your-server.de.'),
	CNAME('autoconfig', 'mail.your-server.de.'),

	// Website
	A('@', '78.46.0.148'),
	AAAA('@', '2a01:4f8:d0a:2160::2'),
	CNAME('www', 'uic-fahrzeugnummer.de.')
)