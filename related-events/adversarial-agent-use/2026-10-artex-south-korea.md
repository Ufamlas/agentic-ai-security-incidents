# ARTEX / South Korean finance campaign

**Classification:** human-directed malicious agent use  
**AASIC status:** related event; excluded from the primary rogue/misalignment corpus

CrowdStrike reported a campaign against South Korean financial organizations
in late September and early October 2026. Threat-actor infrastructure exposed
Claude Code session histories, ARTEX configuration files, and Claude memory
files. CrowdStrike reported data exfiltration and described ARTEX and multiple
LLM backends as components of the operator's workflow.

The case is important for agentic forensics because agent-session history,
configuration, persistent memory, infrastructure evidence, and victim-side
effects coexist in one investigation.

It is not classified as an autonomous/misaligned-agent episode because the
public evidence describes a human-directed adversary using agentic tools.

Technical source:
https://www.crowdstrike.com/en-us/blog/unknown-threat-actor-uses-artex-to-target-south-korean-finance/
