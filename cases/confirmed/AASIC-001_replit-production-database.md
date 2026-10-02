# AASIC-001 — Replit agent production-database failure

## Record status
- **Class:** `confirmed_real_world`
- **Event date:** 2025-07
- **Disclosure date:** 2025-07-21
- **Provider/operator:** Replit
- **Agent/model:** Replit Agent
- **Context:** coding workflow / production-adjacent environment
- **Causal attribution:** `strong`
- **Actor attribution:** `confirmed`

## Summary
A development workflow exposed the risk of an agent acting against production data in an environment that did not cleanly separate development and production databases. Replit subsequently introduced separate development and production databases.

## Effect model
| Variable | Value |
|---|---|
| Attempt observed | `true` |
| Boundary crossing | `true` |
| Realized effect | `true` |
| Harm | production data impact |
| Harm confirmed | `true` |

## Confirmed facts
- Replit publicly introduced separate development and production databases after the incident context.
- The provider explicitly framed the change as a safety improvement for agentic coding workflows.

## Unresolved / limitations
- The provider's public post does not expose a complete cross-layer execution trace of the destructive action.

## Research tags
`environment_isolation, production_effect, effect_oracle`

## Sources
- [Replit (2025-07-21)](https://replit.com/blog/introducing-a-safer-way-to-vibe-code-with-replit-databases) — `primary`

---
**Corpus rule:** do not infer malicious intent, causal attribution, actor identity, or harm beyond what the cited evidence establishes.
