---
title: "A Hierarchical Bayesian Analysis of Memory Load Effects on Visual Working Memory Precision"
date: "2026-07-23"

authors: "Jaripour, E."
year: "2026"
venue: "Research Square"
status: "Preprint"

project_title: "Hierarchical Bayesian Modeling of Visual Working Memory Precision"
project_url: "/research/hierarchical-bayesian-working-memory/"
---

## Citation

Jaripour, E. (2026). *A Hierarchical Bayesian Analysis of Memory Load Effects on Visual Working Memory Precision.* Research Square Preprint. https://doi.org/10.21203/rs.3.rs-10469232/v1

## Abstract

Visual working memory is limited in both capacity and precision, and computational models increasingly aim to characterize how memory representations vary with increasing load and across individuals. The present study applied hierarchical Bayesian modeling to a publicly available continuous-report visual working-memory dataset to examine the relationship between memory load and precision while comparing alternative statistical representations of performance. Trial-level angular errors from three experiments were analyzed using Bayesian models with von Mises likelihoods. The evaluated models included a null hierarchical model with no memory-load effect, a hierarchical model estimating a population-level effect of set size with participant-specific variation, and a nonlinear hierarchical model allowing independent set-size effects through a sum-to-zero parameterization. Model performance was evaluated using posterior predictive checks, convergence diagnostics, and approximate leave-one-out cross-validation.
Results showed that memory precision decreased systematically as memory load increased and that participants exhibited substantial differences in baseline precision. The nonlinear hierarchical model achieved the strongest predictive performance among the evaluated models, indicating that the relationship between memory load and precision was not fully captured by a simple linear representation. Robustness analyses demonstrated that the primary conclusions remained stable across alternative prior specifications, sampling configurations, and posterior initializations. These findings highlight the value of hierarchical Bayesian approaches for modeling individual variability in visual working-memory performance and demonstrate the utility of reproducible computational workflows for evaluating statistical models using open behavioral datasets.

## Key Contributions

* Quantified the relationship between memory load and visual working memory precision using trial-level behavioral data.
* Applied hierarchical Bayesian models to account for both population-level effects and individual differences.
* Evaluated alternative statistical representations of memory-load effects using predictive model comparison.
* Applied circular statistical modeling with a von Mises likelihood for continuous-report data.
* Developed a fully reproducible computational workflow for Bayesian analysis of open behavioral datasets.

## Resources

* [Preprint](https://doi.org/10.21203/rs.3.rs-10469232/v1)
* [GitHub Repository](https://github.com/erfanjaripour/hierarchical-bayesian-working-memory)
* [Open Dataset (GitHub)](https://github.com/joschadutli/BenchmarksWM)