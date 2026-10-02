#!/usr/bin/env python3
import json, pathlib, sys
try:
    import jsonschema
except ImportError:
    print("Install jsonschema: pip install jsonschema", file=sys.stderr)
    sys.exit(2)

root=pathlib.Path(__file__).resolve().parents[1]
schema=json.loads((root/"schema/incident.schema.json").read_text())
errors=0
for p in sorted((root/"data").glob("AASIC-*.json")):
    obj=json.loads(p.read_text())
    try:
        jsonschema.validate(obj,schema)
    except Exception as e:
        errors += 1
        print(f"{p.name}: {e}")
print(f"validated={len(list((root/'data').glob('AASIC-*.json')))} errors={errors}")
sys.exit(1 if errors else 0)
