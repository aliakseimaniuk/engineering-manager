# Performance Metrics

For two decades, I’ve seen engineering teams get absolutely *drowned* in metrics. Velocity, story points, cycle time… the list goes on. Often, these metrics become vanity numbers – reported upwards, tracked religiously, but rarely *actioned* in a way that improves engineering outcomes. It’s easy to fall into the trap of “measuring things because we can,” rather than “measuring things that actually matter.”  The cost of ineffective metrics can be significant – wasted time, frustrated teams, and ultimately, missed business opportunities.

This isn't a critique of all metrics. It's a call to be *intentional* about them. A truly effective performance metric stack isn't about quantity, it's about quality, relevance, and, crucially, *actionability*. Here’s how to build one that moves the needle.

## The Problem with a Sole Focus on Throughput

Let’s be honest: velocity is appealing. It’s a single number that seems to represent “how much work we get done.” But focusing *solely* on throughput (velocity, story points completed) creates several problems:

* **It Incentivizes the Wrong Behaviors:** Teams will game the system. Story point inflation, splitting stories into ridiculously small tasks, and avoiding complex work all become strategies to “hit the number.”
* **It Ignores Quality:**  Velocity says nothing about bugs, technical debt, or user satisfaction. You can ship a lot of code that makes things *worse*.
* **It Masks Bottlenecks:**  A consistent velocity might hide underlying issues in the development process—slow code reviews, inadequate testing, or unclear requirements.
* **It's Context-Dependent:** What constitutes “good” velocity varies wildly based on team size, project complexity, and technology stack. Comparing velocities across teams is often meaningless.

I saw this firsthand at a startup years ago. We were obsessed with velocity, and the team consistently "hit" their sprint goals. But user complaints were skyrocketing, and we were constantly firefighting production issues. The problem? We were shipping features faster, but with significantly lower quality. We were sacrificing long-term stability for short-term gains. 

## Beyond Velocity: A Layered Approach to Performance Metrics

Instead of fixating on a single number, think of performance metrics as a layered stack.  Each layer provides a different level of insight, helping you diagnose problems and drive improvement. Here’s a framework I’ve found useful:

**Layer 1: The “Are We Shipping?” Layer (Output)**

* **Deployment Frequency:** How often are you releasing code to production?  Higher frequency often correlates with faster feedback loops and reduced risk. (A good starting point is aiming for multiple deployments *per day* – but this depends on your context. A startup might aim for daily deployments, while a highly regulated industry might deploy less frequently.)
* **Lead Time for Changes:** From code commit to production release, how long does it take? Shorter lead times indicate a more streamlined process.
* **Change Failure Rate:** What percentage of deployments result in incidents or rollbacks? A high failure rate signals problems with testing, code quality, or deployment procedures.

**Layer 2: The “How Healthy is Our System?” Layer (Stability & Quality)**

* **Error Budget:** This is *critical*. Define a maximum acceptable level of downtime or errors. Tracking against the error budget helps you balance feature delivery with system stability. (Inspired by Google’s Site Reliability Engineering (SRE) practices. SRE is a discipline that applies software engineering principles to infrastructure operations, aiming to ensure reliability, scalability, and efficiency.)
* **Mean Time To Recovery (MTTR):**  How quickly can you restore service after an incident? A low MTTR indicates effective incident response and robust systems.  For example, tracking MTTR helped one of my teams identify a recurring database issue that was causing frequent outages. We were able to automate the recovery process, reducing MTTR from several hours to just minutes.
* **Code Quality Metrics:** Use tools (SonarQube, CodeClimate) to track code complexity, code coverage, and potential vulnerabilities.
* **Technical Debt Ratio:** (While difficult to quantify precisely) – estimate the effort required to address existing technical debt. A starting point could be tracking the ratio of estimated story points for refactoring tasks versus new feature development. High levels of debt will slow down future development.

**Layer 3: The “How Engaged & Effective are We?” Layer (Team Health)**

* **Developer Satisfaction:**  This is often overlooked but crucial. Use regular surveys (anonymous is best) to gauge team morale, identify roadblocks, and address concerns.
* **Cycle Time per Feature:** Break down the development process into stages (coding, review, testing, deployment) and track cycle time for each stage. This helps identify bottlenecks.
* **Code Review Time:**  Long review times suggest overloaded reviewers or complex code.  We discovered that excessive code review times were impacting our velocity.  By implementing automated linting and encouraging smaller pull requests, we reduced review times by 30%.
* **Number of Bugs Discovered in Production:**  A rising number suggests issues with testing or code quality.


## Turning Metrics into Actionable Insights

Collecting metrics is only half the battle.  Here’s how to make them truly valuable:

* **Focus on Trends, Not Just Numbers:** Don't get fixated on a single data point. Look for patterns and trends over time. Are things improving or getting worse?
* **Set Realistic Goals:**  Don’t aim for perfection. Set achievable goals and track progress over time.
* **Regularly Review Metrics as a Team:**  Transparency is key. Share metrics with the entire team and discuss what they mean.
* **Investigate Anomalies:**  When a metric deviates significantly from the norm, investigate the cause. Don't just ignore it.
* **Connect Metrics to Outcomes:**  How are your metrics impacting business goals?  If a metric isn't tied to a business outcome, it's probably not worth tracking.

I learned a valuable lesson early in my career. We were meticulously tracking a metric—average code review time—and obsessing over small improvements. Then, a user survey revealed that customers were frustrated with the lack of new features. We realized we were optimizing for the wrong thing. 

## The Bottom Line

Effective performance metrics aren’t about control, they’re about empowerment. They provide teams with the information they need to identify problems, make improvements, and deliver value to customers.  Don't fall into the trap of measuring just for the sake of measuring.  Focus on building a performance metric stack that drives real results—and helps your team thrive. Remember that metrics should support team health and foster a culture of transparency and psychological safety.

**Key Takeaways:**

*   **Layered Approach:** Think of metrics as a stack, providing insights at different levels.
*   **Focus on Actionability:**  Connect metrics to business outcomes and use them to drive improvement.
*   **Prioritize Team Health:**  Metrics should support team morale and a positive work environment. 

**Next Steps:**

*   Identify the three most critical metrics for your team.
*   Start tracking those metrics this week.
*   Schedule a regular review to discuss trends and identify areas for improvement.