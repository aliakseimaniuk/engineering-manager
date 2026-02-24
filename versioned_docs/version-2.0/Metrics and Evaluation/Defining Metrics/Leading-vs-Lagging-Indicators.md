# Leading Vs Lagging Indicators

For years, engineering teams have been bombarded with metrics. Velocity, cycle time, bug counts – these *lagging* indicators tell us *what happened*. They’re historical snapshots. While important for understanding past performance, relying solely on them is like driving a car by looking only in the rearview mirror. You’ll know where you’ve been, but have little sense of where you’re going – or what obstacles lie ahead.

Do you find yourself constantly reacting to fires instead of preventing them? Are you frustrated with optimizing metrics that don’t translate into real improvements? You're not alone. Many engineering leaders struggle with this reactive cycle. This article explores how shifting your focus from lagging to leading indicators can help you proactively build more predictable and successful teams.

As engineering leaders, we need to shift our focus – not *away* from lagging indicators, but *toward* their more predictive cousins: **leading indicators**. These are the signals that foreshadow future results. They allow us to proactively address issues, course-correct, and ultimately, build more predictable and successful teams.

## The Problem with Lagging Indicators

Let's be clear: lagging indicators aren't *bad*. They provide valuable context. Velocity, for example, helps understand how much work a team consistently delivers. Bug counts reveal the quality of shipped code. However, they’re *results* of underlying behaviors and processes. 

Here’s why over-reliance on lagging indicators is problematic:

* **They react, not predict:** You only know there’s a problem *after* it has impacted delivery.
* **They encourage gaming the system:** Teams may focus on optimizing *the metric* rather than improving the underlying quality or process. (Think reducing bug counts by pushing fixes to the next sprint).
* **They mask root causes:** A drop in velocity doesn’t tell you *why*. Was it due to unclear requirements, technical debt, or a lack of focus?
* **They offer limited actionable insight:** Knowing velocity decreased doesn't give you a clear path to *increase* it.

## Leading Indicators: The Early Warning System

Leading indicators, on the other hand, focus on the *drivers* of success. They are predictive, actionable, and often require more effort to track, but the payoff is significant.  The concept of focusing on leading indicators stems from performance management principles and lean methodologies, often discussed in the context of creating a proactive and preventative system. 

Here’s a breakdown of some key leading indicators for engineering teams, grouped by category:

**1. Technical Health & Quality:**

* **Code Churn:** High churn in critical areas signals potential instability or refactoring needs. (Track lines of code changed per module over time).
* **Code Complexity (Cyclomatic Complexity):** More complex code is harder to maintain, test, and debug, increasing the risk of future issues.  (Simply put, cyclomatic complexity measures the number of independent paths through your code.  Higher numbers often indicate increased risk.)
* **Test Coverage:** While not a perfect measure, increasing test coverage generally correlates with higher quality and reduced risk. (Focus on *meaningful* tests, not just line coverage.)
* **Static Analysis Violations:** Tracking the number and severity of violations detected by static analysis tools highlights potential code smells and vulnerabilities.

**2. Team Health & Process:**

* **Team Psychological Safety (measured via regular surveys):** A team where members feel safe to speak up, share ideas, and admit mistakes will consistently outperform one where they don’t. (Regular "check-ins" or anonymous surveys can provide valuable data).
* **Pull Request Size & Review Time:** Large pull requests are harder to review effectively, increasing the risk of bugs and delaying delivery. (Set a reasonable size limit and track review cycle time.)
* **Feature Flag Adoption Rate:** Increased use of feature flags enables faster iteration, reduces risk, and facilitates experimentation.
* **Developer Happiness (measured via regular surveys):** Engaged and happy developers are more productive and produce higher quality work. (This isn't just about perks; it's about meaningful work, growth opportunities, and a positive team culture.)

**3. Flow & Delivery:**

* **Work in Progress (WIP):** High WIP limits team focus, increases context switching, and slows down delivery. (Implement WIP limits and track the number of active tasks).
* **Lead Time for Changes:** The time it takes for a change to go from code commit to production. This is a powerful indicator of delivery speed and efficiency. 
* **Deployment Frequency:** More frequent deployments enable faster feedback loops, reduce risk, and accelerate innovation.

## From Data to Action: A Practical Framework

Simply tracking leading indicators isn't enough. You need a system for turning data into action. Here's a simple framework:

1. **Identify Key Drivers:** Based on your team’s goals and challenges, identify 3-5 leading indicators that are most likely to impact success.
2. **Establish Baseline and Targets:** Measure your current performance and set realistic targets for improvement.
3. **Visualize and Monitor:** Create a dashboard or report to track leading indicators over time. (Tools like easyretro.io can be helpful for visualizing retrospective data and tracking improvement initiatives).
4. **Regular Retrospectives:** Discuss leading indicators during retrospectives. What’s trending positively? What needs attention? What experiments can you run to improve performance? (Utilize tools that facilitate Root Cause Analysis – Lehtinen’s ARCA method provides a lightweight approach.  Ari Lehtinen is a prominent Agile coach and author known for his work on retrospective techniques.)
5. **Iterate and Adjust:** Leading indicators are not set in stone. As your team evolves, you may need to adjust your metrics and targets.

## Beyond the Numbers: The Human Element

While data is important, don’t forget the human element. Leading indicators should inform your coaching and support, not become a source of pressure or blame. Focus on creating a culture of continuous improvement where teams are empowered to experiment, learn, and grow.  

Remember, leading indicators are *predictive*, but they’re not *prescriptive*. They point you in the right direction, but it's up to you and your team to navigate the path to success. 

## What's Next?

Ready to get started? Begin by selecting just one or two leading indicators that align with your team’s most pressing challenges. Track them consistently for a month, discuss the trends in your next retrospective, and experiment with small changes to improve performance. Review your chosen indicators monthly and adjust your approach as needed. Remember, the goal isn't to create a perfect measurement system, but to build a proactive culture of continuous improvement.