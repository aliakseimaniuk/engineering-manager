# Availability

For 20+ years, I’ve seen engineering teams chase shiny new features, optimize for performance, and debate architecture endlessly. And while those are *important*, there's one critical aspect of technical leadership that consistently gets underappreciated until it bites us: **Availability.** It's not glamorous, it’s often reactive, and it's *always* a conversation starter when things go wrong. But building for availability isn’t just about uptime; it's a fundamental expression of respect for your users and a hallmark *of* a mature engineering organization.

This isn't a post about on-call rotations (though that’s a piece of the puzzle). It’s about weaving availability into the *fabric* of your technical strategy, your team’s culture, and your leadership approach.

## Beyond Uptime: What *Really* Is Availability?

Let's get granular. Uptime is a binary state: up or down. Availability is more nuanced. It’s the *probability* that your service is functional when a user attempts to use it. It encompasses things like:

* **Functional Correctness:** The service doesn't just respond, it responds with *correct* data. A 500 error is downtime, but a subtly wrong calculation is a *loss of availability* that’s far harder to detect.
* **Performance:** A service that takes 30 seconds to respond is technically “up,” but effectively unavailable to the user—imagine waiting that long for a search result. Latency is a core component of availability.
* **Degradation Gracefully:** Can your system handle partial failures? Can it prioritize core functionality even when some features are unavailable? This is *critical* for maintaining a usable experience.
* **Data Consistency:** Is the data your users see accurate and reliable? Inconsistencies erode trust and, therefore, availability.

Thinking of availability in this broader sense reframes the problem. It’s not just a sysadmin issue; it’s a *product quality issue* that requires collaboration across the entire engineering organization.

## Leading the Charge: From Reactive Firefighting to Proactive Planning

As a leader, you need to foster a culture where availability isn't an afterthought. Here’s how:

1. **Define SLOs (Service Level Objectives):** This is non-negotiable. Before you build anything, define what level of availability you're promising to your users. "99.9% uptime" sounds great, but what does that *mean* in terms of acceptable error rates, latency, and data consistency? SLOs should be measurable, meaningful, and tied to the user experience.
2. **Error Budgets:** SLOs are targets; error budgets are the *allowable* amount of failure. This is a surprisingly powerful concept. It gives teams the freedom to innovate and experiment, *as long as they stay within the budget*. Exceeding the budget triggers a shift towards reliability work. It's a healthy balance between feature development and stability.
3. **Embrace Failure (Responsibly):** "Fail fast" isn't just a buzzword. Regular chaos engineering exercises (intentionally introducing failures into your system) are invaluable. They reveal weaknesses *before* real users experience them. Start small, but make it a habit.
4. **Architect for Resilience, Not Just Scalability:** Scalability lets you handle *more* traffic. Resilience lets you survive *failures*. Think about redundancy, circuit breakers, retry mechanisms, and data replication. Consider technologies that can aid in this – for example, utilizing tools like getstream.io for resilient real-time communication channels, or hasura.io to provide a resilient GraphQL API over your existing data sources.
5. **Prioritize Observability:** You can't improve what you can't measure. Invest in robust monitoring, logging, and tracing. Tools like Prometheus, Grafana, and Jaeger are essential. But observability is more than just tooling; it's about creating a culture where understanding system behavior is a priority. This means empowering engineers to explore data, ask "why" questions, and proactively identify potential issues before they impact users. It’s a shift in mindset, focusing on understanding the *system as a whole*, not just individual components.

## Leading by Example: A Personal Anecdote

Early in my career, I led a team building a high-throughput API. We were laser-focused on performance, and availability was an afterthought. We launched, and immediately experienced intermittent errors during peak hours. We spent weeks firefighting, patching, and blaming infrastructure.

Finally, a senior engineer pointed out the obvious: we hadn't defined any SLOs. We didn't know *what* level of availability we were promising, or what constituted a failure. It was a humbling experience.

We took a step back, defined SLOs, and started monitoring our error budget. Suddenly, we had a clear objective, and a framework for prioritizing reliability work. It wasn't just about fixing bugs; it was about proactively preventing them.

## Availability as a Competitive Advantage

In today’s world, availability isn't just a technical requirement; it's a *competitive advantage*. Users expect seamless experiences, and they'll quickly abandon services that are unreliable.

As a technical leader, you have a responsibility to build systems that are not just fast and scalable, but also resilient and available. It requires a shift in mindset, a commitment to proactive planning, and a willingness to prioritize reliability alongside feature development. It's not always glamorous, but it’s always the right thing to do. And ultimately, it’s what separates good engineering organizations from truly exceptional ones.
