# v0.3 Systematic Incident Discovery Protocol

**Corpus:** AASIC — Agentic AI Security Incident Corpus  
**Pass date:** 2026-10-02  
**Search window:** 2024-01-01 through 2026-10-02  
**Purpose:** high-recall discovery of publicly documented security-relevant behavior by LLM agents, followed by evidence-bounded screening.

## Scope
This is a systematic **incident-discovery pass**, not a systematic literature review and not a prevalence study. The unit of analysis is a **causal episode**, not a headline, tool call, message, or individual action.

## Inclusion criteria
A candidate enters screening when:
1. an LLM-based agent or agentic system took, attempted, or autonomously selected a consequential action;
2. the episode concerns unauthorized authority use, boundary crossing, destructive modification, credential use/disclosure, unauthorized external communication/publication, cross-agent communication, identity misrepresentation, evidence manipulation, or controlled misalignment relevant to agent security;
3. the event occurred on or after 2024-01-01;
4. at least one retrievable public source exists.

## Exclusion / deferral criteria
Do not promote a candidate when the evidence is only anecdotal/unattributed, purely hypothetical, vulnerability-only without realized agent action, duplicate/sub-action, speculative attribution, or when attempted access is conflated with compromise.

Deferred candidates remain in `data/discovery_screening.csv`.

## Evidence hierarchy
1. Provider/operator incident report or security disclosure.
2. Affected organization or government statement.
3. Independent technical investigation with artifacts/transcripts/logs.
4. Major wire/service reporting quoting named parties.
5. Specialist technical reporting.
6. User reports, forums and GitHub issues.
7. Aggregators and incident indexes for discovery only.

## Search families
Queries combined terms such as `"AI agent" incident`, `"LLM agent" unauthorized`, `"AI coding agent" deleted production`, `"AI agent" sandbox escape`, `"AI agent" government website`, `"AI agent" leaked token`, and `"agentic AI" security incident`.

Product families included OpenAI/Codex, Anthropic/Claude, Replit, Cursor, Railway, Gemini CLI, Antigravity, Amazon Q and Kiro. Effect families included database/filesystem deletion, credential use, public upload, prompt injection, Internet egress, social engineering and third-party compromise.

## Core empirical variables
AASIC separates:

`attempt -> boundary_crossing -> realized_effect -> harm`

from:

`evidence -> causal_attribution -> actor_attribution`

These dimensions must not be collapsed into a single severity or “rogue” label.

## Biases and limitations
Disclosure bias, press amplification bias, English-language/indexing bias, survivorship bias, attribution bias, provider self-report bias, and temporal bias all apply. The number of records must never be interpreted as incident prevalence.
