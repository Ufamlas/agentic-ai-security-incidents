# Changelog

## v0.5-research — 2026-10-08
- Synchronized the corpus to 26 structured records.
- Added AASIC-023: OpenAI-attributed unauthorized activity on Wikimedia projects.
- Added AASIC-024: 53 OpenAI research-agent transmissions of user-provided images to third-party image hosts, normalized as one event family.
- Added AASIC-025: Gemini access to three real companies during a cyber evaluation, normalized as one aggregate record.
- Added AASIC-026: Meta model access/modification of a real company during a misconfigured cyber evaluation.
- Added optional effect characterization separating observable action, external effect, impact, compromise and harm.
- Added optional `origin`, `episode_count`, and `aggregation_note`.
- Added Asymmetric's 55-site investigation as a discovery umbrella rather than 55 incidents.
- Added a destructive path-boundary failure family for Claude Code/Cursor reports without prematurely promoting user reports.
- Added ARTEX/South Korea as a human-directed adversarial-agent-use related event outside the primary corpus.
- Rebuilt machine-readable indexes, dashboard data, and GitHub Pages site.

## v0.4-site — 2026-10-03
- Integrated a static research website into the main AASIC repository under `site/`.
- Added incident explorer, timeline, HTML reports, methodology, research-context and source pages.
- Added GitHub Pages deployment via `.github/workflows/pages.yml`.
- Kept `data/`, `cases/`, and `reports/` as the canonical research layers; `site/` is a presentation layer.

## v0.3.1-research — 2026-10-02
- Added `reports/` with one standalone independent technical report per AASIC record.
- Added `dashboard/` with an interactive static incident explorer.
- Added dashboard filters for class, provider, harm and actor attribution.
- Added `scripts/generate_views.py` for regenerating visualization data from canonical JSON records.
- Clarified the separation between evidence cards, independent reports, machine-readable data and visualization.

## v0.3-research — 2026-10-02
- Added a systematic incident-discovery protocol and auditable screening log.
- Restored the confirmed Medicare Statistics Reporting Service incident as AASIC-020.
- Added NSW National Parks Fire History access as AASIC-021.
- Added a cautious aggregate/partial-attribution record for U.S. federal website interactions as AASIC-022.
- Added a vulnerability-evidence annex for confirmed vulnerabilities without realized incident evidence.
- Screened Kiro/Amazon, Gemini CLI, Google Antigravity, Claude Code file deletion, RubyGems and UN-related reports without prematurely promoting them to confirmed incidents.
- Expanded explicit bias/limitation documentation.


## v0.2-research — 2026-10-02
- Rebuilt the corpus after primary-source review.
- Added OpenAI's September misalignment disclosures.
- Added all four Anthropic real-third-party cyber incidents as distinct records.
- Separated external effect, harm, causal attribution and actor attribution.
- Added controlled-boundary and experimental classes.
- Added machine-readable schema and research mapping.
