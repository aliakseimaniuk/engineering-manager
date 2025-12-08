# Throughput

For years, “velocity” has been the darling of agile teams. We track story points, obsess over sprint burndown charts, and use velocity to predict future delivery. But how often do those predictions *actually* pan out? As engineering managers, we’ve all experienced the frustration of seemingly “busy” teams that struggle to deliver consistent results. It’s time to move beyond simply *how much* work a team *estimates* it can do, and focus on what *actually* gets delivered – that’s where **throughput** comes in.

Throughput, simply put, is the amount of work completed over a specific period. It's about *value delivered*, not estimated effort. And understanding throughput – tracking it, analyzing it, and improving it – is a crucial skill for any engineering manager who wants to build a consistently high-performing team. This approach, rooted in principles from Lean manufacturing and the Theory of Constraints, focuses on optimizing the flow of work to maximize output.

## Why Velocity Falls Short

Let's be honest: story points are *estimates*. They're subjective, prone to inflation, and heavily influenced by team dynamics. A team that consistently assigns higher story points isn't necessarily more productive; they might just be better at estimating… or they might be gaming the system. 

Here’s where velocity breaks down:

* **Ignores Value:** Velocity treats all story points equally. A complex, high-impact feature and a trivial bug fix both contribute to the same velocity score.
* **Encourages Point Inflation:** Teams are incentivized to increase points to “look” faster, creating a distorted view of reality.
* **Hides Bottlenecks:** A high velocity score can mask underlying problems like slow code reviews, long testing cycles, or frequent context switching.
* **Doesn't Account for Rework:** Time spent fixing bugs introduced in previous sprints isn't reflected in velocity, providing an incomplete picture of true delivery capacity.

## Throughput: A More Honest Metric

Throughput offers a more tangible and reliable way to measure team performance. Instead of focusing on estimated effort, it focuses on completed units of work. These units could be:

* **Features Deployed to Production:** The gold standard.
* **User Stories Completed & Verified:**  A good intermediate step, especially for smaller teams.
* **Pull Requests Merged & Deployed:** A useful metric for tracking code flow and reducing cycle time. 
* **Incidents Resolved:**  Important for reliability and operational excellence.

The key is to choose a unit of work that directly reflects *value delivered* to the end user or the business. It’s important to define these "units of work" clearly as discrete, measurable deliverables.

**Visual Suggestion:** A simple line graph charting throughput (units of work completed) over time. This immediately shows trends and helps identify potential bottlenecks or improvements. Look for plateaus indicating bottlenecks, or dips correlating with specific events.

## How to Implement Throughput Tracking

1. **Define Your Units of Work:**  Be specific and consistent. Avoid ambiguity. "Feature" is too broad; "Implemented user authentication with two-factor support" is better.
2. **Automate Tracking (If Possible):**  Integrate with your project management tools (Jira, Asana, etc.) and CI/CD pipelines to automatically track completed units of work. This reduces manual effort and ensures accuracy.
3. **Track Throughput Over Time:** Don’t just look at a single sprint. Track throughput over several sprints to identify trends and patterns.
4. **Analyze and Interpret the Data:**  Look for fluctuations in throughput. What caused a spike or a dip? Was it a specific event, a process change, or a team issue?
5. **Focus on Improving Flow:**  Throughput isn’t just about getting more done; it’s about getting things done *smoothly*.  Identify and remove bottlenecks that are hindering flow.

## Beyond the Number: Using Throughput to Drive Improvement

Throughput data isn't just for reporting. It's a powerful tool for driving continuous improvement. Here are some ways to leverage it:

* **Identify Bottlenecks:**  A consistently low throughput could indicate problems with code reviews, testing, deployments, or dependencies on other teams.
* **Measure the Impact of Process Changes:**  Did implementing a new CI/CD pipeline increase throughput? Did switching to a different code review process improve flow?
* **Improve Forecasting:** While not a direct replacement for velocity, throughput can provide a more realistic view of team capacity, helping you plan sprints and projects more effectively.
* **Empower the Team:** Share throughput data with the team and encourage them to identify ways to improve. Ownership and collective responsibility are key to driving sustainable improvement.

## Addressing Challenges and Nuances

While throughput is a powerful metric, it’s not without its challenges. Defining appropriate units of work can be tricky, especially for complex features. Dealing with dependencies on other teams requires careful coordination and communication. Furthermore, velocity can still be a useful tool for early-stage teams with unpredictable workloads, providing a baseline for estimating effort. Recognizing these nuances will help you implement throughput tracking effectively.

## Throughput vs. Velocity: A Practical Analogy

Think of a factory assembly line. Velocity is like estimating how many widgets the workers *think* they can build in an hour. Throughput is the actual number of completed, inspected widgets leaving the factory floor. Which metric is more reliable? Which metric drives better results? 

As engineering managers, our focus should be on the latter – the actual value delivered. 

**Final Thoughts**

Throughput isn’t about turning engineers into widget-producing machines. It's about understanding the *flow* of work, identifying and removing bottlenecks, and empowering teams to deliver value consistently. It's often a more honest, reliable, and actionable metric than velocity, and a crucial tool for any engineering manager who wants to build a high-performing, predictable, and sustainable engineering organization.

To start seeing the benefits, challenge your team to identify one area where throughput tracking could deliver immediate value in your next sprint.