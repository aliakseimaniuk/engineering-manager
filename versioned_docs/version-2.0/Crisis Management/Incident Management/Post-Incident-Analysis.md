# Post Incident Analysis

Incidents happen. It’s not a matter of *if*, but *when*. As engineering leaders, we spend a lot of time *preventing* incidents – and rightfully so. But equally crucial, and often overlooked, is what happens *after* an incident. That’s where Post-Incident Analysis (PIA), or “post-mortems” as they’re often called, comes in. 

Far too often, PIAs devolve into blame games, finger-pointing exercises that leave teams demoralized and fail to address the underlying issues. A truly effective PIA isn’t about finding *who* broke something; it’s about understanding *why* it broke and, crucially, *how* to prevent it from happening again. It's about building a learning culture, a culture of continuous improvement where teams feel safe to explore failures openly and honestly.

In this article, we'll explore how to run PIAs that are constructive, insightful, and drive real improvements in your systems and processes.

## Why Traditional Post-Mortems Often Fail

Imagine this: A critical service outage occurs. The team scrambles to restore functionality, and finally, after hours of work, they succeed.  The post-incident meeting begins, and immediately, the conversation turns to *who* missed the warning signs, *who* didn't test adequately, and *who* should have known better.  Defensive walls go up, and the real issues – systemic problems, lack of monitoring, unclear processes – remain hidden.

This scenario is far too common. Here’s what often goes wrong with traditional post-mortems:

* **Focus on Individual Blame:** This stifles honesty. People are less likely to admit mistakes if they fear repercussions.
* **Lack of Psychological Safety:** If team members don't feel safe sharing what *really* happened, the analysis will be superficial.
* **Superficial Analysis:** Stopping at the immediate symptom instead of digging into the root cause. “The server crashed” is a symptom; “Lack of automated scaling combined with a sudden spike in traffic” is closer to the root cause.
* **Action Items Without Ownership:** Identifying issues is useless without assigning clear ownership and timelines for resolution.
* **No Follow-Up:** Action items get lost in the shuffle, and the lessons learned fade away.



## A Framework for Effective Post-Incident Analysis

Here’s a framework, drawing on established practices (see resources at the end), to help you run productive PIAs:

**1. Preparation is Key:**

* **Trigger:** Define what constitutes an incident worthy of a PIA. It’s not just catastrophic outages; smaller incidents that caused significant user impact or required substantial effort to resolve should also be analyzed.
* **Timeline:** Within 24-48 hours of the incident, schedule a dedicated session. The sooner you analyze the event while it’s still fresh in everyone’s mind, the better.
* **Attendees:** Include everyone directly involved in responding to and mitigating the incident – developers, operations, support, and relevant stakeholders.
* **Pre-Read:** Share a preliminary timeline of events with attendees *before* the meeting. This allows them to start thinking about what happened and formulate their thoughts.

**2. The PIA Session: Focus on System, Not Individuals**

* **Establish Psychological Safety:** Start by explicitly stating that the goal is *learning*, not blame. Remind everyone that mistakes are a natural part of complex systems. Acknowledge that it can be challenging to shift from a blame-oriented culture, and emphasize the importance of creating a supportive environment.
* **Timeline Review:** Walk through the timeline of events *as a group*. Encourage everyone to contribute their perspective. Ask “What happened?”, “When did it happen?”, and “What was the impact?”.
* **Root Cause Analysis:** This is where you dig deeper. Don’t stop at the surface-level symptom. Use techniques like the “5 Whys” to iteratively drill down to the underlying causes.  Consider other techniques such as fault tree analysis or Pareto analysis for a more comprehensive approach.
    * **Example:**
        * **Problem:** The website was unavailable for 30 minutes.
        * **Why?** The database server crashed.
        * **Why?** The server ran out of memory.
        * **Why?** A recent code deployment introduced a memory leak.
        * **Why?** The code wasn’t adequately load tested before deployment.
        * **Why?** We lack automated load testing as part of our CI/CD pipeline.
* **Identify Action Items:** Based on the root cause analysis, create a list of concrete action items to prevent similar incidents in the future.
    * **Be Specific:** "Improve monitoring" is too vague. "Implement automated alerts for database memory usage exceeding 80%" is much better.
    * **Assign Ownership:** Each action item needs a clear owner who is responsible for driving it to completion.
    * **Set Timelines:** Give each action item a realistic deadline.

**3. Follow-Up and Continuous Improvement**

* **Document Everything:** Create a written report summarizing the incident, root cause analysis, and action items. Share this report with the team and relevant stakeholders.
* **Track Progress:** Regularly review the status of action items and hold owners accountable.
* **Analyze Recurring Issues:** Over time, you’ll likely see patterns emerge. Pay attention to recurring themes and address them proactively. As Tiedeman (1990) suggests, analyse these findings to identify and eliminate unproductive discussions.
* **Celebrate Learning:** Acknowledge and appreciate the team's efforts in identifying and addressing issues.



## Visual Aid: The Incident Timeline & Root Cause Diagram

Consider using these visual aids during the PIA session:

* **Incident Timeline:** A chronological list of events, with timestamps.
* **Root Cause Diagram (Fishbone Diagram or Ishikawa Diagram):** This helps visualize the various contributing factors to the incident.

## Beyond Just Fixing Bugs

Effective post-incident analysis isn't just about preventing future outages. It’s about fostering a culture of learning, transparency, and continuous improvement. By shifting the focus from blame to understanding, you can empower your team to identify and address systemic issues, build more resilient systems, and deliver a better experience for your users. This shift requires consistent effort and a commitment to psychological safety, but the long-term benefits are well worth the investment.

**Resources:**

**Books:**
* Addison-Wesley, Collier B, DeMarco T, Fearey P (1996) A defined process for project post mortem review.

**Articles:**
* Dingsøyr T (2005) Postmortem reviews: purpose and approaches in software engineering.
* Lehtinen TOA (2014) Development and evaluation of a lightweight root cause analysis method in software project retrospectives.

**Takeaway and Challenge:**

We all strive to build robust and reliable systems. But even the best systems will experience incidents. The key is not to avoid incidents altogether, but to learn from them effectively.  Take one thing from this article – perhaps committing to psychological safety, using the "5 Whys" technique, or visualizing root causes – and commit to implementing it in your next post-incident analysis.  Let’s move beyond blame and build a learning culture that drives continuous improvement.