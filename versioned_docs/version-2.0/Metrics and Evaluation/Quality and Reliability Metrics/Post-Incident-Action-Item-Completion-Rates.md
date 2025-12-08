# Post Incident Action Item Completion Rates

We talk a *lot* about incident response. Playbooks, on-call rotations, blameless postmortems… the initial scramble to restore service gets a lot of attention. But what happens *after* the fire is put out? All too often, the action items born from those crucial post-incident reviews languish, becoming a digital graveyard of good intentions. 

As engineering leaders, we need to face a hard truth: a low completion rate for post-incident action items isn’t just a sign of disorganization; it’s a direct threat to the long-term reliability of our systems, and a silent killer of team morale. I’ve seen it firsthand, both at rapidly growing startups and within established enterprise organizations. Here's why it happens, and what you can *actually* do to improve it.

## The Problem is Deeper Than You Think

It's easy to assume the problem is simply “people are busy.” While that’s *part* of it, it masks more fundamental issues. Here’s a breakdown of the common culprits:

* **Action Items Lack Ownership:** The postmortem identifies a problem, suggests a fix… and then what?  Too often, action items are assigned vaguely ("Someone should look into this") or not assigned at all.  Without clear ownership, things fall through the cracks.
* **Action Items are Too Big/Vague:** “Improve monitoring” is not an action item. It’s a project. Action items need to be small, specific, and actionable. (“Add a Prometheus alert for X metric exceeding Y threshold” is better.)
* **No Dedicated Time/Capacity:**  We ask teams to fix systemic issues *on top* of their regular sprint work.  This is a recipe for failure.  Reliability work *is* work, and it needs to be explicitly allocated.
* **Lack of Visibility & Follow-Up:**  If you don't track action items and actively follow up, they'll quickly be forgotten.  Many teams generate postmortems and then…nothing.  It’s like shouting into the void.
* **The "Fix it and Forget it" Mentality:**  Treating postmortems as solely reactive exercises, instead of opportunities for proactive learning and improvement, leads to recurring incidents.



## A Framework for Increasing Completion Rates

Over the years, I’ve refined a few key principles and practices that consistently move the needle on action item completion.  Here’s a breakdown:

**1. Prioritizing Action Items: The SMART-ER Approach**

Building on the classic SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound), I add two crucial elements to help you effectively prioritize:

* **Effort Estimation:** Require a rough estimate of the effort required for each action item (e.g., story points, hours). This provides a realistic assessment and helps with prioritization.
* **Risk Assessment:** What’s the impact if this action item *isn't* completed?  Prioritize high-impact, high-risk items first.

This can be visualized using a simple Impact vs. Risk matrix. Action items plotted on this matrix quickly highlight priorities:

![Impact vs Risk Matrix](https://example.com/impact_risk_matrix.png) *(Replace this with an actual image or link to an image)*

**2. Allocating Time for Reliability Work**

This is critical. Allocate a dedicated block of time (e.g., one sprint per quarter, one day per month) specifically for addressing post-incident action items and other technical debt. Protect this time fiercely.

**3. Tracking and Accountability: A Simple Workflow**

* **Assign a clear owner** to each action item *during* the postmortem review.
* **Use a dedicated tracking system.**  Jira, Asana, Trello – whatever your team uses, create a specific board or project for post-incident action items.
* **Regular Status Updates:**  Require owners to provide brief weekly status updates on their assigned items.  A simple "In Progress," "Blocked," or "Completed" is often sufficient.
* **Escalation Path:**  If an action item is stalled for an extended period, have a clear escalation path to ensure it doesn't get lost.

**4. Recognizing Contributions to Reliability**

This is a delicate one. Don’t punish people for identifying problems. Instead, *reward* them for actively addressing them. Include “contribution to system reliability” as a factor in performance reviews, focusing on the completion of assigned action items.

**5. Proactive Analysis of Recurring Themes**

As highlighted by research on post-incident analysis, such as the work of Stålhane et al. (2003), identifying and analyzing recurring themes in postmortems can reveal underlying systemic issues. This allows you to move beyond addressing symptoms and tackle root causes. Investigating these patterns can prevent future incidents and improve overall system stability. Analyzing these recurring themes can be time-consuming, but tools like PostHog can help by providing historical data and identifying patterns.




## Beyond Completion: Cultivating a Culture of Learning

Ultimately, increasing action item completion rates isn't just about checking boxes. It's about fostering a culture of learning, continuous improvement, and shared responsibility for system reliability. When teams understand that postmortems are valuable learning opportunities, and that their contributions matter, they're far more likely to prioritize and complete the necessary follow-up actions.

Don't fall into the trap of simply responding to fires. Shift your focus to proactive prevention. This investment will yield more reliable systems and a more engaged team.

**Next Steps:**

Review your current post-incident process. Are you consistently tracking action items? Do you have dedicated time for reliability work? Share this article with your team and discuss how you can improve your process.