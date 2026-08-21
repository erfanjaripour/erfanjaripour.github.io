---
title: "Stroop Interference: A Behavioral and Computational Analysis"
date: 2026-06-11

status: "Completed"
 
preview: "A reproducible behavioral and computational analysis of cognitive interference in the Stroop task using open behavioral data."

research_question: "How does cognitive interference influence reaction time and accuracy during Stroop task performance, and to what extent can a simple computational model reproduce the observed interference pattern?"

methods: ["Behavioral Analysis", "Cognitive Modeling", "Statistical Inference"]

publication_url: "/publications/stroop-interference/"
publication_title: "Stroop Interference in Reaction Time and Accuracy: A Behavioral and Computational Analysis"
---

## Overview

This project investigates cognitive interference in the Stroop task using trial-level behavioral data from an openly available experimental dataset. Using data from 81 participants, the study quantifies differences in reaction time and accuracy across congruent, neutral, and incongruent conditions, examines individual variability in interference effects, and evaluates whether a simple computational model can reproduce the observed behavioral pattern. The project combines behavioral analysis, statistical inference, and computational modeling within a reproducible open-science workflow.

## Research Question

How does cognitive interference influence reaction time and accuracy during Stroop task performance, and to what extent can a simple computational model reproduce the observed interference pattern?

## Dataset & Analysis

The analysis used an openly available Stroop-task dataset from the Open Science Framework (OSF), comprising behavioral data from 81 participants across 85 recording sessions. The dataset included trial-level reaction time, accuracy, experimental condition, and participant identifiers from congruent, neutral, and incongruent Stroop trials.

Preprocessing included removal of probe trials, exclusion of invalid and extreme reaction times, resolution of participant–session identifiers, and aggregation of observations at the participant level for inferential analyses.

Stroop interference was quantified as the participant-level difference between incongruent and congruent reaction times. Statistical analyses included paired-samples t-tests, effect-size estimation, confidence intervals, and assumption diagnostics. A simple additive computational model was implemented to evaluate whether the observed condition-level reaction-time pattern could be reproduced through a baseline-plus-interference framework.

## Key Findings

* Reaction times increased systematically from congruent to neutral to incongruent conditions.
* Mean Stroop interference effect: **106.3 ms**
* Statistical evidence for interference: **t(80) = 17.77, p = 1.67 × 10⁻²⁹**
* Effect size: **dz = 1.97**
* Accuracy remained high across conditions.
* Substantial individual differences were observed in interference effects.
* The computational model reproduced the primary condition-level reaction-time pattern.

## Figures

{{< figure
src="figures/rt-by-condition.png"
alt="Reaction time distributions by condition"
caption="<strong>Figure 1.</strong> Reaction time distributions by condition."
>}}

{{< figure
src="figures/distribution-stroop-effects.png"
alt="Distribution of participant-level Stroop interference effects"
caption="<strong>Figure 2.</strong> Distribution of participant-level Stroop interference effects."
>}}

{{< figure
src="figures/baseline-vs-effect.png"
alt="Baseline reaction time and Stroop interference"
caption="<strong>Figure 3.</strong> Baseline reaction time and Stroop interference."
>}}

{{< figure
src="figures/model-vs-data.png"
alt="Observed and simulated reaction time distributions"
caption="<strong>Figure 4.</strong> Comparison of observed and simulated reaction time distributions."
>}}

## Limitations

* Reliance on an existing open dataset limits experimental control.
* Behavioral measures provide indirect evidence regarding underlying cognitive mechanisms.
* The analyses cannot distinguish among competing theoretical accounts of interference.
* The computational model is descriptive rather than mechanistic.

## Next Steps

Future work will extend this framework through Bayesian and hierarchical modeling to characterize uncertainty, individual differences, and reaction-time distributions more flexibly. Further research will examine cognitive interference across broader paradigms and compare competing computational accounts.

## Resources & Outputs

* [GitHub Repository](https://github.com/erfanjaripour/stroop-interference)
* [Preprint](https://doi.org/10.21203/rs.3.rs-10287577/v1)
* [Open Dataset (OSF)](https://osf.io/kxpqu/overview)