# Requirements Gathering

How much time and money does your team waste on building the wrong thing? For decades, engineering leaders have struggled with the process of gathering requirements – not the *need* for them, but the *way* we do it. We’ve swung from rigid, document-heavy waterfall specs to seemingly free-form Agile user stories, and yet the fundamental friction remains: requirements often *feel* like something done *to* engineers, rather than *with* them. It’s time we revisit requirements gathering, not as a project management formality, but as a critical engineering discipline.

This isn’t about declaring war on user stories or advocating for a return to monolithic BRDs. It’s about recognizing that the way we gather and translate needs into executable work profoundly impacts team velocity, quality, and ultimately, product success. My aim isn’t to offer *another* requirements methodology, but to shift the mindset and propose practical changes that empower engineering *during* the requirements phase.

## The Persistent Problem: Specs vs. Needs

I’ve seen the same pattern repeat itself across startups and large enterprises. Teams spend weeks (or months!) crafting detailed specifications, only to find they describe *how* to solve a problem, not *what* problem needs solving. This often stems from a historical reliance on translating business needs directly into technical implementation details – a holdover from the mainframe days. We’d spend all our time figuring out *how* to build something on a new platform (Unix, RAD tools) instead of validating *if* it was the right thing to build.

The result? Engineering feels constrained, innovation stifled, and the inevitable "but what if…" conversations emerge late in the cycle, leading to costly rework. The documents become shelfware, bypassed in favor of hallway conversations and assumptions. And when we *do* try to fix this with Agile methodologies, simply breaking requirements into user stories doesn’t automatically address the underlying issue of *how* those stories were initially conceived.

## Introducing Developer Guidance at the Planning Stage

The key, I've found, is to involve engineering *early* – not just to estimate effort, but to actively participate in shaping the requirements. Here's a practical framework:

**1. Timeboxed Exploration Spikes:** Before committing to detailed specifications or story writing, dedicate short, focused “exploration spikes.” These aren’t full-blown development efforts, but rather timeboxed investigations (1-3 days) led by engineers, focused on feasibility.

* **Example:** A new feature requires integration with a third-party API. Before writing stories, an engineer investigates the API’s limitations, authentication methods, and potential performance bottlenecks.
* **Deliverable:** A brief report outlining technical constraints, potential risks, and alternative approaches.

**2. Focus on "What" Not "How":** Specifications (or even user stories) should primarily articulate the *business need* and desired *outcome*, avoiding prescriptive implementation details. Think in terms of user goals, not interface elements.

* **Bad:** “The user should be able to click a ‘Submit’ button to save the form.”
* **Good:** “The user needs to reliably save their progress and receive confirmation.” 

This seemingly small shift allows engineers to leverage their expertise to devise the most efficient and maintainable solution.  Understanding the underlying motivation, as highlighted in the work of Jin ZX et al (2007), is crucial. Consider a scenario where a product manager requests a complex reporting feature. Instead of immediately outlining the visualization details, explore *why* the user needs this report. Are they trying to identify a specific problem impacting revenue? Are they making a crucial business decision based on this data?  Uncovering the underlying need might reveal a simpler solution – perhaps a focused dashboard or an automated alert – that achieves the same goal with less effort. This is where root cause analysis becomes essential for defining the true "what."

**3. Collaborative Refinement Sessions:** Instead of handing down requirements, facilitate collaborative sessions where engineers, product managers, and designers discuss and refine the needs together. These sessions should focus on identifying ambiguities, clarifying assumptions, and ensuring technical feasibility.

## The Agile Sprinkle: Why Terminology Isn't Enough

I’ve seen teams adopt Agile terminology – sprints, burndown charts, backlog grooming – without fundamentally changing their requirements gathering process. This is the “Agile sprinkle” – adding a bit of buzzword compliance without addressing the core problem. We continued delivering software with our specs, but the underlying friction remained. True agility requires a shift in mindset, empowering engineers to actively participate in defining the problem, not just solving it.

## Reclaiming Requirements: A Path to Engineering Empowerment

Requirements gathering shouldn’t be a gatekeeping exercise. It's an opportunity for collaboration, innovation, and empowering our engineering teams. By incorporating developer guidance at the planning stage, focusing on business needs over implementation details, and delving into root causes, we can create a requirements process that fuels velocity, quality, and ultimately, product success. Start by incorporating timeboxed exploration spikes into your next project. Schedule a collaborative refinement session with your team. These small steps can dramatically improve your requirements process. Let’s empower our engineering teams to define success by reclaiming requirements gathering as a collaborative, problem-solving process.

**References:**

Jin ZX, et al. (2007). Root cause analysis for requirements elicitation. *Proceedings of the 9th International Conference on Information Integration for Concurrent Engineering*.