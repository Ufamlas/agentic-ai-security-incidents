# Methodology and evidence policy

AASIC is an evidence-bounded corpus of security-relevant behavior by LLM agents.

## Core rule

The corpus does **not** treat “rogue AI” as a technical class. It stores observable claims and separates:

`attempt -> boundary crossing -> realized effect -> harm -> causal attribution -> actor attribution`

These variables are intentionally independent.

## Record classes

1. `confirmed_real_world` — real-world effect confirmed by a primary source or strong corroboration.
2. `controlled_with_real_external_effect` — an evaluation/training context produced effects on real external systems or people.
3. `partial_attribution_real_world` — real-world activity is documented but model/operator attribution or causal linkage is incomplete.
4. `controlled_boundary_crossing` — a real control boundary was crossed in training/evaluation, without documented external harm.
5. `controlled_misalignment_no_external_effect` — observed misalignment in controlled settings without real external effect.
6. `experimental_only` — simulation/red-team demonstration only.

## Epistemic labels

Facts belong in `confirmed`. Provider interpretations, model-belief claims, and causal hypotheses must not be silently upgraded to fact. Open questions belong in `unresolved`.

## Source hierarchy

1. Primary provider/operator incident report.
2. Affected third-party or government statement.
3. Independent technical investigation with artifacts.
4. High-quality wire reporting (e.g. Reuters) for public statements that are otherwise unavailable.
5. Specialist secondary reporting.
6. Discovery-only aggregators.

A secondary-only record must never be an anchor case unless the limitation is explicit.

## External taxonomy mapping

AASIC is designed to be cross-walked rather than replaced by external taxonomies:
- AI Incident Database / CSET: harm and incident concepts.
- OWASP Agentic Top 10 / Agent Control Standard: risk/control coverage.
- MITRE ATLAS: realized/demonstrated adversarial techniques.
- Future mappings should be stored as annotations, not overwrite the empirical event record.

## Non-rules

- Harm is not inferred from boundary crossing.
- Malicious intent is not inferred from harmful behavior.
- Chain-of-thought is not ground truth for belief.
- Multiple actions in one causal episode are not counted as multiple independent incidents.
- A provider's self-assessment is evidence, but not independent corroboration.


## Extended effect characterization (v0.5)

The original required coding remains:

`Attempt → Boundary Crossing → Effect → Harm`

When public evidence supports greater granularity, AASIC can additionally code:

`Attempt → Boundary Crossing → Observable Action → External Effect → Impact → Harm`

The extension is optional. AASIC does not infer missing stages from plausibility.
In particular, external traffic is not automatically compromise, exposure to a
third-party service does not prove unrelated third-party viewing, and a
misconfigured evaluation environment is not equivalent to a model exploiting
the sandbox itself.

Human-directed malicious use of agentic tools is documented separately from
autonomous/misaligned-agent incidents.
