---
title: "From Practice to Real Data"
date: 2026-07-13

preview: "Building hierarchical Bayesian models with real data revealed computational and methodological challenges that did not appear during training."

project_title: "Hierarchical Bayesian Modeling of Visual Working Memory"
project_url: "/research/working-memory-bayesian-model/"
---

<!-- Situation -->

I am currently developing hierarchical Bayesian models for a working memory project. Building cognitive models with real data proved much more challenging than the practice exercises and small examples I completed during my Bayesian methods training. The models required substantially more computation, and achieving reliable convergence, especially for nonlinear models, became an important part of the analysis.

<!-- Data -->

The first challenge was computational performance. The models became extremely slow when using larger numbers of tuning and sampling iterations. After investigating the problem, I learned how to use NumPyro with JAX to improve sampling performance and adjusted several model settings to support the analysis better. Although these changes improved the workflow, convergence remained difficult for some nonlinear models. I tested many combinations of sampling parameters and repeatedly evaluated the results. Larger sampling runs also created memory limitations during model evaluation. After many iterations and hours of computation, I identified a configuration that produced stable results while remaining computationally practical.

<!-- Inferenc -->

This project showed me that applying Bayesian methods to real research is very different from practicing them on small examples. Real data introduces computational and methodological challenges that are difficult to anticipate during training. It also reminded me that much of the learning in computational research happens while solving practical problems that arise in an actual project.

<!-- Action -->

I will continue working on the Bayesian modeling of the working memory project and move toward writing the manuscript. I also plan to deepen my understanding of computational methods and learn more about improving computational performance for Bayesian modeling.