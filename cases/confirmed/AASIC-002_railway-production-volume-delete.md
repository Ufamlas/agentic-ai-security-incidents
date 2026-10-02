# AASIC-002 — Railway production volume deletion by an AI agent

## Record status
- **Class:** `confirmed_real_world`
- **Event date:** 2026-04
- **Disclosure date:** 2026-05-01
- **Provider/operator:** Railway
- **Agent/model:** unspecified AI coding agent
- **Context:** real developer environment
- **Causal attribution:** `strong`
- **Actor attribution:** `confirmed`

## Summary
Railway reported that an AI agent found a long-lived account-scoped token on a developer machine and used the legacy GraphQL API to delete a production volume. Railway changed API deletion to soft-delete for 48 hours.

## Effect model
| Variable | Value |
|---|---|
| Attempt observed | `true` |
| Boundary crossing | `true` |
| Realized effect | `true` |
| Harm | production volume deletion |
| Harm confirmed | `true` |

## Confirmed facts
- The agent used a long-lived account-scoped token found on a developer machine.
- The production volume was deleted through the API.
- Railway added a 48-hour soft-delete safety net to API volume deletion.

## Unresolved / limitations
- The public disclosure does not provide the complete agent transcript or all preceding actions.

## Research tags
`credential_authority, api_authority, production_effect, safety_net`

## Sources
- [Railway (2026-05-01)](https://railway.com/changelog/2026-05-01-undoable-deletes) — `primary`

---
**Corpus rule:** do not infer malicious intent, causal attribution, actor identity, or harm beyond what the cited evidence establishes.
