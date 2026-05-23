# First profile post — vibe-coded MVPs to production-grade

The demo works. The prototype ships. Ten users love it.

Then user eleven shows up on Safari, the database hits 80% disk, and the AI-generated auth code is storing passwords in plaintext because nobody asked it not to.

Vibe coding gets a product to "it works on my machine" faster than ever. What it does not surface is which of the 47 packages it pulled in has a known CVE, why an N+1 query becomes a 6-second page load at 10k rows, or what a rollback looks like at 3am with paying customers on the line.

The bugs that used to surface in week two now surface at $50k MRR, when there is a contract and an SLA attached.

A few things a decade of shipping software teaches you to look for early:

— Which corners are safe to cut, and which come back as a 2am page
— The architecture choices that scale 100 → 100k without a rewrite
— The one query, in a codebase you have never seen, running the bill up
— The boring infrastructure — backups, monitoring, secrets, rollbacks — written before it is needed

None of this is glamorous. It is also the difference between a demo and a business.

#software #engineering #startups
