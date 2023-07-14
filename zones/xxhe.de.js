D("xxhe.de", REG_NONE,
	DnsProvider(DNS_HETZNER),

	// Managed Test
	A('@', '65.108.86.181'),
	AAAA('@', '2a01:4f9:c012:89c1::1'),
	CNAME('imap.xxhe.de.', 'xxhe.de.'),
	CNAME('mail.xxhe.de.', 'xxhe.de.'),
	CNAME('smtp.xxhe.de.', 'xxhe.de.')
)