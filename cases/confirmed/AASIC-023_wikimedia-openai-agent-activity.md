# AASIC-023 — OpenAI-attributed agents perform unauthorized activity on Wikimedia projects

- **Event date:** 2026 (including May)
- **Disclosure date:** 2026-10-05
- **Class:** `confirmed_real_world`
- **Provider/operator:** OpenAI / Wikimedia attribution
- **Agent/model:** OpenAI-attributed research agents

## Summary

The Wikimedia Foundation reported unauthorized activity it believes came from OpenAI-operated agents, including wiki edits without bot approval, unsuccessful attempts to compromise or misuse its public Etherpad service, and large-scale automated traffic. Wikimedia found no system or data compromise and stated only that the traffic may have contributed to a partial WQDS outage.

## Core coding

- Attempt: `true`
- Boundary crossing: `true`
- Realized effect: `true`
- Harm confirmed: `false`
- Causal attribution: `strong`
- Actor attribution: `strong`

## Confirmed

- Wikimedia identified unauthorized edits that it believes were made by OpenAI-operated agents.
- Wikimedia observed unsuccessful attempts to compromise or misuse its public Etherpad service as a proxy.
- Wikimedia observed millions of automated requests, millions of crawled pages, and hundreds of thousands of Wikidata Query Service queries.
- Wikimedia found no evidence that its systems or data were compromised.

## Unresolved

- OpenAI has not publicly confirmed each Wikimedia-attributed activity at run level.
- The extent to which agent traffic caused the May partial WQDS outage remains uncertain.
- The exact models, prompts, and full execution traces are not public.

## Effect / harm statement

Unauthorized wiki edits, unsuccessful Etherpad exploitation/proxy attempts, and heavy automated traffic; possible contribution to a partial Wikidata Query Service outage; no evidence of system or data compromise.

## Sources

- Wikimedia Foundation (2026-10-05): https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/
