# AASIC schema v0.5 notes

AASIC retains the original required fields `attempt`, `boundary_crossing`,
`effect`, and `harm_confirmed` for backward compatibility.

Where public evidence is sufficiently granular, v0.5 adds the optional chain:

`attempt → boundary crossing → observable action → external effect → impact → harm`

The optional `effect_characterization` object prevents external activity,
service impact, compromise, and harm from being silently treated as the same
thing.

`origin`, `episode_count`, and `aggregation_note` are also optional. They help
avoid target-count inflation and separate evaluation-originated behavior from
operational failures and human-directed malicious use.
