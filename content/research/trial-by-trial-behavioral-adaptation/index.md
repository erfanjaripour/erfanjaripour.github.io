---
title: "Trial-by-Trial Behavioral Adaptation in a Restless Bandit Task"
date: 2026-08-17

status: "Completed"

preview: "A reproducible mixed-effects analysis of trial-by-trial behavioral adaptation in a four-arm restless bandit task using openly available behavioral data."

research_question: "How does behavioral performance evolve across repeated trials in a dynamic reward environment, and to what extent do individuals differ in their behavioral trajectories?"

methods: ["Mixed-Effects Modeling", "Behavioral Analysis", "Reproducible Research"]

publication_url: "/publications/trial-by-trial-behavioral-adaptation/"
publication_title: "Trial-by-Trial Behavioral Adaptation in a Restless Bandit Task: A Mixed-Effects Modeling Approach"
---

## Overview

This project investigates how human behavior changes across repeated trials in a dynamic four-arm restless bandit task. Using trial-level behavioral data from an openly available dataset, the analysis examines changes in payoff-maximizing choice, obtained reward, reaction time, and choice switching across the trial sequence.

The primary analysis uses logistic mixed-effects modeling to characterize trial-by-trial changes in the probability of selecting the option with the highest trial-specific payoff while accounting for individual differences in baseline behavior and behavioral trajectories. The analysis focuses on observable behavioral adaptation rather than estimating latent reinforcement-learning parameters or computational learning mechanisms.

The project combines mixed-effects statistical modeling, model comparison, robustness analysis, and reproducible computational workflows.

## Research Question

How does behavioral performance evolve across repeated trials in a dynamic reward environment, and to what extent do individuals differ in their behavioral trajectories?

## Theoretical Background

Reinforcement-learning tasks provide a framework for studying how behavior changes as individuals repeatedly interact with dynamic reward environments. In restless bandit tasks, the value associated with available options changes over time, requiring participants to continually adapt their choices to changing payoff structures.

Behavioral adaptation can be examined without explicitly estimating latent learning parameters. Observable measures such as selection of the currently highest-payoff option, obtained reward, reaction time, and choice switching provide complementary indicators of behavioral change across trials.

This project adopts this behavioral approach. Rather than attributing observed changes to a particular computational learning mechanism, it characterizes the empirical trajectory of behavior and quantifies individual differences in those trajectories using mixed-effects models.

## Dataset

The analysis used the publicly available Bahrami2020 four-arm restless bandit dataset. The original dataset contains behavioral observations from 975 participants performing a four-arm bandit task with 150 trials per participant. Each trial provides participant choice, obtained reward, reaction time, and trial-specific payoff information for the four available options.

After preprocessing, 965 participants and 139,816 trial-level observations were retained for analysis. Choice-switching analyses used a reduced number of observations because switching is undefined when no preceding observed choice is available.

The raw dataset was preserved unchanged, and all preprocessing operations were implemented programmatically.

## Methods

The analysis pipeline included data validation, preprocessing, descriptive analysis, exploratory analysis, mixed-effects model fitting, model comparison, and robustness analysis.

The primary outcome was payoff-maximizing choice, defined as whether the participant selected the option with the highest payoff on a given trial. A logistic mixed-effects model was used to estimate trial-related changes in this probability:

payoff_maximizing_choice ~ (trial_c + trial_c2) * payoff_group +
    (1 + trial_c + trial_c2 | id)

Trial number was centered and modeled using both linear and quadratic terms. The model therefore allowed the trajectory of payoff-maximizing choice to change nonlinearly across trials. Participant-specific random intercepts, linear trial slopes, and quadratic trial slopes were included with a correlated random-effects structure.

Secondary analyses examined obtained reward, log-transformed reaction time, and choice switching using linear mixed-effects or logistic mixed-effects models as appropriate.

Candidate models were compared using Akaike's information criterion (AIC), Bayesian information criterion (BIC), and log-likelihood. Likelihood-ratio tests were used for nested model comparisons where appropriate. Robustness analyses evaluated alternative random-effects structures and linear versus quadratic representations of trial-related change.

## Key Findings

* The probability of selecting the payoff-maximizing option changed nonlinearly across trials.
* The primary quadratic model provided substantially better fit than the corresponding linear interaction model.
* The quadratic model with correlated random effects was preferred over the uncorrelated specification based on both AIC and BIC.
* Overall, participants selected the payoff-maximizing option on **61.35%** of trials.
* The primary model showed positive linear (**β = 0.492, p < .001**) and quadratic (**β = 0.327, p < .001**) trial components.
* The shape of the trial trajectory differed across payoff groups, with some groups showing flattening or declining trajectories and others showing stronger acceleration.
* Obtained reward showed a negative overall trial effect (**β = −0.981, p < .001**) with significant trial-by-payoff-group interactions.
* Log-transformed reaction time decreased across trials (**β = −0.0257, p < .001**).
* Choice switching decreased across trials (**β = −0.625, p < .001**), with the trajectory differing between payoff groups.

## Figures

{{< figure
src="figures/figure-1-payoff-maximizing-choice-probability.png"
alt="Payoff-Maximizing Choice Probability"
caption="<strong>Figure 1.</strong> Model-implied probability of selecting the payoff-maximizing option across trials and payoff groups."
>}}

{{< figure
src="figures/figure-2-reward-trajectory.png"
alt="Reward Trajectory"
caption="<strong>Figure 2.</strong> Trial-related trajectory of obtained reward across payoff groups."
>}}

{{< figure
src="figures/figure-3-reaction-time-trajectory.png"
alt="Reaction Time Trajectory"
caption="<strong>Figure 3.</strong> Trial-related trajectory of log-transformed reaction time across payoff groups."
>}}

{{< figure
src="figures/figure-4-choice-switch-probability.png"
alt="Choice Switching Probability"
caption="<strong>Figure 4.</strong> Trial-related trajectory of choice-switch probability across payoff groups."
>}}

## Discussion

The findings indicate that behavioral adaptation in the restless bandit task was not adequately characterized by a simple linear change across trials. The primary analysis provided strong evidence for nonlinear trial-related change in payoff-maximizing choice, with the form of this trajectory varying across payoff environments.

The results also demonstrated substantial between-participant heterogeneity in baseline performance and trial-related change. Modeling participant-specific random intercepts and slopes therefore provided a more appropriate representation of the hierarchical structure of the behavioral data than treating trial-level observations as independent.

Importantly, these analyses characterize observable behavioral adaptation rather than identifying its underlying computational mechanism. The observed trajectories could potentially arise from different learning, decision, exploration, or adaptation processes. Distinguishing among such mechanisms would require explicit computational models of latent learning and decision processes.

## Limitations

* Reliance on an existing observational dataset limits experimental control over task design and measurement.
* The analysis focuses on observable behavioral outcomes rather than directly estimating latent reinforcement-learning mechanisms.
* Payoff-maximizing choice provides a behavioral measure of adaptation but does not uniquely identify the cognitive or computational process generating that behavior.
* Quadratic trial terms provide a flexible description of nonlinear trajectories but should not be interpreted as evidence for a specific learning mechanism.
* The analyses are based on a single restless bandit paradigm and may not generalize to other reinforcement-learning tasks or decision environments.
* Model selection was based primarily on statistical fit and robustness rather than comparison among competing computational theories.

## Next Steps

Future work will extend the behavioral analysis toward explicit computational modeling of reinforcement-learning and decision-making mechanisms. Candidate extensions include hierarchical Bayesian reinforcement-learning models, trial-by-trial parameter estimation, and formal comparison of alternative learning and choice mechanisms.

Additional work could examine whether the observed group-specific trajectories can be explained by differences in learning rate, exploration, value updating, or decision noise. Combining computational modeling with the present mixed-effects framework would provide a stronger bridge between observable behavioral trajectories and latent cognitive mechanisms.

## Resources and Outputs

* [GitHub Repository](https://github.com/erfanjaripour/trial-by-trial-behavioral-adaptation)
* [Preprint](https://doi.org/10.21203/rs.3.rs-10740751/v1)
* [Open Dataset (OSF)](https://osf.io/f3t2a/overview)