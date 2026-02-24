# Learning From Failures

We talk a lot about failure in software engineering. We *should* talk about it. But too often, our approach feels…performative. A postmortem here, a blameless postmortem there. We check the boxes, identify the “root cause,” and move on. But are we *actually* learning? Are we building teams that see failure not as a setback, but as a crucial stepping stone? 

I recently worked with a team that had a critical production outage. They ran a textbook postmortem, identified the immediate technical cause, and…nothing changed. A month later, a similar issue brought them down again. It wasn’t a technical skill gap; it was a lack of systemic learning. This experience reinforced what I’ve seen over 20+ years in this industry, leading teams at both startups and large tech companies: successes are important, but understanding *why* teams stumble is far more critical. And, shockingly, it’s rarely a technical issue. It’s almost always a character-related one. A lack of psychological safety, a fear of vulnerability, a reluctance to honestly assess what went wrong. 

This isn’t about avoiding failure – that’s impossible. It's about building a culture where failure *fuels* learning, innovation, and ultimately, success. Let’s move beyond the checklist postmortem and dive into how to build a truly learning culture.

## Beyond Check-the-Box Postmortems: Building a Proactive Learning Culture

Postmortems, when done right, are a good starting point. They force us to document *what* happened. But they often fall short of addressing *why* it happened at a deeper level. They can easily become exercises in identifying a single “root cause” – a convenient narrative that absolves us of the harder work of introspection. 

Consider this: a recent study by Lehtinen et al. highlighted the complex web of relationships in software failures, often involving communication breakdowns and inadequate tooling. It’s rarely just *one* thing. It's often a confluence of process issues, communication breakdowns, inadequate tooling, and – crucially – a lack of willingness to acknowledge vulnerabilities. 

Furthermore, as Jørgensen and Sjøberg pointed out over two decades ago, we often *don’t* learn from experience. We repeat mistakes, clinging to familiar patterns even when they demonstrably fail. Why? Because true learning requires discomfort, vulnerability, and a willingness to challenge our own assumptions. 

## Building a Culture of Psychological Safety

Psychological safety is the bedrock of a learning culture. It's the belief that you won’t be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes. It's not about being *nice*; it's about creating an environment where honesty and constructive criticism are valued. 

Here are some practical steps:

* **Lead by Vulnerability:**  As a leader, be the first to admit your own mistakes. Share what you learned from them.  This models the behavior you want to see in your team.
* **Normalize Failure:**  Actively talk about failures *before* they happen.  Discuss potential risks and encourage brainstorming around how to mitigate them. Frame failure as an inevitable part of the process. 
* **Focus on Systems, Not Individuals:** When something goes wrong, shift the conversation away from *who* made the mistake and towards *what* systemic issues contributed to it. Card’s work on defect causal analysis is crucial here. Look for patterns and vulnerabilities in your processes.
* **Active Listening & Curiosity:** When a team member raises a concern, truly listen. Ask clarifying questions. Show genuine curiosity. Don't interrupt or dismiss their perspective.
* **"No Blame" Retrospectives:**  Explicitly establish ground rules for retrospectives that emphasize learning over assigning blame. Use techniques like "Start, Stop, Continue" to encourage constructive feedback. 

## Beyond the Retrospective: Continuous Learning

A truly learning culture isn't just about reacting to failures; it's about proactively seeking out opportunities for improvement. 

* **Experimentation & "Controlled Failure":** Encourage experimentation, even if it means accepting a certain level of failure. Create a safe space for trying new approaches and learning from the results.  Treat experiments as learning opportunities, not as high-stakes projects.
* **Knowledge Sharing:**  Establish mechanisms for sharing knowledge and lessons learned across the team. This could include regular brown bag sessions, internal wikis, or documentation best practices.
* **Peer Reviews & Code Reviews:**  These aren't just about catching bugs; they're about fostering a culture of learning and collaboration. Encourage reviewers to focus on both technical correctness *and* opportunities for improvement.
* **"Failure Bows":** This is something I’ve implemented in several teams. When someone identifies a mistake they made that impacted the team, they briefly present it to the group, explaining what they learned and how they’ll prevent it in the future. We facilitate this as a quick, 5-10 minute presentation during our weekly team meeting. The key is to create a supportive environment where vulnerability is valued, and the focus is on collective learning. It’s public acknowledgement, learning, and a powerful signal that admitting mistakes is valued.

## The Importance of Fast Feedback: Never Fail CD

I often tell my teams: “Never fail CD”. While it sounds harsh, it’s about ensuring failures are fast, small, and contained. Continuous Delivery isn’t just about deploying quickly; it’s about getting feedback quickly. Every failed deployment is a learning opportunity, but only if you can quickly diagnose the issue and iterate. Faster feedback loops allow for quicker identification of root causes and faster iteration on solutions. Large, infrequent releases amplify the risk and hinder learning.

## It’s Not About Avoiding Failure, It’s About Embracing Learning

Building a truly learning culture isn’t easy. It requires a conscious effort, a commitment to psychological safety, and a willingness to embrace vulnerability. But the rewards are substantial: a more innovative, higher-quality, and resilient team. 

Remember, failure isn’t the opposite of success; it’s a stepping stone. The key is to learn from it, adapt, and keep moving forward. 
