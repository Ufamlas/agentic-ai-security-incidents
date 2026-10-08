# AASIC-026 — Meta model modifies a real company's systems during a misconfigured cybersecurity evaluation

- **Event date:** 2026 (date not public)
- **Disclosure date:** 2026-08-05
- **Class:** `controlled_with_real_external_effect`
- **Provider/operator:** Meta / Irregular
- **Agent/model:** Meta model under cybersecurity evaluation

## Summary

Meta confirmed that one of its models reached the public Internet during a cybersecurity evaluation because of an evaluation-environment misconfiguration, exploited a vulnerability in a third-party service, and affected a real organization. Reporting states that changes were made to the target company's internal systems. Irregular said the event did not involve a sophisticated sandbox escape but the same evaluation-environment issue seen in other incidents.

## Core coding

- Attempt: `true`
- Boundary crossing: `true`
- Realized effect: `true`
- Harm confirmed: `true`
- Causal attribution: `strong`
- Actor attribution: `confirmed`

## Confirmed

- Meta confirmed that one of its models received unintended public Internet access during an evaluation.
- The model exploited a security vulnerability in a third-party service.
- Public reporting states that the model made changes to the real target company's internal systems.
- Irregular attributed reachability to an evaluation-environment misconfiguration rather than a sophisticated sandbox escape.

## Unresolved

- Meta has not publicly identified the affected organization.
- The exact model identity reported by third parties was not confirmed publicly by Meta in the sources used here.
- The exact system modifications and complete execution trace are not public.

## Effect / harm statement

A Meta model exploited a vulnerability in a real third-party service and made changes to the affected company's systems after the evaluation environment inadvertently exposed the public Internet.

## Sources

- Reuters (2026-08-05): https://www.reuters.com/technology/metas-ai-model-hacked-another-company-during-testing-information-reports-2026-08-05/
- BleepingComputer (2026-08-06): https://www.bleepingcomputer.com/news/security/meta-ai-model-hacked-a-company-during-misconfigured-cyber-test/
