---
title: "Adapting the Repository Structure"
date: 2026-08-17

preview: "A larger research project showed that repository structure should adapt to the size and complexity of the analysis."

project_title: "Trial-by-Trial Behavioral Adaptation in a Restless Bandit Task"
project_url: "/research/trial-by-trial-behavioral-adaptation/"
---

<!-- Situation -->

After several intensive weeks, the trial-by-trial behavioral adaptation project is finally finished. This project was slightly larger than my two previous research projects and taught me many new lessons. One of the first challenges I faced was organizing the project as it grew. Although I followed my planned minimalist repository structure and kept the project as organized as possible, I found that the same structure was harder to manage as the analysis became larger.

<!-- Data -->

The main problem appeared after the modeling, in visualizing and exporting the results. I had three main notebooks, supported by R scripts, including a data inspection notebook, an exploratory data analysis notebook, and a modeling notebook. I used this structure throughout the project as I had planned. As a result, the modeling notebook and the models R script contained the code for exporting the final results. This did not create a reproducibility problem, but the larger files became harder to review and navigate.

<!-- Inference -->

A repository structure that works well for a small project may not work as well for a larger project. Keeping a project simple is useful, but the structure should also make different parts of the analysis easy to find and review. I think that adding a separate results notebook and script would have made the final stage easier to manage while keeping the repository simple.

<!-- Action -->

By considering the size and complexity of the project when I design the repository structure, I will try to keep the structure as simple as possible, but also use additional notebooks and scripts when they make the project easier to organize, review, and reproduce.