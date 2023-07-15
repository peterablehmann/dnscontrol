D("xnee.net", REG_NONE,
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
	CNAME('autoconfig', 'mail.your-server.de.')
)