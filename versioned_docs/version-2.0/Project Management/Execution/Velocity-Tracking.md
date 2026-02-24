# Velocity Tracking

For years, “velocity” in software engineering felt like a buzzword, often thrown around in the context of Agile and Scrum. But truly *understanding* and *leveraging* velocity isn’t about hitting arbitrary points totals. It's about building a predictably functioning engineering team. As an engineering leader, I’ve seen teams crippled by unrealistic expectations *due to* a poor understanding of velocity, and conversely, teams empowered by a solid grasp of their sustainable pace. This post dives into practical velocity tracking, going beyond the simple burndown chart to deliver actionable insights.

## The Problem with Point Estimates (and Why We Still Use Them)

Let's be honest: estimating work in “story points” feels… imprecise. It’s subjective. It relies on relative sizing rather than absolute time. And yet, it’s a powerful tool. Why? Because trying to estimate in *hours* is even *more* inaccurate. Humans are notoriously bad at predicting how long things will *actually* take. Points, as a relative measure of effort, complexity, risk, and uncertainty, give us a common language for conversation and a surprisingly good indicator of how much work a team can accomplish.

However, simply *having* points isn’t enough. The real value lies in consistently tracking how those points translate into delivered value.  It’s also worth acknowledging that some methodologies, like Work of Weeks (#WOW), attempt to address the scaling challenges inherent in story point estimation.

## From Points to Predictability: Defining Velocity

Velocity, in its simplest form, is the average amount of story points a team consistently delivers per sprint (or iteration). But don’t just calculate the average and call it a day. Here’s how to build a *meaningful* velocity metric:

* **Look Beyond the Average:** The *first* few sprints are noise. A team is still forming, learning its cadence, and identifying hidden dependencies. Discard data from the initial 3-5 sprints.
* **Calculate Rolling Velocity:** Instead of a simple average, use a rolling average (e.g., the average of the last 3-5 sprints). This provides a more responsive indicator of current capacity.
* **Consider Team Capacity:** Account for planned time off, meetings, or other non-development activities. A team member only has so many productive hours per sprint. Adjust your capacity planning accordingly.
* **Beware of Velocity “Gaming”:** If teams are incentivized solely on velocity, they might start inflating estimates or sandbagging (underestimating) to look good. We once worked with a team that was clearly gaming the system, leading to inaccurate forecasts and ultimately, a delayed release.  Foster a culture of honesty and focus on delivering value, not just points.
* **Visualize it – but thoughtfully:** A simple line chart showing rolling velocity is useful. However, pair it with a chart showing completed stories *per sprint*. Velocity alone can be misleading if the *size* of the stories completed varies significantly.

## Digging Deeper: Understanding Velocity Fluctuations

Velocity isn't a static number. It will fluctuate. The key is understanding *why*. Here are common causes and how to address them:

* **Technical Debt:** Increased technical debt significantly slows down development. Track and address it proactively. Velocity drops are often a symptom of accumulating debt.
* **Unexpected Interruptions:** Bugs, production issues, and urgent requests pull developers away from planned work. Build in buffer time for these inevitable occurrences.
* **Skill Gaps:** If a team lacks the skills needed for a particular task, velocity will suffer. Invest in training and mentorship.
* **Dependencies:** External dependencies (other teams, third-party services) can block progress. Improve communication and collaboration to minimize delays.
* **Process Bottlenecks:** Identify and eliminate process inefficiencies that hinder development. This could be slow code reviews, cumbersome testing procedures, or lengthy approval processes.

## What if Velocity Decreases Significantly?

Sometimes, despite your best efforts, velocity will drop significantly. When this happens, resist the urge to immediately jump to conclusions or apply pressure. Instead, focus on understanding the root cause. Is it a surge in technical debt? Are there new dependencies blocking progress? Has the team encountered an unexpected challenge?  A collaborative retrospective can be invaluable in identifying the underlying issues and developing a plan to address them.

## Beyond Sprint Velocity: Forecasting and Release Planning

Once you have a reliable velocity metric, you can use it for more than just tracking progress within a sprint.

* **Release Planning:** Use velocity to forecast how long it will take to deliver a larger feature or release. This provides stakeholders with realistic expectations and helps you prioritize work effectively.
* **Capacity Planning:** Understand how much work the team can realistically take on in a given timeframe. This prevents overcommitment and burnout.
* **Long-Term Trend Analysis:** Monitor velocity over time to identify potential issues or areas for improvement. A consistently declining velocity could indicate a deeper problem that needs to be addressed.

## The Human Side of Velocity

It's crucial to remember that velocity is a *metric*, not a *target*. It's a tool to help you understand your team's capacity and improve its performance, not a tool to pressure them.

* **Focus on Value Delivery:**  Ultimately, the goal isn't to maximize velocity, but to deliver valuable software to your users.
* **Empower the Team:**  Involve the team in the velocity tracking process. They are the ones who know the work best.
* **Celebrate Successes:**  Recognize and celebrate the team's accomplishments.

By approaching velocity tracking with empathy, transparency, and a focus on continuous improvement, you can build a high-performing engineering team that consistently delivers value. And that, ultimately, is what matters most.
