# Agentic AI Security Incidents

Evidence-bounded research corpus for documented security-relevant actions by LLM agents.

**Dataset name:** AASIC — Agentic AI Security Incident Corpus  
**Repository:** `agentic-ai-security-incidents`  
**Version:** v0.2-research  
**Cutoff:** 2026-10-02

## Why this exists

Headlines frequently collapse very different phenomena into “rogue AI”: production incidents, misconfigured evaluations, controlled red-team demonstrations, agent spam, and simulation-only alignment failures. This repository keeps those categories separate and records what the evidence actually establishes.

## Current corpus

The current research pass contains 19 structured records:
- confirmed real-world incidents and real external effects,
- partially attributed real-world activity,
- controlled boundary crossings,
- controlled misalignment,
- simulation-only evidence.

The number of records is **not** an incident prevalence estimate.

## Repository layout

- `cases/confirmed/` — confirmed incidents / real external effects
- `cases/partial-attribution/` — activity with unresolved attribution
- `cases/controlled-boundary-crossing/` — real control-boundary violations without documented external harm
- `experimental/` — controlled misalignment and simulation-only evidence
- `data/` — machine-readable JSON/JSONL/CSV
- `schema/` — JSON Schema
- `docs/methodology.md` — evidence policy
- `docs/research-mapping.md` — mapping to our papers and TCC
- `sources/` — source manifest
- `scripts/` — validation utilities

## Scientific caution

AASIC does not infer malicious intent from harmful effects and does not treat chain-of-thought as ground truth. `attempt`, `boundary_crossing`, `effect`, `harm`, `causal_attribution`, and `actor_attribution` are separate fields.

## Citation status

This repository is a working research artifact, not yet a peer-reviewed dataset. Before publication, every record should receive dual review and source archival where licensing permits.
