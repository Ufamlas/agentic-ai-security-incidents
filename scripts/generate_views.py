#!/usr/bin/env python3
"""Regenerate AASIC independent reports and dashboard data from data/AASIC-*.json."""
from pathlib import Path
import json, re

ROOT=Path(__file__).resolve().parents[1]
records=[json.loads(p.read_text(encoding="utf-8")) for p in sorted((ROOT/"data").glob("AASIC-*.json"))]
report_dirs={
 "confirmed_real_world":"confirmed",
 "controlled_with_real_external_effect":"confirmed",
 "partial_attribution_real_world":"partial-attribution",
 "controlled_boundary_crossing":"controlled",
 "controlled_misalignment_no_external_effect":"experimental",
 "experimental_only":"experimental",
}
rows=[]
for r in records:
    slug=r.get("slug",re.sub(r"[^a-z0-9]+","-",r["title"].lower()).strip("-"))
    report_path="../reports/"+report_dirs.get(r["record_class"],"experimental")+"/"+r["id"]+"_"+slug+".md"
    rows.append({
      "id":r["id"],"title":r["title"],"event_date":r.get("event_date",""),"disclosure_date":r.get("disclosure_date",""),
      "record_class":r.get("record_class",""),"provider":r.get("provider",""),"agent":r.get("agent",""),
      "attempt":bool(r.get("attempt")),"boundary_crossing":bool(r.get("boundary_crossing")),"effect":bool(r.get("effect")),
      "harm_confirmed":bool(r.get("harm_confirmed")),"harm":r.get("harm",""),"causal_attribution":r.get("causal_attribution",""),
      "actor_attribution":r.get("actor_attribution",""),"summary":r.get("summary",""),"tags":r.get("research_tags",[]),
      "report_path":report_path})
(ROOT/"dashboard/incidents.js").write_text("window.AASIC_INCIDENTS = "+json.dumps(rows,ensure_ascii=False,indent=2)+";\n",encoding="utf-8")
print(f"dashboard records: {len(rows)}")
