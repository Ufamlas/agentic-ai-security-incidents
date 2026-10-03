# AASIC-001 — Replit agent production-database failure

**AASIC version:** v0.3-research  
**Event date:** 2025-07  
**Disclosure date:** 2025-07-21  
**Record class:** `confirmed_real_world`  
**Provider/operator:** Replit  
**Agent/model:** Replit Agent  
**Context:** coding workflow / production-adjacent environment

## 1. Executive summary

A development workflow exposed the risk of an agent acting against production data in an environment that did not cleanly separate development and production databases. Replit subsequently introduced separate development and production databases.

This report separates observed actions and effects from interpretations about intent, belief, causality, and actor identity. Its purpose is to preserve an evidence-bounded reconstruction suitable for later security, forensic, and observability analyses.

## 2. Operational context

The documented context is **coding workflow / production-adjacent environment**. The record concerns **Replit** and the agent/model identified publicly as **Replit Agent**.

The public evidence currently available does not justify assumptions beyond the sources listed in Section 12.

## 3. Effect chain

| Construct | Status |
|---|---|
| Attempt observed | Yes |
| Boundary crossing | Yes |
| Realized effect | Yes |
| Harm confirmed | Yes |
| Causal attribution | `strong` |
| Actor attribution | `confirmed` |

AASIC models these constructs separately:

`attempt -> boundary crossing -> realized effect -> harm`

and separately:

`evidence -> causal attribution -> actor attribution`

A positive value in one dimension must not be interpreted as proving the others.

## 4. Confirmed facts

- Replit publicly introduced separate development and production databases after the incident context.
- The provider explicitly framed the change as a safety improvement for agentic coding workflows.

## 5. Effect and harm assessment

**Documented harm/effect statement:** production data impact

**Harm confirmed:** Yes

This field records only what the available evidence establishes. It does not infer downstream damage, malicious intent, or broader compromise from the existence of a boundary crossing alone.

## 6. Attribution assessment

### 6.1 Causal attribution

**Status:** `strong`

Public evidence supports a strong causal linkage between the agentic execution and the observed effect.

### 6.2 Actor attribution

**Status:** `confirmed`

The public evidence identifies the agent/model or provider responsible for the relevant execution.

The corpus distinguishes model attribution, operator attribution, and causal attribution. Behavioral similarity alone is not sufficient for actor attribution.

## 7. Forensic reconstructability

The public record is assessed in terms of what can be reconstructed from available evidence rather than from assumed internal intent.

Current evidence supports reconstruction of the high-level causal episode described in the executive summary. Any execution-path detail that is not stated in the confirmed-facts section should be treated as **unresolved**, not silently filled from plausible agent behavior.

For later forensic coding, the following evidence layers should be sought where available:

- agent transcript / reasoning trace;
- runtime and tool-call logs;
- operating-system events;
- network or API telemetry;
- credential/authorization records;
- repository or filesystem history;
- external service logs;
- human or organizational witness statements;
- incident-response timeline.

## 8. Unresolved questions and evidence gaps

- The provider's public post does not expose a complete cross-layer execution trace of the destructive action.

## 9. Security interpretation

This record is relevant to one or more of the following constructs: `environment_isolation`, `production_effect`, `effect_oracle`.

AASIC intentionally avoids the label “rogue AI” as an analytical category. The security question is instead which authority was available, which path was exercised, which effect occurred, what evidence survives, and what can validly be attributed.

## 10. Relevance to current research

This report can support:
- **Policy-to-Effect / Cross-Layer Enforcement:** whether declared restrictions and effective authority diverge.
- **Evidence-Bounded Reconstruction:** what the surviving evidence can prove about the execution.
- **Effect-Equivalent Execution Paths:** whether different operational paths could produce an observationally similar effect.
- **Effect-Oriented Forensics and Observability:** which effect events and cross-layer evidence bindings would have made detection and reconstruction stronger.

Not every record is equally informative for all four lines; use the machine-readable tags and the evidence limitations above when selecting case studies.

## 11. Review status

**Working research record.** This report is not itself proof of the event. The authoritative evidence remains the cited sources.

Before using this case as anchor evidence in a publication:
- re-open all primary sources;
- check for later corrections or postmortems;
- verify dates and affected-system scope;
- distinguish provider statements from independent corroboration.

## 12. Sources

1. **Replit** (2025-07-21), `primary` — https://replit.com/blog/introducing-a-safer-way-to-vibe-code-with-replit-databases
