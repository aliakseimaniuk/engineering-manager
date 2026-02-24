# Decision Records

For 20+ years, I’ve seen brilliant engineers make brilliant *technical* decisions. But even the smartest people sometimes struggle to articulate *why* they made those decisions, especially weeks or months later. This isn't about a lack of intelligence; it's about the natural fading of context. And in engineering, lost context isn't just frustrating—it's costly. Teams waste valuable time re-litigating past decisions, revisiting old debates, and even rebuilding solutions they already tried. That’s where decision records come in. 

Forget lengthy, bureaucratic documentation. I'm talking about a lightweight, practical approach to capturing the reasoning *behind* key engineering choices. It’s about building a collective memory, not creating another layer of process overhead. This isn’t about replacing gut feeling entirely, but *augmenting* it with documented rationale. As the saying goes, “You are not a lottery ticket,” often attributed to Nassim Taleb. Planning and adaptation minimize uncertainty – and decision records are a powerful planning tool.

## The Problem with Tribal Knowledge

Too often, crucial decisions live only in people’s heads, or in ephemeral communication channels like Slack. This "tribal knowledge" is incredibly fragile. What happens when:

* **The original decision-maker leaves the team?** Suddenly, you’re left wondering *why* something was built a certain way.
* **Requirements change?** Re-evaluating a past decision is infinitely easier when you understand the original constraints and trade-offs.
* **New team members onboard?**  A decision record provides immediate context and prevents them from unknowingly revisiting old debates. 

I’ve seen teams spend days, even weeks, reverse-engineering decisions just to understand why a particular system was designed a certain way. For example, one team I worked with spent nearly a week debugging an obscure performance issue, only to discover it stemmed from a design choice made months prior, based on a temporary constraint that no longer existed. This is a massive waste of valuable engineering time.

## What *is* a Decision Record?

A decision record isn’t a massive document. It’s a concise, structured summary answering a few key questions:

* **What was the decision?** (A clear and specific statement of the choice made)
* **Why was this decision made?** (The rationale, considering alternatives and trade-offs. This is the *most* important part!)
* **What were the alternatives considered?** (Specifically list what was debated and why those options were rejected.)
* **What are the consequences of this decision?** (Short-term and long-term impacts, risks, and potential mitigations.)
* **Who was involved?** (List key stakeholders and decision-makers.)

| Question                     | Answer                                             |
| ---------------------------- | -------------------------------------------------- |
| **What was the decision?**   | Choose database X over database Y                 |
| **Why was this decision made?** | Better scalability for anticipated user growth   |
| **Alternatives Considered**  | Database Y, Database Z                             |
| **Consequences**             | Increased initial development time, lower costs long term |
| **Who was involved?**        | Alice, Bob, Carol                                  |

I recommend keeping these records in a centralized location accessible to the team – a wiki, a shared document repository, or even dedicated tooling (though don’t overcomplicate things!).

## When to Create a Decision Record?

You don’t need to document *every* decision. Focus on those that are:

* **Significant:** Have a substantial impact on the system's architecture, performance, or user experience.
* **Complex:** Involve multiple stakeholders, trade-offs, or uncertainties.
* **Reversible with difficulty:**  Once implemented, changing the decision would be costly or time-consuming.

When faced with a complex decision, ask yourself: "Will we be able to easily recall the reasoning behind this choice in six months?" If the answer is uncertain, create a decision record. Keep it concise – clarity, not completeness, is the goal.

## Practical Tips for Implementation

* **Focus on the “Why”:** The rationale is the most critical part.  Don’t just state *what* was decided, explain *why*.
* **Encourage Collaboration:** Make decision recording a team activity. This promotes shared understanding and reduces the risk of individual bias.
* **Link to Supporting Information:**  Include links to relevant RFCs, design documents, or issue trackers.
* **Review and Update:** Periodically review decision records to ensure they remain accurate and relevant.  As requirements evolve, revisit past choices to see if they still make sense.

## Addressing Common Concerns

Some engineering managers worry that implementing decision records will add unnecessary bureaucracy. It doesn’t have to. The goal is to create a *lightweight* process that adds value, not a cumbersome one. Start small, focus on the most critical decisions, and encourage the team to adopt the practice organically. Another common concern is time constraints. The time invested in creating a decision record is far less than the time wasted re-litigating past decisions or debugging poorly understood systems.

## Beyond Avoiding Rework: A Cultural Shift

Implementing decision records isn’t just about process; it’s about fostering a culture of transparency, accountability, and shared learning. It encourages engineers to think critically about their choices, articulate their reasoning, and learn from past experiences. It builds a collective memory that benefits the entire team.

I've found that consistently applying this practice not only reduces rework but also empowers engineers to make more informed decisions in the future. It’s a small investment with a significant return.  

Just like carefully documenting the 11M historical data records we deal with, these records provide context and help us avoid repeating mistakes. 

So, start capturing the *why* behind your decisions today. Schedule a 30-minute team meeting to discuss how to implement a simple decision record process. This small step can have a significant impact on your team's efficiency, collaboration, and overall success.