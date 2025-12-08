# Post Project Review

For over two decades, I’ve seen engineering teams celebrate wins and grapple with failures. One surprisingly common, and often *skipped*, step is the thorough post-project review – or "post-mortem" as it's often called. It's tempting to move straight onto the next shiny object, especially when deadlines loom. But consistently skipping this critical step is like building a house on sand – you’re setting yourself up for repeating the same mistakes. Studies have shown a clear link between consistent post-project reviews and improved project performance (Collier, DeMarco, & Fearey, 1996; Anbari, Carayannis, & Voetsch, 2008).

This isn't about finger-pointing. It's about building a learning organization, and frankly, respecting the time and effort your team poured into the project. Here's what I've learned about running effective post-project reviews, moving beyond blame, and turning lessons learned into actionable improvements.

## Why Most Post-Mortems Fail (And It's Not What You Think)

The typical post-mortem feels…performative. A meeting where everyone carefully avoids saying anything controversial. The output is a list of vaguely worded “lessons learned” that end up gathering dust in a shared document. 

The core problem isn’t the *idea* of a post-mortem, but *how* it's conducted. Here are a few common pitfalls:

* **Focus on Blame:** This shuts down honest conversation immediately. People will be defensive, not reflective.
* **Vague Action Items:** “Improve communication” is a meaningless action item. What *specifically* will change?
* **Lack of Psychological Safety:** If team members fear retribution for honesty, you won’t get honest feedback.
* **Skipping it Altogether:** The most common failure. We convince ourselves we're too busy.
* **Treating it as a Checkbox:** A perfunctory meeting to satisfy process requirements, rather than a genuine learning opportunity.

## The Framework: "What Went Well, What Could Be Improved, Action Items"

I've found a simple framework consistently delivers the most valuable results. It's based on three core questions:

1. **What Went Well?** (Start here! Acknowledge successes. This builds positive momentum and reinforces good practices.)
2. **What Could Be Improved?** (Focus on *processes* and *systems*, not individuals. Frame this as “what obstacles did we encounter?”)
3. **Action Items:** (Specific, measurable, achievable, relevant, and time-bound (SMART) steps to address the improvements.)

**Visual Suggestion:** A simple 3-column table is excellent for capturing this information. 

| What Went Well | What Could Be Improved | Action Items |
|---|---|---|
| Automated testing significantly reduced bug count | Code review process was rushed due to tight deadlines | Allocate dedicated time for thorough code reviews in future sprints |

## Diving Deeper: Beyond the Surface

Don't settle for superficial answers. Here's how to dig deeper:

* **The 5 Whys:** When someone identifies a problem, ask "Why?" repeatedly (usually five times) to uncover the root cause. For example, if a deployment failed, you might ask: “Why did the deployment fail?” “Why was the test coverage insufficient?” “Why was there no automated rollback procedure?” This prevents you from addressing symptoms instead of the underlying issue.
* **Focus on Systemic Issues:** Is a bug the fault of a developer, or a lack of robust testing procedures? Is a missed deadline due to an individual’s performance, or unrealistic estimations?
* **Separate “Known Knowns” from “Known Unknowns”:** “Known Knowns” are things everyone was aware of. “Known Unknowns” are risks you identified but didn’t mitigate. For example, a ‘Known Known’ might be a recurring bug in a specific module, while a ‘Known Unknown’ might be the potential for a third-party API to experience downtime. Understanding the difference helps prioritize preventative measures. (And honestly, “Unknown Unknowns” – the things you didn’t know you didn’t know – are largely accepted, though discussing them can still be valuable.)
* **Be Brutally Honest About Estimation:** Did you consistently underestimate tasks? If so, *why*? Are your estimation techniques flawed? This is a tough conversation, but crucial for accurate planning.

## Creating a Safe Space: Psychological Safety is Key

This is the hardest part, but the most important. Building a truly safe space requires ongoing effort and consistent reinforcement. Here are a few tips:

* **The Facilitator Role:** Designate a neutral facilitator (not the project lead) to guide the discussion. Their job is to ensure everyone has a voice and to prevent blaming.
* **Anonymous Input (Optional):** Consider using an anonymous survey or brainstorming tool *before* the meeting to gather initial feedback.
* **Lead by Example:** Be the first to admit your own mistakes. This sets the tone for vulnerability and openness.
* **Focus on Learning, Not Punishment:** Reinforce that the goal is to improve, not to assign blame.

## Turning Insights into Action: The Follow-Through

The post-mortem is useless if you don't act on the findings. 

* **Prioritize Action Items:** Don’t try to fix everything at once. Focus on the most impactful improvements.
* **Assign Ownership:** Clearly assign responsibility for each action item.
* **Track Progress:** To ensure accountability, add action items to your team’s preferred project tracking tool – options include Jira, Trello, and ClickUp. Track progress regularly.
* **Review and Iterate:** In subsequent post-mortems, revisit previous action items to ensure they’ve been implemented and are effective.

## Beyond the Meeting: A Culture of Continuous Improvement

Effective post-project reviews aren’t just about a single meeting. They're about cultivating a culture of continuous improvement. By consistently reflecting on what went well and what could be better, you can build a more resilient, adaptable, and high-performing engineering team. 

Skip the post-mortem at your peril. Invest the time, create a safe space, and turn those lessons learned into real, lasting improvements. To get started, schedule a 30-minute team discussion to brainstorm how to improve your next post-mortem process. This practice not only strengthens your team but can also lead to reduced costs, faster delivery, and improved overall morale. Your team will thank you.