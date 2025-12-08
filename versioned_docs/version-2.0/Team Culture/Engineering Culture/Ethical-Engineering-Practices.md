# Ethical Engineering Practices

For over two decades, I've watched engineering teams build incredible things. I’ve also seen, repeatedly, how good intentions can erode under pressure – pressure to deliver, to meet unrealistic deadlines, to simply *get it done*. We talk a lot about technical debt, but what about the ethical debt we accumulate when we compromise on quality, transparency, or even honesty? This isn't about grand moral failings; it’s about the subtle, creeping compromises that become normalized, and ultimately, damaging.

This article, fitting within the "Team Culture" category, isn't a lecture on abstract principles. It’s a call to awareness, a guide to recognizing the common patterns that lead to unethical behavior, and – crucially – how to build a team culture that actively resists them.

I recently witnessed a team, facing an aggressive launch date, quietly bypass crucial security testing. The reasoning? “We’ll address it in the next patch.” It was a seemingly small compromise, but it set a dangerous precedent and left the company vulnerable. This kind of situation is far more common than we’d like to admit.

## The Illusion of Control & Shifting Responsibility

There’s a dangerous tendency in our industry to frame failures as individual developer errors rather than systemic problems. We’ve all seen it: a post-mortem that focuses on “coding mistakes” instead of a lack of proper testing, insufficient time allocated for the task, or poorly defined requirements. Tiedeman’s work on post-mortems from 1990 highlights this – methodologies are often used not to *prevent* risk, but to *shift* responsibility. 

This isn't necessarily malicious, but it *is* deeply unethical. It creates a culture of fear, where developers are incentivized to hide mistakes rather than learn from them. It absolves managers and leadership from accountability for creating the conditions that led to the failure. 

**Visual Suggestion:** A simple diagram illustrating a failure investigation. One side shows a “blame the developer” approach (a downward arrow pointing at an individual). The other side shows a systemic approach (a circular diagram showing interconnected factors like time, resources, requirements, and process).

## The Fictions We Build & Maintain

We often *act as if* things exist that don’t. Realistic timelines. Fully-vetted requirements. A stable and predictable infrastructure. These are often fictions we maintain to keep projects moving forward. Runeson and Höst’s work emphasizes the importance of accurately reporting case study research – a point easily extended to all engineering work. If we constantly present an idealized view of progress, we lose sight of the real challenges and the compromises we're making.

Think about the “quick fix” that’s rushed into production because “we have no other choice.” It might solve the immediate problem, but it introduces technical debt *and* erodes integrity. The infrastructure that “militates against quick iterations” (Runeson et al, 2012) isn’t just a technical problem; it’s an ethical one. Ignoring it because it’s too inconvenient is a compromise. 

These fictions, while seemingly harmless, create an environment where unethical behavior becomes normalized. We begin to accept shortcuts as necessary, and the line between expediency and integrity becomes blurred.

## The Pressure to Deliver & the Compromise of Honesty

The most common manifestation of unethical behavior isn't malice, but a desperate attempt to meet unrealistic expectations. This manifests in several ways:

* **Inflated Progress Reporting:** “80% complete” when, realistically, it’s closer to 50%. *For example, a team might overestimate completion to avoid appearing behind schedule, masking underlying issues.*
* **Downplaying Risks:** Minimizing potential problems to avoid disrupting the timeline. *A project manager might downplay security vulnerabilities to keep the launch on track, even if it puts users at risk.*
* **Cutting Corners on Quality:** Skipping tests, ignoring code smells, releasing buggy software. *A developer might bypass unit tests to meet a deadline, knowing it will likely lead to more bugs later on.*
* **Ignoring Security Concerns:** Postponing security fixes to get the product out the door. *A team might defer patching a critical security flaw until after the launch, prioritizing speed over user safety.*

These aren't isolated incidents. They are systemic behaviors fueled by a culture that prioritizes speed over quality and transparency. And they are often justified with phrases like "it's just a temporary fix" or "we'll address it in the next sprint.” But those fixes rarely materialize, and the integrity of the project is compromised.

## Why Ethical Engineering Matters for Business

Before diving into how to *build* an ethical culture, it’s vital to understand *why* it matters beyond simply "doing the right thing."  Ethical engineering directly impacts the long-term success of your project and your organization.  Prioritizing quality reduces rework and maintenance costs. Transparency builds trust with stakeholders. Strong security protects your reputation and your users. And, importantly, a culture of integrity boosts team morale and fosters a more sustainable, reliable product. It’s not just the right thing to do; it's the smart thing to do.

## Building a Culture of Ethical Engineering

To build a truly ethical engineering culture, you need to:

* **Embrace Radical Candor:** Encourage open and honest communication, even when it's difficult. Create a safe space for team members to raise concerns without fear of retribution.
* **Prioritize Quality & Transparency:** Make quality a non-negotiable priority. Be transparent about risks and challenges. 
* **Realistic Planning & Time Allocation:** Don't ask your team to do the impossible. Allocate sufficient time for testing, code reviews, and addressing technical debt. This ties back to the cleantech example – understanding fundamental constraints is vital. Just as cleantech companies failed by ignoring fundamental constraints, software projects can fail when unrealistic timelines are imposed.
* **Lead by Example:** Be honest about your own mistakes and limitations. Demonstrate a commitment to ethical behavior in all your interactions.
* **Focus on Systems, Not Individuals:** When something goes wrong, focus on identifying the systemic factors that contributed to the failure, not on blaming individuals. 
* **Regular Ethical Check-ins:** Dedicate time in team meetings to discuss ethical considerations related to the current project.

Ethical engineering isn't about avoiding all risks or achieving perfection. It's about making conscious, informed decisions, prioritizing honesty and transparency, and creating a culture where ethical behavior is valued and rewarded. It’s about acknowledging that sometimes, the most ethical thing you can do is push back on unrealistic expectations, even if it means delaying a launch or admitting a mistake.

It's a long game, but one that ultimately leads to more sustainable, more reliable, and more trustworthy software – and a team you can be proud to lead.

What’s one small step you can take this week to foster a more ethical engineering culture on your team?