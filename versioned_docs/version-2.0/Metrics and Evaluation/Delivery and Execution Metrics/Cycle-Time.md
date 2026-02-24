# Cycle Time

For years, “velocity” has been the darling of agile teams – a readily available metric that *appears* to indicate progress. But as an engineering leader with two decades under my belt, I’ve learned that velocity, while useful, often paints an incomplete picture. It can be easily gamed, masks crucial bottlenecks, and doesn’t truly tell you how *efficiently* your team is delivering value. 

Are your project timelines constantly slipping despite a consistent velocity? That's a sign velocity might be telling the wrong story.

Enter **Cycle Time**. It's a deceptively simple metric with a profound impact on team health, predictability, and ultimately, your ability to deliver high-quality software. This post will dive into why Cycle Time matters, how to measure it effectively, and how to use it to drive meaningful improvement.

## What *is* Cycle Time, and Why Should I Care?

Simply put, **Cycle Time is the time it takes for a piece of work to move from “in progress” to “done.”** It's not about how *fast* developers are coding; it's about how long it takes the *entire system* to deliver a feature, fix a bug, or complete any unit of work.

Think of it like a factory assembly line. Velocity tells you how many cars *start* the line per day. Cycle Time tells you how long it takes for a car to roll *off* the line, fully finished. A fast start is useless if the whole process is choked with delays.

Why is this so important for engineering managers?

* **Predictability:** Consistent Cycle Time translates to predictable delivery. This isn’t just about hitting deadlines; it's about building trust with stakeholders and setting realistic expectations.
* **Bottleneck Identification:**  Long Cycle Times are symptoms. They signal problems in your process – from code review bottlenecks to flaky testing environments to unclear requirements.
* **Focus on Flow:**  Cycle Time forces you to think beyond individual tasks and focus on the overall *flow* of work. This fosters a systems thinking approach to engineering.
* **Reduced Waste:**  By minimizing the time work spends waiting, you reduce waste and maximize team efficiency.

## Measuring Cycle Time: From Kanban to Data Analysis

Measuring Cycle Time doesn’t require complex tooling, although tooling can help. Here’s a breakdown of how to get started:

1. **Choose Your Work Unit:**  This could be a user story, a bug fix, a task in your project management system, or anything else that represents a discrete unit of work.
2. **Define “In Progress” and “Done”:**  These need to be clearly defined and consistently applied.  "Done" means fully tested, deployed to production (or a staging environment for further validation), and accepted by the product owner.
3. **Manual Tracking (Start Simple):**  Initially, use a spreadsheet or even a Kanban board to manually track the start and end dates for each work item. Calculate the difference – that's your Cycle Time.
4. **Automated Tracking (Scale Up):** As your team matures, leverage tools like Jira, Azure DevOps, or dedicated time tracking apps. Tools like Clockify, Code Time, and Pulse.red can be particularly useful for automating Cycle Time calculation and providing deeper insights into your workflow. I've found integrating these tools with our CI/CD pipeline provides the most accurate data.


## Beyond the Average: Digging into the Data

The *average* Cycle Time is a good starting point, but it can be misleading.  A few exceptionally long tasks can skew the average. But calculating the average is only the first step. 

Here's what to look for:

* **Percentiles (P50, P90):** The P50 (median) is a more robust measure than the average. The P90 (90th percentile) tells you the Cycle Time for 90% of your work. This helps you identify outliers and understand the worst-case scenario.
* **Cycle Time Distribution:** Plotting a histogram of your Cycle Times reveals the shape of the distribution. A wide distribution suggests inconsistency in your process.
* **Cycle Time by Type of Work:**  Analyze Cycle Time separately for different types of work (e.g., new features, bug fixes, technical debt). This can reveal hidden problems.  We found bug fixes consistently had longer cycle times. After investigating, we discovered a lack of automated tests was a primary driver, giving us a clear signal where to invest.

## Taking Action: Reducing Cycle Time

Once you understand your Cycle Time, you can start to improve it.  Here are a few strategies:

* **Reduce Work in Progress (WIP):**  Limiting WIP forces the team to focus on completing tasks before starting new ones. This reduces context switching and improves flow.
* **Improve Code Review Process:**  Long code review cycles are a common bottleneck. Encourage smaller, more frequent pull requests.
* **Automate Testing:**  Automated tests provide faster feedback and reduce the risk of bugs.
* **Invest in CI/CD:**  A robust CI/CD pipeline automates the build, test, and deployment process, reducing manual effort and accelerating delivery.
* **Clarify Requirements:**  Ambiguous requirements lead to rework and delays.  Ensure the team understands the requirements.

## The Long Game:  Cycle Time as a Cultural Metric

Ultimately, Cycle Time isn't just about numbers; it's about fostering a culture of continuous improvement. By tracking and analyzing Cycle Time, you can empower your team to identify and address bottlenecks, improve their process, and deliver value faster. 

Remember the quote about procrastination: small delays accumulate. Similarly, seemingly minor inefficiencies in your process can significantly impact your team’s ability to deliver over time. Focusing on Cycle Time isn’t about maximizing team output; it’s about creating a smoother, more predictable, and more sustainable development process.

**To get started, track Cycle Time for your next sprint. Identify one bottleneck and brainstorm solutions with your team.**