---
title: "Open Data Challenge"
date: 2026-06-15

preview: "Open dataset required major preprocessing due to structural issues before any analysis could begin."

project_title: "Stroop Interference: A Behavioral and Computational Analysis"
project_url: "/research/stroop-interference/"
---

<!-- Situation -->

Working with an open dataset for the Stroop interference project revealed unexpected data and preprocessing issues. The raw data contained malformed header rows, and 85 recording files corresponded to only 81 unique participant identifiers, indicating that some participants contributed multiple files or sessions.

<!-- Data -->

I had to rebuild the file structure, separate metadata from trial data, and check duplicated participant records. It was necessary to identify which files corresponded to unique participants and which ones were repeated or continuation sessions.

<!-- Inference -->

Open data can be useful only after careful checking of its structure. Without it, early descriptive results can be biased by hidden duplications, inconsistent formatting, or incorrect participant counts.

<!-- Action -->

I will start each project with a basic checkup to verify headers, count unique participants, inspect duplicate IDs, and clearly document decisions before any analysis.