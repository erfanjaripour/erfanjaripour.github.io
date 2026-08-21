---
title: "Hierarchical Bayesian Modeling of Visual Working Memory Precision"
date: 2026-07-23

status: "Completed"
 
preview: "A reproducible hierarchical Bayesian analysis of visual working memory precision using circular behavioral data from an openly available continuous-report dataset."

research_question: "How does memory load influence visual working memory precision, and can hierarchical Bayesian models characterize individual differences and memory-load effects in continuous-report performance?"

methods: ["Hierarchical Bayesian Modeling", "Circular Statistics", "Computational Modeling"]

publication_url: "/publications/hierarchical-bayesian-working-memory/"
publication_title: "A Hierarchical Bayesian Analysis of Memory Load Effects on Visual Working Memory Precision"
---

## Overview

This project investigates how memory load influences visual working memory precision using trial-level data from three openly available continuous-report experiments. The study examines how precision changes with increasing memory load and whether individual differences in performance can be characterized using hierarchical Bayesian models. The analysis combines circular statistics, Bayesian modeling, predictive evaluation, and reproducible computational methods within an open-science workflow.

## Research Question

How does memory load influence visual working memory precision, and can hierarchical Bayesian models characterize individual differences and memory-load effects in continuous-report performance?

## Data & Methods

The analysis used an openly available visual working memory dataset originally reported by van den Berg et al. (2012) and distributed through the BenchmarksWM repository. The dataset comprised **37,824 trial-level observations from 13 participants across three continuous-report experiments**, including color memory with scrolling response, orientation memory with rotational response, and color memory with color-wheel response. Performance was quantified using circular angular error. Data validation confirmed the consistency of the dataset, and no observations were excluded.

The analysis pipeline included circular error analysis, descriptive statistics, hierarchical Bayesian modeling, posterior predictive checking, and predictive model comparison. Three Bayesian models were evaluated using a von Mises likelihood: a null model, a hierarchical model incorporating participant-level variability and memory-load effects, and a nonlinear hierarchical model with memory-load-specific effects. Models were fitted using Hamiltonian Monte Carlo with the No-U-Turn Sampler (NUTS) implemented in PyMC. Model adequacy and predictive performance were evaluated using convergence diagnostics, posterior predictive checks, and leave-one-out cross-validation.

## Key Findings

* Memory precision decreased systematically as memory load increased.
* Substantial individual differences were observed in baseline visual working memory precision.
* The hierarchical Bayesian model estimated a strong negative association between memory load and precision.
* The nonlinear hierarchical model provided the strongest predictive performance among the tested models.
* Posterior predictive checks showed that the selected model reproduced important characteristics of the observed error distributions.
* Robustness analyses showed stable conclusions across alternative priors, sampling configurations, and experiment-specific analyses.

## Figures

{{< figure
src="figures/error-by-setsize.png"
alt="Mean angular error across memory loads"
caption="<strong>Figure 1.</strong> Mean angular error across memory loads."
>}}

{{< figure
src="figures/participant-posterior.png"
alt="Individual differences in baseline memory precision"
caption="<strong>Figure 2.</strong> Individual differences in baseline memory precision estimated by the hierarchical Bayesian model."
>}}

{{< figure
src="figures/participant-level-ppc.png"
alt="Participant-level posterior predictive evaluation"
caption="<strong>Figure 3.</strong> Posterior predictive evaluation of individual participant-level error patterns."
>}}

{{< figure
src="figures/posterior-predictive-setsize.png"
alt="Posterior predictive evaluation of memory-load effects"
caption="<strong>Figure 4.</strong> Posterior predictive evaluation of the relationship between memory load and recall error."
>}}

## Limitations

* Reliance on an existing open dataset limits experimental control.
* The analyses focus on continuous-report paradigms and may not generalize to all working memory tasks.
* Model comparison was limited to statistical formulations rather than direct comparisons among competing cognitive theories.
* The von Mises likelihood imposes a specific distributional assumption on circular response errors.

## Next Steps

Future work will extend this framework toward theoretically motivated cognitive models within a hierarchical Bayesian framework. Additional directions include applying the workflow to other working memory datasets, incorporating experiment-level effects, and comparing alternative computational accounts of memory precision and variability.

## Resources & Outputs

* [GitHub Repository](https://github.com/erfanjaripour/hierarchical-bayesian-working-memory)
* [Preprint](https://doi.org/10.21203/rs.3.rs-10469232/v1)
* [Open Dataset (GitHub)](https://github.com/joschadutli/BenchmarksWM)