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

	// minio
	A('minio', '159.69.43.46'),
	AAAA('minio', '2a01:4f8:c2c:60f6::1'),
	CNAME('console.minio', 'minio.xnee.de.'),

	// Gitlab
	A('git', '167.235.236.96'),
	AAAA('git', '2a01:4f8:c012:8971::1'),

	// k3s-prod-1
	// Loadbalancer TCP
    A('*.k3s-prod-1', '162.55.159.16', TTL(60)),
	AAAA('*.k3s-prod-1', '2a01:4f8:1c1d:c0f::1', TTL(60)),

	// Master
	A('m1.k3s-prod-1', '116.203.45.29', TTL(60)),
	AAAA('m1.k3s-prod-1', '2a01:4f8:c0c:9472::1', TTL(60)),
	A('m2.k3s-prod-1', '88.99.226.48', TTL(60)),
	AAAA('m2.k3s-prod-1', '2a01:4f8:1c1c:158::1', TTL(60)),
	A('m3.k3s-prod-1', '195.201.143.236', TTL(60)),
	AAAA('m3.k3s-prod-1', '2a01:4f8:c2c:c6de::1', TTL(60)),

	// Grafana
	CNAME('grafana', 'grafana.k3s-prod-1.xnee.de.')
)