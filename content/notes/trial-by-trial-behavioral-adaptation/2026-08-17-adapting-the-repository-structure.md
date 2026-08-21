---
title: "Adapting the Repository Structure"
date: 2026-08-17

preview: "A larger research project showed that repository structure should adapt to the size and complexity of the analysis."

project_title: "Trial-by-Trial Behavioral Adaptation in a Restless Bandit Task"
project_url: "/research/trial-by-trial-behavioral-adaptation/"
---



<!-- Situation -->

The trial-by-trial behavioral adaptation project was larger than my two previous research projects and introduced several new challenges in organizing the analysis. I followed the planned minimalist repository structure and kept the project organized throughout development. As the analysis became more complex, however, I found that the same structure became increasingly difficult to navigate and review.

<!-- Data -->

The main problem appeared after the modeling, in visualizing and exporting the results. I had three main notebooks, supported by R scripts, including a data inspection notebook, an exploratory data analysis notebook, and a modeling notebook. I used this structure throughout the project as I had planned. As a result, the modeling notebook and the models R script contained the code for exporting the final results. This did not create a reproducibility problem, but the larger files became harder to review and navigate.

<!-- Inference -->

A repository structure that works well for a small project may not scale effectively to a larger analysis. Simplicity is valuable, but the structure should also make distinct stages of an analysis easy to locate, review, and maintain. Separating final result generation into a dedicated notebook and script would have improved the organization of the final stages without substantially increasing the complexity of the repository.

<!-- Action -->

By considering the size and complexity of the project when designing the repository structure, I will try to keep the structure as simple as possible, but also use additional notebooks and scripts when they improve organization, review, and reproducibility.