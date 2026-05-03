# Tools of the Trade

A quick rundown of tools worth having on any system.

## Recon

- `nmap` — port scanning and service detection
- `whois` — domain/IP registration lookup
- `dig` — DNS query tool

## Analysis

- `strings` — extract printable strings from binaries
- `file` — identify file type
- `xxd` — hex dump

## Example: quick nmap scan

```bash
nmap -sV -T4 -p 1-1000 target.example.com
```

Output shows open ports and running service versions. Feed that into your next step.

---

stay curious, stay careful
