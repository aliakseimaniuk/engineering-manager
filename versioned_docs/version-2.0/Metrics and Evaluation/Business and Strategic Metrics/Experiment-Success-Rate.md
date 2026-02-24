# Experiment Success Rate

For two decades, I've seen engineering teams chase velocity like it's the holy grail. Story points, sprint burndown charts, code commits per hour – we obsess over *output*. But after leading teams at both startups and large organizations, I’ve come to believe that a far more critical metric is often overlooked: **Experiment Success Rate.** 

It’s not about *how much* you ship, it’s about *how often what you ship actually moves the needle.* And tracking your experiment success rate is the key to unlocking sustainable growth and avoiding the pitfall of busywork disguised as progress.

## The Problem with Output-Focused Metrics

We’re conditioned to measure what’s easily measurable. Lines of code, number of features, even story points are easily tracked. These *are* useful, but they’re *leading indicators*. They tell you how much effort is being expended, not whether that effort is yielding positive results. 

Think about it like baking. You can meticulously follow a recipe (your process, velocity) and *still* end up with a burnt cake. As Drew Procaccino highlights, a rigid process isn’t enough; a skilled chef adapts and iterates. This relates directly to ESR – simply *doing* the work doesn’t guarantee a positive outcome. A good process is *necessary*, but it's not *sufficient*.

I’ve seen too many teams churning out features that no one uses, solving problems nobody had, or, worse, actively *detracting* from the user experience. They were “productive” by traditional metrics, but ultimately, were building the wrong thing. This frantic output, particularly when coupled with poor user retention, is a significant red flag. For example, seeing 100,000 requests and 100,000 attempts per month with only three days of user retention signals a fundamental disconnect.  A short retention period like this indicates users are quickly abandoning the feature, suggesting a core problem with its value or usability. Industry benchmarks vary, but generally, a healthy product should retain a significant percentage of users well beyond a few days.

## Defining Experiment Success Rate

Experiment Success Rate (ESR) is simply the percentage of experiments (A/B tests, feature flags, prototypes, even small user interviews) that achieve a statistically significant positive result. This means the experiment demonstrably improved the key metric you were targeting (conversion, engagement, retention, etc.). 

**It's not about perfection.** Not every experiment will succeed. The goal isn't to achieve a 100% success rate – that's unrealistic and would suggest you're playing it too safe. A healthy ESR typically falls between 30-50%. This range is supported by observing successful growth-stage companies, where a consistent proportion of experiments drive meaningful impact. While internal data will always be most relevant, this provides a reasonable starting point. Anything consistently below 30% suggests a deeper problem.

## Why ESR Matters – and How It Impacts Your Team

A consistently low ESR indicates several underlying issues:

* **Poor Hypothesis Generation:** Are you asking the right questions? Are your hypotheses grounded in user research and data?  
* **Misunderstood Users:** Do you truly understand your users' needs, pain points, and motivations?
* **Flawed Implementation:** Are your experiments designed and implemented correctly, with proper controls and statistical rigor?  Understanding the unseen consequences of our actions – the assumptions we make – is crucial here, as Henry Hazlitt eloquently points out in *Economics in One Lesson*. Flawed assumptions can lead to wasted effort and misleading results. 
* **Technical Debt:** Is your infrastructure making it difficult to run and analyze experiments effectively?
* **Lack of Focus:** Are you spreading your resources too thinly, trying to solve too many problems at once?

I once led a team where the ESR hovered around 15%. Digging deeper revealed we were consistently building features based on internal assumptions rather than validated user needs. We instituted a rigorous user research process *before* any development began. This involved conducting weekly user interviews, analyzing user behavior data, and prototyping potential solutions before writing a single line of code. Within a quarter, the ESR jumped to 45%.

## Implementing ESR Tracking – A Practical Framework

Here’s how to start tracking and improving your ESR:

1. **Define "Experiment":**  Be inclusive.  Anything you’re testing with real users qualifies – from UI changes to new features.
2. **Establish Clear Metrics:**  What defines success?  Be specific and quantifiable.
3. **Maintain a Log:** Track every experiment: Hypothesis, metrics, results (positive/negative/inconclusive), and learnings.  A simple spreadsheet is a good starting point.  (Consider a tool to automate this as you scale).
4. **Regularly Review & Analyze:**  At least monthly, review your experiment log.  Identify patterns, common failure points, and areas for improvement.
5. **Focus on Learning, Not Just Success:** Treat every experiment as a learning opportunity, even the failures.  What did you learn about your users?  What could you do differently next time?

## Beyond the Number: Why a Learning Culture Matters

Tracking ESR is valuable, but it’s just the beginning. The true power lies in fostering a culture of experimentation and learning. Encourage your team to:

* **Embrace Failure:**  Don’t punish failure; reward learning.
* **Share Knowledge:**  Encourage teams to share their experiment results, both successes and failures.
* **Prioritize Learning:**  Allocate dedicated time for experimentation and learning.

Some teams may initially resist this shift, prioritizing output over learning. It's crucial to emphasize that experimentation isn't about slowing down development; it’s about ensuring that the effort invested leads to meaningful impact.

Don't just chase velocity.  Focus on building the right things, learning from your mistakes, and continuously improving your experiment success rate.  It’s not just a metric; it’s a reflection of your team’s ability to deliver real value to your users.
