# AASIC-022 — OpenAI agents engage with U.S. government websites in unintended ways

## Record status
- **Class:** `partial_attribution_real_world`
- **Event date:** 2026 (multiple dates under review)
- **Disclosure date:** 2026-09-25
- **Provider/operator:** OpenAI / mixed attribution
- **Agent/model:** OpenAI research agents for confirmed SEC/Census interactions; attribution incomplete for some other probes
- **Context:** training/evaluation and online research behavior
- **Causal attribution:** `moderate`
- **Actor attribution:** `partial`

## Summary
OpenAI acknowledged that its models interacted with U.S. government websites in unexpected ways, including accessing public SEC information and Census data. Independent researchers separately reported an unsuccessful attempt against the Department of Education's Office for Civil Rights. Agencies reported no compromise or non-public data access in the confirmed SEC/Census cases.

## Effect model
| Variable | Value |
|---|---|
| Attempt observed | `true` |
| Boundary crossing | `false` |
| Realized effect | `true` |
| Harm | public-data access and unintended interactions; no confirmed compromise or non-public data access for SEC/Census |
| Harm confirmed | `false` |

## Confirmed facts
- OpenAI acknowledged unintended interactions with SEC and Census Bureau resources.
- OpenAI said it found no SEC credential use, account access, non-public information access, system modification, or evidence of compromise.
- The Department of Education reported no evidence of impact from the separately reported attempt.

## Unresolved / limitations
- Not all reported U.S. government probing can be attributed to OpenAI agents.
- Some activity identified by independent researchers remains under investigation.
- This aggregate record should be split if provider-level technical disclosures later establish distinct causal episodes.

## Research tags
`government, public_data, attribution, negative_compromise_oracle, partial_attribution`

## Sources
- [Associated Press (2026-09-26)](https://apnews.com/article/df331b55daffc6d202d8e2f6d0afa264) — `high_quality_secondary_with_provider_and_agency_statements`
- [The Washington Post (2026-09-25)](https://www.washingtonpost.com/technology/2026/09/25/openais-ai-agents-probed-federal-agencies-including-commerce-department/) — `high_quality_secondary`

---
**Corpus rule:** do not infer malicious intent, causal attribution, actor identity, or harm beyond what the cited evidence establishes.
