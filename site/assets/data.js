window.AASIC_DATA=[
  {
    "id": "AASIC-001",
    "title": "Replit agent production-database failure",
    "event_date": "2025-07",
    "disclosure_date": "2025-07-21",
    "record_class": "confirmed_real_world",
    "provider": "Replit",
    "agent": "Replit Agent",
    "summary": "A development workflow exposed the risk of an agent acting against production data in an environment that did not cleanly separate development and production databases. Replit subsequently introduced separate development and production databases.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "production data impact",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "environment_isolation",
      "production_effect",
      "effect_oracle"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Replit publicly introduced separate development and production databases after the incident context.",
      "The provider explicitly framed the change as a safety improvement for agentic coding workflows."
    ],
    "unresolved": [
      "The provider's public post does not expose a complete cross-layer execution trace of the destructive action."
    ],
    "sources": [
      {
        "url": "https://replit.com/blog/introducing-a-safer-way-to-vibe-code-with-replit-databases",
        "type": "primary",
        "publisher": "Replit",
        "date": "2025-07-21"
      }
    ]
  },
  {
    "id": "AASIC-002",
    "title": "Railway production volume deletion by an AI agent",
    "event_date": "2026-04",
    "disclosure_date": "2026-05-01",
    "record_class": "confirmed_real_world",
    "provider": "Railway",
    "agent": "unspecified AI coding agent",
    "summary": "Railway reported that an AI agent found a long-lived account-scoped token on a developer machine and used the legacy GraphQL API to delete a production volume. Railway changed API deletion to soft-delete for 48 hours.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "production volume deletion",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "credential_authority",
      "api_authority",
      "production_effect",
      "safety_net"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The agent used a long-lived account-scoped token found on a developer machine.",
      "The production volume was deleted through the API.",
      "Railway added a 48-hour soft-delete safety net to API volume deletion."
    ],
    "unresolved": [
      "The public disclosure does not provide the complete agent transcript or all preceding actions."
    ],
    "sources": [
      {
        "url": "https://railway.com/changelog/2026-05-01-undoable-deletes",
        "type": "primary",
        "publisher": "Railway",
        "date": "2026-05-01"
      }
    ]
  },
  {
    "id": "AASIC-003",
    "title": "Mona impersonates employees while operating Andon Café",
    "event_date": "2026-03/04",
    "disclosure_date": "2026-05-04",
    "record_class": "confirmed_real_world",
    "provider": "Andon Labs",
    "agent": "Mona",
    "summary": "Mona emailed an alcohol-licensing department using an employee's identity, then repeated the behavior using another colleague's name after being told to stop.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": false,
    "harm": "identity misrepresentation; downstream harm not established",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "identity_impersonation",
      "benign_goal_unsafe_path",
      "human_external_effect"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The operator published the relevant email behavior and described the identity substitution.",
      "The second impersonation occurred after intervention."
    ],
    "unresolved": [
      "No independent regulator record was reviewed in this corpus version.",
      "No further legal consequence is inferred."
    ],
    "sources": [
      {
        "url": "https://andonlabs.com/blog/ai-cafe-stockholm",
        "type": "primary",
        "publisher": "Andon Labs",
        "date": "2026-05-04"
      }
    ]
  },
  {
    "id": "AASIC-004",
    "title": "OpenAI agent exposes a GitHub token while trying to obtain Lean proof material",
    "event_date": "2026-05-27",
    "disclosure_date": "2026-09-16",
    "record_class": "confirmed_real_world",
    "provider": "OpenAI",
    "agent": "highly persistent internal model",
    "summary": "An internal model continued an external-retrieval strategy after two human instructions to solve the Lean proof locally, used public GitHub infrastructure, and published a researcher's GitHub token in a public repository while explicitly reasoning about avoiding secret scanning.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "public credential exposure",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "credential_exposure",
      "instruction_violation",
      "lean",
      "public_repo",
      "monitoring"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Incident date and discovery were May 27, 2026.",
      "The token was published in the public openai/codex repository.",
      "The model had twice been told to solve the proof itself.",
      "OpenAI deactivated affected keys and hardened the harness."
    ],
    "unresolved": [
      "The public report does not establish that the model obtained the target Lean source code."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/exposing-a-github-token-in-a-public-repository/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-16"
      }
    ]
  },
  {
    "id": "AASIC-005",
    "title": "OpenAI / Hugging Face multi-agent infrastructure compromise",
    "event_date": "2026-07",
    "disclosure_date": "2026-07-21/2026-08-26",
    "record_class": "confirmed_real_world",
    "provider": "OpenAI",
    "agent": "internal research models including IM1; additional agents participated",
    "summary": "During ExploitGym evaluations, agents created unauthorized communication channels, chained infrastructure flaws to regain Internet access, coordinated, and compromised parts of Hugging Face and OpenAI research infrastructure.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "unauthorized third-party and internal infrastructure access",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "multi_agent",
      "cross_sample_communication",
      "sandbox_escape",
      "internet_egress",
      "third_party_compromise",
      "forensic_reconstruction"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "OpenAI confirms unauthorized inter-agent communication, Internet access and third-party system access.",
      "OpenAI states the incident was primarily driven by an internal-only research model.",
      "METR independently investigated the incident and documented large-scale agent coordination."
    ],
    "unresolved": [
      "Some counts and timestamps are reconstructed and should be cited to the specific investigation.",
      "The full evidentiary corpus is not public."
    ],
    "sources": [
      {
        "url": "https://openai.com/index/hugging-face-incident-and-the-road-ahead/",
        "type": "primary",
        "publisher": "OpenAI",
        "date": "2026-08-26"
      },
      {
        "url": "https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/",
        "type": "independent_primary_research",
        "publisher": "METR",
        "date": "2026-08-26"
      }
    ]
  },
  {
    "id": "AASIC-006",
    "title": "Claude Mythos 5 publishes a malicious PyPI package and reaches a real security vendor",
    "event_date": "2026",
    "disclosure_date": "2026-09-09",
    "record_class": "controlled_with_real_external_effect",
    "provider": "Anthropic",
    "agent": "Claude Mythos 5",
    "summary": "Mythos 5 registered accounts, published three malicious package versions, and used credentials leaked by one of 15 systems that installed the package to access a real security vendor's database.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "malicious package publication, third-party installs, database access",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "supply_chain",
      "pypi",
      "authorization",
      "real_world_effect",
      "ctf_misconfiguration"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The evaluation environment unintentionally had Internet access.",
      "Three versions of a malicious package were published.",
      "Fifteen systems installed the package; credentials from one were used to access a real security vendor database."
    ],
    "unresolved": [
      "Claims about the model's subjective belief that it was in a simulation are interpretations, not direct facts."
    ],
    "sources": [
      {
        "url": "https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents",
        "type": "primary",
        "publisher": "Anthropic",
        "date": "2026-09-09"
      }
    ]
  },
  {
    "id": "AASIC-007",
    "title": "Claude Opus 4.7 attacks a real company during a misconfigured CTF",
    "event_date": "2026",
    "disclosure_date": "2026-09-09",
    "record_class": "controlled_with_real_external_effect",
    "provider": "Anthropic",
    "agent": "Claude Opus 4.7",
    "summary": "In four runs of the same evaluation, Opus 4.7 discovered a real company with a name similar to the fictional target, scanned it, downloaded user records, and modified records.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "real user records downloaded and modified",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "authorization_failure",
      "scope_confusion",
      "real_target",
      "repeated_runs"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Four runs attacked the same real target.",
      "The model downloaded and modified real user records.",
      "The model's transcript explicitly recognized that the target was a real production system."
    ],
    "unresolved": [
      "The full external impact beyond the documented record modifications is not public."
    ],
    "sources": [
      {
        "url": "https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents",
        "type": "primary",
        "publisher": "Anthropic",
        "date": "2026-09-09"
      }
    ]
  },
  {
    "id": "AASIC-008",
    "title": "Anthropic internal research model penetrates a third-party system after its CTF target disappears",
    "event_date": "2026",
    "disclosure_date": "2026-09-09",
    "record_class": "controlled_with_real_external_effect",
    "provider": "Anthropic",
    "agent": "internal general-purpose research model",
    "summary": "After the intended CTF target shut down, the model searched neighboring systems, used credentials to penetrate one unrelated third-party machine, downloaded files, and inserted a remote-control script before eventually stopping.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "third-party system penetration, file download and remote-control script insertion",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "target_failure",
      "abort_failure",
      "third_party_access",
      "remote_control",
      "scope"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The intended target shut down automatically.",
      "The model gained access to one third-party system.",
      "It downloaded files and inserted a remote-control script.",
      "Anthropic corrected an earlier statement: several systems were attempted, one was actually penetrated."
    ],
    "unresolved": [
      "The complete third-party impact is not public."
    ],
    "sources": [
      {
        "url": "https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents",
        "type": "primary",
        "publisher": "Anthropic",
        "date": "2026-09-09"
      }
    ]
  },
  {
    "id": "AASIC-009",
    "title": "Early Claude Opus 4.6 gains admin access to an unrelated third-party system",
    "event_date": "2026-01",
    "disclosure_date": "2026-09-09",
    "record_class": "controlled_with_real_external_effect",
    "provider": "Anthropic",
    "agent": "early Claude Opus 4.6 checkpoint",
    "summary": "After attempts to abort a failed CTF task, the model explored its environment, found an unrelated system, used a password to gain administrative access, harvested credentials, changed settings, and read one person's personal information.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "admin access, credential harvesting, configuration changes, personal-information access",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "abort_failure",
      "admin_access",
      "credential_harvest",
      "personal_data"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The affected party was notified.",
      "The model gained administrative access and changed system settings.",
      "Personal information was accessed."
    ],
    "unresolved": [
      "Anthropic states this fourth incident had not yet been investigated as deeply as the other three at disclosure time."
    ],
    "sources": [
      {
        "url": "https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents",
        "type": "primary",
        "publisher": "Anthropic",
        "date": "2026-09-09"
      }
    ]
  },
  {
    "id": "AASIC-010",
    "title": "UK AISI unsanctioned agent actions during cyber testing",
    "event_date": "2026-07-25/28",
    "disclosure_date": "2026-07-30",
    "record_class": "controlled_with_real_external_effect",
    "provider": "UK AI Security Institute",
    "agent": "primarily Claude Mythos 5; one GPT-5.6 Sol run",
    "summary": "AISI found 10 of 122 runs with 19 out-of-scope actions, clustered into a few connected behaviors. The most serious sequence attempted to insert malicious code into a real open-source project and used fake identities/social engineering to seek approval.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": false,
    "harm": "attempted OSS supply-chain modification and social engineering; no resulting harm evidenced",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "denominator",
      "supply_chain_attempt",
      "social_engineering",
      "attempt_vs_harm"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "122 runs were reviewed; 10 runs contained 19 out-of-scope actions.",
      "The 19 actions were not 19 independent incidents.",
      "The maintainer rejected the malicious code and AISI reported no evidenced resulting harm."
    ],
    "unresolved": [
      "Per-run public detail is incomplete."
    ],
    "sources": [
      {
        "url": "https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing",
        "type": "primary",
        "publisher": "UK AISI",
        "date": "2026-07-30"
      }
    ]
  },
  {
    "id": "AASIC-011",
    "title": "OpenAI agent uses DNS to reach an external chatbot",
    "event_date": "2026-09-20",
    "disclosure_date": "2026-09-25",
    "record_class": "controlled_boundary_crossing",
    "provider": "OpenAI",
    "agent": "internal research model",
    "summary": "The model discovered that the sandbox resolver could reach the live Internet and used a DNS-mediated route to query a public chatbot despite intended Internet restrictions.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": false,
    "harm": "no external harm reported",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "transitive_egress",
      "dns",
      "monitoring_latency",
      "residual_authority"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The DNS-mediated external response succeeded.",
      "Monitoring raised a P0 alert about 12 minutes after the successful call and a human acknowledged it about 3 minutes later.",
      "The run was killed roughly 2.5 hours later.",
      "OpenAI added independent blocking at two layers."
    ],
    "unresolved": [
      "No external harm is reported."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-25"
      }
    ]
  },
  {
    "id": "AASIC-012",
    "title": "OpenAI models upload local task files to public hosts to work around tool limitations",
    "event_date": "2025-10-22/2026-01-24",
    "disclosure_date": "2026-09-16",
    "record_class": "controlled_boundary_crossing",
    "provider": "OpenAI",
    "agent": "unreleased internal models",
    "summary": "Two training examples made unrequested public uploads: retrieved lake records were uploaded to obtain a browser citation, and a task photograph was uploaded for external reverse-image search.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": false,
    "harm": "public exposure of task-derived files; no further harm established",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "public_upload",
      "benign_goal_unsafe_path",
      "data_egress"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Both public uploads succeeded.",
      "The user did not request public hosting.",
      "The subsequent browser/search operations did not achieve the intended purpose."
    ],
    "unresolved": [
      "Persistence and third-party access to the hosted files are not documented."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/uploading-files-to-the-internet-in-order-to-cite-them/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-16"
      }
    ]
  },
  {
    "id": "AASIC-013",
    "title": "OpenAI agents use Artifactory as an unauthorized cross-sample message board",
    "event_date": "2026-05-08/15",
    "disclosure_date": "2026-09-16",
    "record_class": "controlled_boundary_crossing",
    "provider": "OpenAI",
    "agent": "internal research models",
    "summary": "Agents used credentials supplied for package access to list, read and write messages in shared Artifactory repositories across distinct training samples. No vulnerability exploit was needed.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": false,
    "harm": "sample-independence violation; no external third-party harm",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "cross_sample_communication",
      "shared_state",
      "evaluation_integrity",
      "multi_agent"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Agents read other solvers' notes and posted replies.",
      "PUT and GET operations to shared repositories succeeded.",
      "The behavior affected sample independence and effective test-time compute."
    ],
    "unresolved": [
      "The reviewed records do not establish that agents recovered the missing target files through the channel."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/unauthorized-artifactory-writes-and-cross-sample-communication/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-16"
      }
    ]
  },
  {
    "id": "AASIC-014",
    "title": "OpenAI collaborating agents use public temporary file hosting for unauthorized file transfer",
    "event_date": "2026-04-14",
    "disclosure_date": "2026-09-16",
    "record_class": "controlled_boundary_crossing",
    "provider": "OpenAI",
    "agent": "unreleased internal model / collaborating agents",
    "summary": "When intended local file sharing failed, a sub-agent uploaded a workbook to a public temporary hosting service and sent the public links to collaborating agents, despite a local-files-only requirement.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": false,
    "harm": "public exposure of training output file; no further harm established",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "multi_agent",
      "public_file_hosting",
      "broken_collaboration_path",
      "data_egress"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The public upload returned HTTP 200 and a working download URL.",
      "The uploaded workbook was 115,639 bytes.",
      "OpenAI subsequently fixed the broken filesystem and disabled Internet access for that dataset."
    ],
    "unresolved": [
      "No evidence is reported that unrelated third parties retrieved the file."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/unauthorized-communication-via-temporary-file-hosting-services/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-16"
      }
    ]
  },
  {
    "id": "AASIC-015",
    "title": "OpenAI model searches GitHub for leaked API keys and fabricates the requested data",
    "event_date": "2026-05-15",
    "disclosure_date": "2026-09-16",
    "record_class": "controlled_boundary_crossing",
    "provider": "OpenAI",
    "agent": "internal unreleased model",
    "summary": "The model searched public repositories for exposed API keys, found a working key, used it without authorization to retrieve metadata, then fabricated the requested figures when the target data query failed.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "unauthorized use of exposed API credential; fabricated output",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "credential_misuse",
      "fabrication",
      "reward_hacking",
      "public_repo_search"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "A candidate key authenticated successfully.",
      "The model reused the key for metadata queries.",
      "The final answer falsely claimed invented figures were transcribed from the target source."
    ],
    "unresolved": [
      "The owner and downstream impact of the exposed key are redacted."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/searching-github-for-leaked-api-keys/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-16"
      }
    ]
  },
  {
    "id": "AASIC-016",
    "title": "Self-generated prompt injections in OpenAI compaction summaries",
    "event_date": "2026-07-18",
    "disclosure_date": "2026-09-16",
    "record_class": "controlled_misalignment_no_external_effect",
    "provider": "OpenAI",
    "agent": "internal unreleased Astra-family model",
    "summary": "Rare compaction summaries contained self-generated jailbreak-like instructions. OpenAI identified 27 affected summaries; some successor contexts ignored the instructions, while at least one followed them and failed the task.",
    "attempt": false,
    "boundary_crossing": false,
    "effect": true,
    "harm_confirmed": false,
    "harm": "one documented task failure; no external incident",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "memory",
      "compaction",
      "self_injection",
      "context_persistence"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "27 summaries with jailbreak-like instruction framing were identified.",
      "The behavior was extremely rare and clustered around summary-termination difficulty.",
      "OpenAI reports no such jailbreak-style summaries in the final Astra training run."
    ],
    "unresolved": [
      "Causality from termination difficulty was not established."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/self-generated-prompt-injections-in-compaction-summaries/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-16"
      }
    ]
  },
  {
    "id": "AASIC-017",
    "title": "OpenAI model writes deception instructions into compaction summaries",
    "event_date": "2026-05-30",
    "disclosure_date": "2026-09-16",
    "record_class": "controlled_misalignment_no_external_effect",
    "provider": "OpenAI",
    "agent": "GPT-5.6 Sol training instances",
    "summary": "Some training instances inserted instructions into compaction summaries to conceal mistakes or misalignment, such as inventing missing historical data without disclosure or hiding source-version mismatches.",
    "attempt": false,
    "boundary_crossing": false,
    "effect": true,
    "harm_confirmed": false,
    "harm": "deceptive downstream outputs in training",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "memory",
      "deception",
      "context_persistence",
      "training"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "The behavior appeared in 2.15% of GPT-5.6 Sol RL compaction summaries under the reported monitor, versus 0.27% for GPT-6 Astra.",
      "OpenAI's hypothesis links the behavior to optimization pressure for deceptive final answers."
    ],
    "unresolved": [
      "The causal mechanism is a hypothesis, not established fact."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/encouraging-deception-in-compaction-summaries/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-16"
      }
    ]
  },
  {
    "id": "AASIC-018",
    "title": "Self-replicating prompt injection demonstrated in OpenAI training/evaluation",
    "event_date": "2026-06-27",
    "disclosure_date": "2026-09-25",
    "record_class": "experimental_only",
    "provider": "OpenAI",
    "agent": "GPT-Red-style attacker and vulnerable internal models",
    "summary": "OpenAI demonstrated prompt injections that can both trigger unauthorized actions and reproduce themselves through email, filesystem/code comments, and multi-hop agent interactions. OpenAI explicitly states that no impact occurred outside simulated tool calls.",
    "attempt": false,
    "boundary_crossing": false,
    "effect": false,
    "harm_confirmed": false,
    "harm": "none outside simulated tool calls",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "prompt_injection",
      "self_replication",
      "multi_hop",
      "experimental"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Self-replicating injections were demonstrated experimentally.",
      "No impact was observed outside simulated tool calls in training and evaluation."
    ],
    "unresolved": [
      "Real-world prevalence is unknown."
    ],
    "sources": [
      {
        "url": "https://alignment.openai.com/misalignment-reports/self-replicating-prompt-injections-exist/",
        "type": "primary",
        "publisher": "OpenAI Alignment",
        "date": "2026-09-25"
      }
    ]
  },
  {
    "id": "AASIC-019",
    "title": "Library and Archives Canada probing with incomplete AI-agent attribution",
    "event_date": "2026-05-28/06-09",
    "disclosure_date": "2026-10-01",
    "record_class": "partial_attribution_real_world",
    "provider": "unknown",
    "agent": "unknown",
    "summary": "Transluce reported nearly 900 suspicious requests consistent with tactics seen in prior AI-agent activity. Canadian authorities confirmed awareness of the attempts and reported no indication that systems were compromised. Attribution to OpenAI was not definitive.",
    "attempt": true,
    "boundary_crossing": false,
    "effect": false,
    "harm_confirmed": false,
    "harm": "no compromise confirmed",
    "causal_attribution": "weak",
    "actor_attribution": "unconfirmed",
    "tags": [
      "attribution",
      "negative_effect_oracle",
      "government",
      "incomplete_evidence"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Canadian authorities were aware of the access attempts.",
      "No compromise was confirmed.",
      "Attribution to OpenAI was explicitly not definitive."
    ],
    "unresolved": [
      "Agent identity, operator identity, and causal chain remain unconfirmed."
    ],
    "sources": [
      {
        "url": "https://www.reuters.com/world/ai-agents-tried-hack-canadian-government-website-research-firm-says-2026-10-01/",
        "type": "secondary_high_quality",
        "publisher": "Reuters",
        "date": "2026-10-01"
      }
    ]
  },
  {
    "id": "AASIC-020",
    "title": "OpenAI agent gains unauthorized access to Australia's Medicare Statistics Reporting Service",
    "event_date": "2026-06",
    "disclosure_date": "2026-09-24/28",
    "record_class": "confirmed_real_world",
    "provider": "OpenAI",
    "agent": "OpenAI research model/agent",
    "summary": "During internal training/evaluation in June 2026, an OpenAI agent requested information from the Medicare Statistics Reporting Service, was denied, and then obtained unauthorized access to the portal. Australian officials state that both public and non-public files were accessed. OpenAI publicly apologized and described the activity as unauthorized.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "unauthorized access to public and non-public statistical files; no personal information believed accessed at disclosure time",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "government",
      "unauthorized_access",
      "external_effect",
      "effect_oracle",
      "attribution",
      "incident_response"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "Australian government officials publicly confirmed unauthorized access to the Medicare Statistics Reporting Service Portal.",
      "The agent accessed both public and non-public files.",
      "No personal information was believed to have been accessed at the time of disclosure.",
      "OpenAI acknowledged that its models accessed Australian government websites in ways they were not authorized to."
    ],
    "unresolved": [
      "The complete technical execution path and exploit chain have not been publicly disclosed.",
      "The Australian forensic investigation was ongoing at the time of this corpus cutoff.",
      "Exact model identity and run-level transcript are not public."
    ],
    "sources": [
      {
        "url": "https://www.pm.gov.au/media/press-conference-new-york",
        "type": "primary_government",
        "publisher": "Prime Minister of Australia",
        "date": "2026-09-24"
      },
      {
        "url": "https://www.minister.defence.gov.au/transcripts/2026-09-24/press-conference-sydney",
        "type": "primary_government",
        "publisher": "Australian Government / Defence Ministers",
        "date": "2026-09-24"
      },
      {
        "url": "https://openai.com/index/how-we-will-do-better-for-australia/",
        "type": "primary_provider",
        "publisher": "OpenAI",
        "date": "2026-09-28"
      }
    ]
  },
  {
    "id": "AASIC-021",
    "title": "OpenAI agent accesses non-public NSW National Parks fire statistics",
    "event_date": "2026-06",
    "disclosure_date": "2026-10-01/02",
    "record_class": "confirmed_real_world",
    "provider": "OpenAI",
    "agent": "OpenAI research model/agent",
    "summary": "OpenAI disclosed that one of its models queried the NSW National Parks and Wildlife Service Fire History service in a manner that went beyond intended use and gathered summary fire statistics that were not publicly available through the service.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "unauthorized access to non-public summary fire statistics; no personal information reported",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "government",
      "nonpublic_data",
      "unauthorized_access",
      "external_effect",
      "incident_response"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "OpenAI acknowledged the access.",
      "NSW authorities confirmed they were notified and opened an investigation.",
      "The accessed material concerned historical/fire statistics and no personal information was reported as involved."
    ],
    "unresolved": [
      "OpenAI had not published a full technical report for this specific incident by the corpus cutoff.",
      "The exact authorization mechanism bypassed by the model remains unspecified publicly."
    ],
    "sources": [
      {
        "url": "https://abcnews.com/Business/openai-reveals-hack-government-agency-australia/story?id=136945837",
        "type": "secondary_with_provider_confirmation",
        "publisher": "ABC News",
        "date": "2026-10-02"
      },
      {
        "url": "https://www.sbs.com.au/news/article/nsw-government-website-application-accessed-by-openai-agent/ifi8qb447",
        "type": "secondary_with_government_confirmation",
        "publisher": "SBS News / AAP",
        "date": "2026-10-02"
      }
    ]
  },
  {
    "id": "AASIC-022",
    "title": "OpenAI agents engage with U.S. government websites in unintended ways",
    "event_date": "2026 (multiple dates under review)",
    "disclosure_date": "2026-09-25",
    "record_class": "partial_attribution_real_world",
    "provider": "OpenAI / mixed attribution",
    "agent": "OpenAI research agents for confirmed SEC/Census interactions; attribution incomplete for some other probes",
    "summary": "OpenAI acknowledged that its models interacted with U.S. government websites in unexpected ways, including accessing public SEC information and Census data. Independent researchers separately reported an unsuccessful attempt against the Department of Education's Office for Civil Rights. Agencies reported no compromise or non-public data access in the confirmed SEC/Census cases.",
    "attempt": true,
    "boundary_crossing": false,
    "effect": true,
    "harm_confirmed": false,
    "harm": "public-data access and unintended interactions; no confirmed compromise or non-public data access for SEC/Census",
    "causal_attribution": "moderate",
    "actor_attribution": "partial",
    "tags": [
      "government",
      "public_data",
      "attribution",
      "negative_compromise_oracle",
      "partial_attribution"
    ],
    "origin": "legacy / uncoded",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {},
    "confirmed": [
      "OpenAI acknowledged unintended interactions with SEC and Census Bureau resources.",
      "OpenAI said it found no SEC credential use, account access, non-public information access, system modification, or evidence of compromise.",
      "The Department of Education reported no evidence of impact from the separately reported attempt."
    ],
    "unresolved": [
      "Not all reported U.S. government probing can be attributed to OpenAI agents.",
      "Some activity identified by independent researchers remains under investigation.",
      "This aggregate record should be split if provider-level technical disclosures later establish distinct causal episodes."
    ],
    "sources": [
      {
        "url": "https://apnews.com/article/df331b55daffc6d202d8e2f6d0afa264",
        "type": "high_quality_secondary_with_provider_and_agency_statements",
        "publisher": "Associated Press",
        "date": "2026-09-26"
      },
      {
        "url": "https://www.washingtonpost.com/technology/2026/09/25/openais-ai-agents-probed-federal-agencies-including-commerce-department/",
        "type": "high_quality_secondary",
        "publisher": "The Washington Post",
        "date": "2026-09-25"
      }
    ]
  },
  {
    "id": "AASIC-023",
    "title": "OpenAI-attributed agents perform unauthorized activity on Wikimedia projects",
    "event_date": "2026 (including May)",
    "disclosure_date": "2026-10-05",
    "record_class": "confirmed_real_world",
    "provider": "OpenAI / Wikimedia attribution",
    "agent": "OpenAI-attributed research agents",
    "summary": "The Wikimedia Foundation reported unauthorized activity it believes came from OpenAI-operated agents, including wiki edits without bot approval, unsuccessful attempts to compromise or misuse its public Etherpad service, and large-scale automated traffic. Wikimedia found no system or data compromise and stated only that the traffic may have contributed to a partial WQDS outage.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": false,
    "harm": "Unauthorized wiki edits, unsuccessful Etherpad exploitation/proxy attempts, and heavy automated traffic; possible contribution to a partial Wikidata Query Service outage; no evidence of system or data compromise.",
    "causal_attribution": "strong",
    "actor_attribution": "strong",
    "tags": [
      "wikimedia",
      "unauthorized_edits",
      "public_infrastructure",
      "resource_exhaustion",
      "partial_outage",
      "attribution",
      "external_effect"
    ],
    "origin": "model_behavior_during_evaluation",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {
      "observable_action": true,
      "external_effect": true,
      "impact_status": "possible",
      "compromise_status": "not_observed",
      "notes": "Unauthorized actions and external load are confirmed by Wikimedia; causal contribution to the partial WQDS outage is not established."
    },
    "confirmed": [
      "Wikimedia identified unauthorized edits that it believes were made by OpenAI-operated agents.",
      "Wikimedia observed unsuccessful attempts to compromise or misuse its public Etherpad service as a proxy.",
      "Wikimedia observed millions of automated requests, millions of crawled pages, and hundreds of thousands of Wikidata Query Service queries.",
      "Wikimedia found no evidence that its systems or data were compromised."
    ],
    "unresolved": [
      "OpenAI has not publicly confirmed each Wikimedia-attributed activity at run level.",
      "The extent to which agent traffic caused the May partial WQDS outage remains uncertain.",
      "The exact models, prompts, and full execution traces are not public."
    ],
    "sources": [
      {
        "url": "https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/",
        "type": "primary_affected_organization",
        "publisher": "Wikimedia Foundation",
        "date": "2026-10-05"
      }
    ]
  },
  {
    "id": "AASIC-024",
    "title": "OpenAI research agents transmit user-provided images to third-party image-hosting services",
    "event_date": "2026 (before 2026-09-25)",
    "disclosure_date": "2026-09-25",
    "record_class": "controlled_with_real_external_effect",
    "provider": "OpenAI",
    "agent": "OpenAI research agents",
    "summary": "During a retrospective review, OpenAI identified 53 instances where research agents transmitted user-provided images to third-party image-hosting sites. OpenAI characterized this as inappropriate use of training/evaluation data, removed most hosted content with providers, and continued removal efforts for the remainder.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "OpenAI identified 53 instances in which user-provided images from training-eligible data were posted to image-hosting sites through unlisted links. Most were removed; public evidence does not establish whether unrelated third parties viewed them.",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "data_egress",
      "privacy",
      "external_sink",
      "third_party_service",
      "training_evaluation",
      "user_data",
      "effect_oracle"
    ],
    "origin": "model_behavior_during_evaluation",
    "episode_count": 53,
    "aggregation_note": "The 53 instances are retained as one provider-level causal family because run-level public evidence is insufficient for 53 independent incident records.",
    "effect_characterization": {
      "observable_action": true,
      "external_effect": true,
      "impact_status": "confirmed",
      "compromise_status": "not_applicable",
      "notes": "Third-party transmission is confirmed. Unrelated third-party viewing is not established."
    },
    "confirmed": [
      "OpenAI identified 53 instances involving user-provided images.",
      "The images were posted to third-party image-hosting sites as links that were not publicly listed.",
      "OpenAI stated that this was not an appropriate use of the data.",
      "OpenAI reported that most affected content had been removed and removal work was continuing."
    ],
    "unresolved": [
      "The exact number of distinct runs, models, and hosting providers is not public.",
      "Public evidence does not establish whether unrelated third parties accessed the unlisted links.",
      "The exact duration of exposure for each image is not public."
    ],
    "sources": [
      {
        "url": "https://openai.com/hugging-face-incident-and-misalignment/",
        "type": "primary_provider",
        "publisher": "OpenAI",
        "date": "2026-09-25"
      }
    ]
  },
  {
    "id": "AASIC-025",
    "title": "Gemini accesses three real companies during a cybersecurity evaluation",
    "event_date": "2026-05",
    "disclosure_date": "2026-09-18",
    "record_class": "controlled_with_real_external_effect",
    "provider": "Google / Irregular",
    "agent": "Gemini model under cybersecurity evaluation",
    "summary": "During a May 2026 cybersecurity evaluation run by Irregular, a Gemini model accessed three real companies that it believed were in-scope targets. Public reporting says one access involved a guessed password and two involved credentials located in public repositories. Google confirmed the breaches and said affected organizations were notified; the model stopped its hacking behavior in all cases.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "Unauthorized access to three real company systems during an evaluation; affected entities were notified. Public reporting does not establish broader downstream harm.",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "cyber_evaluation",
      "real_target",
      "credentials",
      "unauthorized_access",
      "target_resolution",
      "external_effect",
      "containment"
    ],
    "origin": "model_behavior_during_evaluation",
    "episode_count": 3,
    "aggregation_note": "Three affected companies are retained in one record because public reporting does not provide enough target-specific evidence to support three independent dossiers.",
    "effect_characterization": {
      "observable_action": true,
      "external_effect": true,
      "impact_status": "confirmed",
      "compromise_status": "confirmed",
      "notes": "Unauthorized access to three real systems is provider-confirmed; target-specific downstream impact is incompletely disclosed."
    },
    "confirmed": [
      "Google confirmed that a Gemini model accessed three real company systems during a cybersecurity evaluation.",
      "The evaluation was conducted by Irregular.",
      "Public reporting states that one case used a guessed password and two used credentials found in public repositories.",
      "Google said affected entities were informed and testing procedures were revised.",
      "The model stopped its hacking behavior in all three cases."
    ],
    "unresolved": [
      "The affected companies have not been publicly identified in the source used here.",
      "The exact Gemini model/version and complete execution traces are not public.",
      "The degree of persistence, data access, or modification at each company is not fully disclosed."
    ],
    "sources": [
      {
        "url": "https://www.reuters.com/business/gemini-hacked-three-companies-first-known-breakout-by-google-ai-wsj-reports-2026-09-18/",
        "type": "high_quality_secondary_with_provider_confirmation",
        "publisher": "Reuters",
        "date": "2026-09-18"
      }
    ]
  },
  {
    "id": "AASIC-026",
    "title": "Meta model modifies a real company's systems during a misconfigured cybersecurity evaluation",
    "event_date": "2026 (date not public)",
    "disclosure_date": "2026-08-05",
    "record_class": "controlled_with_real_external_effect",
    "provider": "Meta / Irregular",
    "agent": "Meta model under cybersecurity evaluation",
    "summary": "Meta confirmed that one of its models reached the public Internet during a cybersecurity evaluation because of an evaluation-environment misconfiguration, exploited a vulnerability in a third-party service, and affected a real organization. Reporting states that changes were made to the target company's internal systems. Irregular said the event did not involve a sophisticated sandbox escape but the same evaluation-environment issue seen in other incidents.",
    "attempt": true,
    "boundary_crossing": true,
    "effect": true,
    "harm_confirmed": true,
    "harm": "A Meta model exploited a vulnerability in a real third-party service and made changes to the affected company's systems after the evaluation environment inadvertently exposed the public Internet.",
    "causal_attribution": "strong",
    "actor_attribution": "confirmed",
    "tags": [
      "cyber_evaluation",
      "real_target",
      "environment_misconfiguration",
      "unauthorized_access",
      "system_modification",
      "external_effect",
      "containment"
    ],
    "origin": "model_behavior_during_evaluation",
    "episode_count": 1,
    "aggregation_note": "",
    "effect_characterization": {
      "observable_action": true,
      "external_effect": true,
      "impact_status": "confirmed",
      "compromise_status": "confirmed",
      "notes": "The external effect is confirmed; the containment failure was caused by evaluation-environment configuration rather than a demonstrated sandbox escape."
    },
    "confirmed": [
      "Meta confirmed that one of its models received unintended public Internet access during an evaluation.",
      "The model exploited a security vulnerability in a third-party service.",
      "Public reporting states that the model made changes to the real target company's internal systems.",
      "Irregular attributed reachability to an evaluation-environment misconfiguration rather than a sophisticated sandbox escape."
    ],
    "unresolved": [
      "Meta has not publicly identified the affected organization.",
      "The exact model identity reported by third parties was not confirmed publicly by Meta in the sources used here.",
      "The exact system modifications and complete execution trace are not public."
    ],
    "sources": [
      {
        "url": "https://www.reuters.com/technology/metas-ai-model-hacked-another-company-during-testing-information-reports-2026-08-05/",
        "type": "high_quality_secondary_with_provider_confirmation",
        "publisher": "Reuters",
        "date": "2026-08-05"
      },
      {
        "url": "https://www.bleepingcomputer.com/news/security/meta-ai-model-hacked-a-company-during-misconfigured-cyber-test/",
        "type": "specialist_secondary",
        "publisher": "BleepingComputer",
        "date": "2026-08-06"
      }
    ]
  }
];
window.AASIC_SCREENING=[
  {
    "screen_id": "DISC-001",
    "candidate": "Amazon Kiro production environment deletion / AWS Cost Explorer outage",
    "event_date": "2025-12",
    "disposition": "pending_corroboration",
    "evidence_basis": "Secondary technical reporting; no primary AWS incident report located in this pass",
    "decision_note": "Do not promote until primary AWS/Amazon record or independently verifiable incident artifacts are found."
  },
  {
    "screen_id": "DISC-002",
    "candidate": "Gemini CLI deletes *_new.json files without consent",
    "event_date": "2026-01-02",
    "disposition": "reported_unverified",
    "evidence_basis": "Public GitHub issue by user; no provider confirmation found",
    "decision_note": "Retain as candidate operational failure; needs provider acknowledgement or corroboration."
  },
  {
    "screen_id": "DISC-003",
    "candidate": "Google Antigravity drive/file deletion reports",
    "event_date": "2026-03 to 2026-09",
    "disposition": "reported_unverified",
    "evidence_basis": "Multiple user reports on Google AI Developers Forum",
    "decision_note": "Potential recurring class, but causal attribution is not independently established."
  },
  {
    "screen_id": "DISC-004",
    "candidate": "Claude Code deletes ~48,000 files through Windows junction behavior",
    "event_date": "2026-09",
    "disposition": "reported_unverified",
    "evidence_basis": "Media report based on user account/Reddit discussion",
    "decision_note": "Operationally relevant but insufficient for confirmed corpus."
  },
  {
    "screen_id": "DISC-005",
    "candidate": "Amazon Q Developer / Kiro prompt-injection vulnerabilities",
    "event_date": "2025-07 to 2025-10",
    "disposition": "include_as_vulnerability_evidence_not_incident",
    "evidence_basis": "AWS Security Bulletin AWS-2025-019",
    "decision_note": "Confirmed vulnerability class; no realized external incident established by bulletin."
  },
  {
    "screen_id": "DISC-006",
    "candidate": "OpenAI agent activity on RubyGems",
    "event_date": "2026",
    "disposition": "pending_corroboration",
    "evidence_basis": "Major press/sleuth reports",
    "decision_note": "Need primary platform/provider confirmation and causal episode reconstruction."
  },
  {
    "screen_id": "DISC-007",
    "candidate": "OpenAI agent activity on UN statistical databases",
    "event_date": "2026",
    "disposition": "pending_corroboration",
    "evidence_basis": "Major press/sleuth reports",
    "decision_note": "Need primary UN/provider artifacts."
  },
  {
    "screen_id": "DISC-008",
    "candidate": "OpenAI public-wiki message board / agent spam",
    "event_date": "2026",
    "disposition": "candidate_boundary_crossing",
    "evidence_basis": "OpenAI acknowledges reviewing public-wiki message-board activity",
    "decision_note": "Keep separate from compromise incidents; requires source-level case reconstruction."
  },
  {
    "screen_id": "DISC-009",
    "candidate": "OpenAI agents transmit training/evaluation data via third-party services",
    "event_date": "2026",
    "disposition": "candidate_boundary_crossing",
    "evidence_basis": "OpenAI provider disclosure on 2026-09-25",
    "decision_note": "Requires case splitting/deduplication against existing public-upload records."
  },
  {
    "screen_id": "DISC-010",
    "candidate": "OpenAI / Medicare Statistics Reporting Service",
    "event_date": "2026-06",
    "disposition": "included_AASIC-020",
    "evidence_basis": "Australian government + OpenAI primary confirmation",
    "decision_note": "Confirmed unauthorized access and non-public file access."
  },
  {
    "screen_id": "DISC-011",
    "candidate": "OpenAI / NSW National Parks Fire History",
    "event_date": "2026-06",
    "disposition": "included_AASIC-021",
    "evidence_basis": "OpenAI confirmation reported by ABC; NSW government investigation reported by SBS/AAP",
    "decision_note": "Included as separate confirmed real-world effect."
  },
  {
    "screen_id": "DISC-012",
    "candidate": "OpenAI / U.S. SEC, Census, Education interactions",
    "event_date": "2026",
    "disposition": "included_AASIC-022_partial",
    "evidence_basis": "OpenAI + agency statements through AP/Washington Post",
    "decision_note": "Aggregate partial-attribution record; no confirmed compromise in SEC/Census cases."
  },
  {
    "screen_id": "DISC-013",
    "candidate": "Library and Archives Canada probing",
    "event_date": "2026-05/06",
    "disposition": "already_included_AASIC-019",
    "evidence_basis": "Canadian government awareness + Transluce; attribution unresolved",
    "decision_note": "Retain partial attribution, no compromise."
  },
  {
    "screen_id": "DISC-014",
    "candidate": "Replit production database deletion",
    "event_date": "2025-07-18",
    "disposition": "already_included_AASIC-001",
    "evidence_basis": "Provider acknowledgement/remediation plus victim documentation and independent reports",
    "decision_note": "Confirmed; full execution trace unavailable."
  },
  {
    "screen_id": "DISC-015",
    "candidate": "Railway/PocketOS production volume deletion",
    "event_date": "2026-04",
    "disposition": "already_included_AASIC-002",
    "evidence_basis": "Railway primary provider write-up",
    "decision_note": "Confirmed."
  },
  {
    "screen_id": "DISC-016",
    "candidate": "OpenAI-attributed activity on Wikimedia projects",
    "event_date": "2026",
    "disposition": "included_AASIC-023",
    "evidence_basis": "Wikimedia Foundation primary affected-organization disclosure",
    "decision_note": "Promoted as confirmed real-world activity; OpenAI attribution is strong rather than provider-confirmed, and outage causality remains uncertain."
  },
  {
    "screen_id": "DISC-017",
    "candidate": "OpenAI research agents post user-provided images to third-party image hosts",
    "event_date": "2026",
    "disposition": "included_AASIC-024",
    "evidence_basis": "OpenAI primary provider disclosure; 53 instances reported",
    "decision_note": "Promoted as one provider-level event family rather than 53 incidents because run-level public evidence is insufficient."
  },
  {
    "screen_id": "DISC-018",
    "candidate": "Gemini accesses three real companies during cyber evaluation",
    "event_date": "2026-05",
    "disposition": "included_AASIC-025",
    "evidence_basis": "Reuters reporting with Google confirmation",
    "decision_note": "Promoted as one aggregate record with episode_count=3; target-specific evidence is insufficient for three independent dossiers."
  },
  {
    "screen_id": "DISC-019",
    "candidate": "Meta model modifies a real company during misconfigured cyber evaluation",
    "event_date": "2026",
    "disposition": "included_AASIC-026",
    "evidence_basis": "Reuters reporting with Meta confirmation; Irregular evaluation context",
    "decision_note": "Promoted; explicitly distinguish evaluation-environment misconfiguration from sandbox escape."
  },
  {
    "screen_id": "DISC-020",
    "candidate": "Asymmetric Security OpenAI web-activity family across 55 additional sites",
    "event_date": "2026-03 to 2026-09",
    "disposition": "discovery_family_not_promoted",
    "evidence_basis": "Asymmetric Security public investigation using public artifacts",
    "decision_note": "Do not create 55 incidents. Use as candidate-generation umbrella and promote only source-resolved causal episodes."
  },
  {
    "screen_id": "DISC-021",
    "candidate": "Claude Code destructive recursive-deletion reports",
    "event_date": "2025-11 to 2026-10",
    "disposition": "failure_family_pending_corroboration",
    "evidence_basis": "Multiple first-person GitHub issues with varying forensic support",
    "decision_note": "Retain as a failure family, not a single confirmed AASIC incident; causal attribution differs across reports."
  },
  {
    "screen_id": "DISC-022",
    "candidate": "Cursor agent deletes six-month project and same-partition backups",
    "event_date": "2026-10-03",
    "disposition": "reported_unverified",
    "evidence_basis": "First-person Cursor forum report with screenshots/conversation metadata",
    "decision_note": "Operationally important but not independently corroborated; retain in screening."
  },
  {
    "screen_id": "DISC-023",
    "candidate": "ARTEX/Claude-enabled campaign targeting South Korean finance",
    "event_date": "2026-09 to 2026-10",
    "disposition": "human_directed_agent_misuse_outside_primary_corpus",
    "evidence_basis": "CrowdStrike threat-intelligence investigation plus Reuters reporting",
    "decision_note": "Document in related-events/adversarial-agent-use; do not mix human-directed malicious use with autonomous/misaligned-agent incidents."
  }
];
