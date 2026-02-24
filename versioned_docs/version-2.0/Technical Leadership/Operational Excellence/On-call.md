# On Call

For two decades, I've seen on-call rotations treated as everything from a necessary evil to a badge of honor. The truth is, a *good* on-call system isn’t about suffering through sleepless nights; it’s about building a resilient system *and* a resilient team. It's a critical component of technical leadership, demanding thought, empathy, and a long-term view. This isn't just about responding to incidents; it's about *preventing* them and minimizing their impact when they inevitably occur.

## The Problem with "Firefighting" On-Call

I once worked at a startup where on-call was a competition. Whoever could fix the production issue fastest got bragging rights. Sounds…inspiring? Not even close. It fostered a culture of rushed fixes, skipped postmortems, and accumulating technical debt. The team was constantly exhausted, and the system became increasingly fragile.

This “firefighting” approach – equating reacting quickly with solving problems effectively – is fundamentally flawed. It often leads to band-aid solutions that mask underlying issues and increase future incidents. It also creates a toxic environment where engineers feel pressured to sacrifice their well-being to appear competent. However, I've also seen the opposite work wonders. At another company, implementing a truly humane on-call system not only reduced incident frequency but also significantly improved engineer morale and retention. The key difference? A deliberate focus on prevention and proactive support.

## Building a Humane On-Call System: Key Principles

A humane on-call system rests on three pillars: **Prevention, Detection, and Response.** Let's break down each one.

**1. Prevention: Investing in Robustness**

This is where the bulk of your effort *should* be. A well-architected, well-tested system minimizes the need for frantic on-call firefighting.

* **SLOs & Error Budgets:** Define Service Level Objectives (SLOs) for your critical services. What level of uptime and performance do your users expect? An error budget represents the amount of acceptable failure within a defined period. When you exhaust your error budget, it’s a signal to prioritize reliability work over new features. Investing in preventative measures like error budgets not only reduces incidents but also frees up engineers to focus on innovation.
* **Automated Testing:** Comprehensive unit, integration, and end-to-end tests are essential. But don't stop there. Embrace chaos engineering – deliberately introducing failures into your system to identify weaknesses before they impact users.
* **Code Reviews:** Rigorous code reviews aren't just about finding bugs; they're about sharing knowledge and improving code quality.
* **Proactive Monitoring:** Don't just react to problems; anticipate them. Monitor key metrics and set alerts to notify you of potential issues *before* they escalate.

**2. Detection: Smart Alerting & On-Call Schedules**

Effective detection isn’t about generating a million alerts; it’s about surfacing the *right* alerts at the *right* time.

* **Alert Fatigue is the Enemy:** Reduce noise by focusing on meaningful alerts. Use anomaly detection to identify unusual behavior that requires investigation. Tools like (and integrations with) cron-job.org can help monitor background job health and alert if critical tasks fail.
* **On-Call Rotation:** Fair and predictable on-call schedules are crucial. Keep rotations short – the ideal length varies based on team size and system complexity – and ensure that engineers have adequate time to recover between rotations. Avoid overburdening your most senior engineers; spread the knowledge and responsibility.
* **Clear Escalation Paths:** Define clear escalation paths for different types of incidents. Who should be contacted first? When should the incident be escalated to a higher level of support?
* **Tooling:** Services like Veriphone can be vital for escalating critical issues via phone calls or SMS, ensuring on-call engineers are notified even during outages of primary communication channels.

**3. Response: Efficient Incident Management**

When an incident *does* occur, efficient response is critical.

* **Runbooks:** Document common incidents and their resolutions in runbooks. These should be clear, concise, and easy to follow, even under pressure. Imagine a new on-call engineer confidently navigating a common outage using a well-maintained runbook – the peace of mind is invaluable.
* **Incident Command:** Establish a clear incident command structure. Assign roles (incident commander, communications lead, etc.) and responsibilities.
* **Postmortems:** Don’t just fix the immediate problem; learn from it. Conduct thorough postmortems to identify the root cause of the incident, what went wrong, and how to prevent it from happening again. Focus on blameless postmortems – the goal is to improve the system, not to assign blame. Tools like MeisterTask can be used for tracking action items resulting from postmortems.
* **Communication:** Keep stakeholders informed about the incident's progress. Provide regular updates, even if there's no new information. Transparency builds trust.

## Beyond the Basics: Supporting Your On-Call Engineers

It's not enough to just *have* an on-call system; you need to support the people who are on call.

* **On-Call Pay/Compensatory Time Off:** Recognize the effort and disruption of being on call. Compensate engineers fairly for their time and commitment.
* **Minimize Interruptions:** Design systems to minimize unnecessary interruptions during off-hours. Batch non-critical tasks and defer them until business hours.
* **Psychological Safety:** Create a culture where engineers feel safe to admit mistakes and ask for help. This is essential for effective incident response and learning. Encourage open communication during incidents – a team that feels comfortable sharing information will resolve issues faster and more effectively.

It's also important to acknowledge that implementing a truly humane on-call system requires investment – of time, resources, and potentially budget. Some engineers may even *enjoy* the challenge of “heroic” firefighting, and leaders may be hesitant to prioritize preventative measures. Addressing these potential challenges upfront can foster buy-in and ensure successful implementation.

I've seen firsthand that investing in a humane on-call system isn’t just the right thing to do for your team; it’s also the smart thing to do for your business. It leads to more reliable systems, happier engineers, and ultimately, a more successful product.

**Next Steps: 3 Actions You Can Take Today**

1. **Schedule a team discussion about on-call fatigue.** Understand the challenges your engineers face and brainstorm solutions.
2. **Review your existing alerting rules for noise.** Eliminate unnecessary alerts and focus on the signals that truly matter.
3. **Identify one area where you can improve preventative measures.** Perhaps it's adding more automated tests, improving monitoring, or investing in chaos engineering.

**Further Exploration:** Consider tools like Cronhooks to schedule automated tests and reliability checks during off-peak hours as part of proactive maintenance. The more you automate reliability, the less reactive your on-call system will need to be.
