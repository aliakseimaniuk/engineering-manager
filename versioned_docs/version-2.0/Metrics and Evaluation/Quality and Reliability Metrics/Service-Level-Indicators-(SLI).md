# Service Level Indicators (SLI)

How often have you celebrated 100% uptime while users complained about slow performance or frustrating errors? In the modern world of distributed systems and demanding user expectations, simply being *up* isn't enough. Users don’t care *if* your service is running; they care about *how well* it’s running. That’s where Service Level Indicators (SLIs) come in.

As engineering leaders, we often get caught in the trap of focusing on *outputs* – features shipped, bugs fixed – without truly understanding how those outputs impact the *user experience*. SLIs provide a crucial bridge between technical performance and perceived quality, and forming them is the first step towards building a truly reliable and user-centric service. This article dives into what SLIs are, why they matter, and how to implement them effectively within your engineering teams.

## What *are* SLIs, and Why Aren't They Just Metrics?

Let’s start with definitions. A **metric** is a raw measurement – CPU utilization, database query time, requests per second. These are important, absolutely. But a metric, by itself, doesn't tell you if the user experience is good or bad. 

An **SLI** is a *measurement of a particular aspect of performance*, expressed as a ratio. Think of it as framing a metric in terms of *successful* outcomes versus *total* outcomes. 

Here are a few common examples:

* **Availability:** (Number of Successful Requests) / (Total Requests) – This tells you what percentage of requests are successfully processed.
* **Latency:** (Number of Requests Finishing Below X ms) / (Total Requests) – How many requests are completing *quickly enough* for a good user experience?
* **Error Rate:** (Number of Failed Requests) / (Total Requests) – A direct measure of how often things are going wrong.
* **Throughput:** (Number of Transactions Completed) / (Time Period) – How much work is your system handling successfully?

**The key difference?** SLIs are framed around the *user’s perspective*. A high CPU utilization metric is interesting to the DevOps team, but a low latency SLI directly impacts the user’s perception of your application's speed. 



## Why SLIs Matter: Beyond Just "Keeping the Lights On"

Implementing SLIs isn't just a technical exercise; it's a cultural shift. Here's how it benefits your team and organization:

* **Data-Driven Prioritization:** Instead of gut feelings, SLIs provide concrete data to inform engineering decisions. For example, imagine your latency SLI for the "add to cart" journey starts to slip.  This data immediately signals that optimizing this critical user flow should be a priority, prompting you to investigate potential bottlenecks in your backend services.
* **Early Problem Detection:** Tracking SLIs over time allows you to identify trends and potential issues before they impact users. A slight dip in availability might be a warning sign of underlying problems.
* **Clear Communication:** SLIs provide a common language for discussing performance between engineering, product, and customer support. Everyone is aligned on what "good" looks like.
* **Improved Reliability:** By focusing on what matters to the user, SLIs encourage a more proactive and reliability-focused engineering culture. 
* **Service Level Objectives (SLOs) and Agreements (SLAs):** SLIs are the foundation for setting SLOs (targets for SLIs) and SLAs (agreements with customers about performance). You can't effectively manage expectations without first measuring the right things.

## Implementing SLIs: A Practical Guide

Okay, so you're convinced. Now what? Here’s a step-by-step approach:

1. **Identify Critical User Journeys:** What are the core actions users perform in your application? Focus on these first. For example, on an e-commerce site, it might be "product search," "add to cart," or "checkout."
2. **Choose Relevant SLIs:** For each journey, select SLIs that directly reflect the user experience. Think about what would make that journey frustrating or unsuccessful. Avoid focusing on vanity metrics that *look* good but don’t actually reflect user satisfaction.
3. **Instrument Your Code:** Use monitoring tools to collect the data needed to calculate your SLIs. Tools like syagent.com are well-suited for monitoring availability and setting up alerts.  Yandex.Metrica is excellent for tracking user behavior and calculating key performance indicators. Ensure you're capturing enough detail to analyze performance effectively.
4. **Visualize and Monitor:** Create dashboards that display your SLIs over time. Tools like Yandex.Datalens can be immensely helpful here. Set alerts to notify you when SLIs fall below acceptable thresholds.
5. **Iterate and Refine:** SLIs aren’t set in stone. Regularly review and refine them based on user feedback, changing business priorities, and evolving system architecture.



## Avoiding Common Pitfalls

Focusing on the right things is key. When choosing SLIs, avoid the temptation to track metrics that don’t directly relate to the user experience. It’s also crucial to avoid over-instrumentation, which can lead to data overload and make it difficult to identify meaningful trends. Remember, SLIs are a tool, not a replacement for understanding your users and their needs.  

Finally, avoid treating SLIs as fixed targets. The goal isn’t to hit 100% on every SLI. Some degradation is acceptable (and even expected). The goal is to detect and address issues *before* they significantly impact users.

## Conclusion: A Shift in Perspective

SLIs aren’t just about measuring performance; they’re about shifting our perspective. Implementing SLIs requires a shift in mindset and initial investment, but the long-term benefits are significant. By focusing on what truly matters to the user, we can build more reliable, user-centric applications and foster a more proactive and data-driven engineering culture. As engineering leaders, it’s your responsibility to champion this shift and equip your teams with the tools and knowledge they need to succeed. 

**To get started, identify one critical user journey and define a relevant SLI for it.**

**Resources to Get Started:**

* **Monitoring & Alerting:** syagent.com, Xitoring.com, Blynk
* **Analytics:** Yandex.Metrica, Mixpanel, Moesif
* **LLM Monitoring:** Keywords AI
* **Data Visualization:** Yandex.Datalens
* **API Analytics:** Moesif
* **Next Billion AI Services**: nextbillion.ai
* **In-Product Surveys:** Sprig