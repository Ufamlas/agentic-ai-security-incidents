#!/usr/bin/env python3
from pathlib import Path
import json, csv
ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/"data"
OUT=ROOT/"site"/"assets"
OUT.mkdir(parents=True,exist_ok=True)
records=[json.loads(p.read_text(encoding="utf-8")) for p in sorted(DATA.glob("AASIC-*.json"))]
screen=[]
sp=DATA/"discovery_screening.csv"
if sp.exists():
    with sp.open(newline="",encoding="utf-8") as f:
        screen=list(csv.DictReader(f))
rows=[]
for r in records:
    rows.append({
        "id":r["id"],"title":r["title"],"event_date":r.get("event_date",""),
        "disclosure_date":r.get("disclosure_date",""),"record_class":r.get("record_class",""),
        "provider":r.get("provider",""),"agent":r.get("agent",""),"summary":r.get("summary",""),
        "attempt":bool(r.get("attempt")),"boundary_crossing":bool(r.get("boundary_crossing")),
        "effect":bool(r.get("effect")),"harm_confirmed":bool(r.get("harm_confirmed")),
        "harm":r.get("harm",""),"causal_attribution":r.get("causal_attribution",""),
        "actor_attribution":r.get("actor_attribution",""),"tags":r.get("research_tags",[]),
        "origin":r.get("origin","legacy / uncoded"),"episode_count":r.get("episode_count",1),
        "aggregation_note":r.get("aggregation_note",""),
        "effect_characterization":r.get("effect_characterization",{}),
        "confirmed":r.get("confirmed",[]),"unresolved":r.get("unresolved",[]),
        "sources":r.get("sources",[])
    })
(OUT/"data.js").write_text("window.AASIC_DATA="+json.dumps(rows,ensure_ascii=False,indent=2)+";\n"+"window.AASIC_SCREENING="+json.dumps(screen,ensure_ascii=False,indent=2)+";\n",encoding="utf-8")
print(f"site data rebuilt: records={len(rows)} screening={len(screen)}")
