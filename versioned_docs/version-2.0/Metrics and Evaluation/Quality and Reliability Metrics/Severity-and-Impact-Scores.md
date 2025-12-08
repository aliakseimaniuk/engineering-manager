# Severity And Impact Scores

For two decades, I've seen engineering teams grapple with bug tracking. And a surprisingly consistent pain point? Severity and Impact scores. Too often, they’re treated as an afterthought – a quick “High/Medium/Low” slapped on a ticket before it’s triaged. This simplistic approach leads to wasted time, misaligned priorities, and ultimately, a less stable product. 

I recently spoke with an engineering manager who described a single bug triage meeting lasting over three hours – all because the team couldn’t agree on the severity of a UI glitch. That’s a significant drain on valuable engineering time. This isn't about being pedantic. It's about recognizing that effective severity and impact scoring isn't just *about* bugs. It’s about *decision-making*. It’s a critical piece of your team’s operating system, and refining it yields significant returns. Let’s move beyond the basics and build a system that truly drives effective engineering decisions.

**What You'll Learn:**

*   Why traditional "High/Medium/Low" scoring systems often fail.
*   How to deconstruct bug prioritization into distinct Severity and Impact dimensions.
*   A practical numerical scoring system for both Severity and Impact.
*   Guidance on combining scores and prioritizing bug fixes.
*   Key considerations for implementing and refining your scoring system.

## The Problem with “High/Medium/Low”

The biggest issue with broad classifications is ambiguity. What constitutes "High" severity to one engineer might be "Medium" to another. This leads to:

*   **Triage Bottlenecks:** Endless debates about priority.
*   **Delayed Resolutions:** Important issues get lost in the noise.
*   **Developer Frustration:** Feeling like the system is arbitrary and doesn't reflect true risk.
*   **Poor Data for Trend Analysis:** Aggregated "High/Medium/Low" data is rarely insightful. You can't reliably identify systemic issues or track improvement.

I've seen teams spend *hours* in triage meetings arguing over the categorization of a single bug, time that could have been spent *fixing* bugs. That’s a clear signal your system needs a revamp.

## Deconstructing Severity and Impact: A Two-Dimensional Approach

The key is to treat Severity and Impact as *distinct* but related concepts. 

*   **Severity:** How *broken* is the functionality? This is a technical assessment. Does it cause a crash? Data corruption? A complete loss of functionality?
*   **Impact:** How does this affect the *user* or the *business*? This is a customer-centric assessment. How many users are affected? Does it block a critical workflow? Does it damage the company's reputation?

Think of it like this: a minor UI glitch might have low impact, but a security vulnerability, even if not immediately exploitable, can have *high* impact.

**Let’s illustrate with an example:** Consider a character encoding issue that causes a display glitch for a small percentage of users on a non-critical page. The *Severity* might be low (a minor visual annoyance), but the *Impact* could be moderate if those affected users are key enterprise clients. 

**I recommend a numerical scoring system for both:**

*   **Severity (1-5):**
    *   **1 - Cosmetic:** Minor visual issues, typos. No functional impact.
    *   **2 - Minor:** Annoying but doesn’t impede functionality. Workaround available.
    *   **3 - Moderate:** Functional impairment. Workaround possible, but inconvenient.
    *   **4 - Major:** Significant functional impairment. Limited workaround.
    *   **5 - Critical:** System crash, data corruption, complete loss of functionality. No workaround.
*   **Impact (1-5):**
    *   **1 - Negligible:** Affects very few users (e.g., less than 1 %) and has minimal business effect.
    *   **2 - Low:** Affects a small number of users (less than 5 %) and causes minor inconvenience.
    *   **3 - Moderate:** Affects a significant number of users (5-20 %) or impacts a non-critical workflow.
    *   **4 - High:** Affects a large number of users (more than 20 %) or blocks a critical workflow.
    *   **5 - Critical:** Causes widespread outage, significant data loss, or severe reputational damage.

![Severity/Impact Matrix](https://example.com/severity_impact_matrix.png)  *(Visual Suggestion: A 5x5 matrix visually representing the combined scores. Each cell could be color-coded to indicate priority – e.g., Red for high priority, Yellow for medium, Green for low.)*

## Combining Scores for Prioritization

Once you have both scores, you can calculate a combined priority score. A simple approach is multiplication: `Priority = Severity * Impact`. 

This provides a more nuanced prioritization than relying solely on broad categories. A bug with Severity 4 and Impact 4 (Priority 16) is clearly more urgent than a bug with Severity 3 and Impact 2 (Priority 6), even though both might be labeled “High” in a simplistic system.

**Consider these guidelines:**

*   **1-5:** Low Priority - Fix when time permits.
*   **6-10:** Medium Priority - Address in the next sprint or iteration.
*   **11-15:** High Priority - Address immediately.
*   **16-25:** Critical Priority - Requires immediate attention and potentially a hotfix.

## Beyond the Scores: The Importance of Context and Communication

While a scoring system is valuable, it’s not a substitute for clear communication. Here’s what I’ve learned:

*   **Define the Criteria:** Ensure everyone on the team understands what each score level *means*. Document it!
*   **Encourage Discussion:** Don’t just assign scores in isolation. Discuss the bug with the reporter, the affected users, and other engineers to get a comprehensive understanding.
*   **Document the Rationale:** In the bug tracking system, briefly explain *why* a particular score was assigned. This provides valuable context for future reference.
*   **Regularly Review & Refine:** Your system will need adjustments. As your product evolves, so should your scoring criteria.

Implementing a new system like this isn’t always seamless. Be prepared for resistance to change and allocate time for training. Remember that a well-defined process is more effective than a complex one.

## A Small Change with Big Impact

Investing in a well-defined Severity and Impact scoring system isn’t glamorous. It won’t make headlines. But it *will* improve your team's efficiency, reduce frustration, and ultimately, deliver a more stable and reliable product. 

I’ve seen firsthand how a small change to this fundamental process can yield significant returns. Don’t underestimate the power of clear, data-driven prioritization.

**Ready to get started? Here's a quick checklist:**

*   Define the criteria for each score level for both Severity and Impact.
*   Train your team on the new system and ensure everyone understands the scoring criteria.
*   Encourage open discussion during bug triage to ensure consistent scoring.
*   Regularly review and refine the scoring criteria based on feedback and evolving product needs.



**References:**

*   Bjørnson, F. E., et al. (2009). Root cause analysis: A handbook. Auerbach Publications.
*   Cerpa, N., et al. (2010). Estimating software project outcomes: An empirical study. IEEE Transactions on Software Engineering, 36(6), 763–775.
*   McLeod, D., & MacDonell, S. G. (2011). Factors affecting project outcomes: A study of software projects. Information and Software Technology, 53(1), 64–76.