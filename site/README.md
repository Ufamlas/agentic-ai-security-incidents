# AASIC website

This directory is the static website published from the same repository as the AASIC corpus.

Pages include:
- incident explorer;
- incident timeline;
- independent HTML reports;
- research context;
- methodology;
- source index.

The canonical research data remains under `../data/`. The website is a presentation layer and must not be treated as a separate source of truth.

Local preview:

```bash
cd site
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
