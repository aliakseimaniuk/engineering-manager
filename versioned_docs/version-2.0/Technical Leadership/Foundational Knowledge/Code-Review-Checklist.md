# Code Review Checklist

What sort of things are humans really good for? What can we spot in a code review that we can’t delegate to a tool? 

It turns out there’s a surprisingly large number of things. This is certainly not an exhaustive list, nor will we go into any one of them in great detail here. Instead, this should be the start of a conversation in your organization about which things you currently look for in a code review, and what, perhaps, you should be looking for.

## Design

* How does the new code fit with the overall architecture?
* Does the code follow [SOLID principles](https://en.wikipedia.org/wiki/SOLID), [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) and/or other design paradigms the team favors?
* What [design patterns](https://en.wikipedia.org/wiki/Software_design_pattern) are used in the new code? Are these appropriate?
* If the codebase has a mix of standards or design styles, does this new code follow the current practices? Is the code migrating in the correct direction, or does it follow the example of older code that is due to be phased out?
* Is the code in the right place? For example, if the code is related to Orders, is it in the Order Service?
* Could the new code have reused something in the existing code? Does the new code provide something we can reuse in the existing code? Does the new code introduce duplication? If so, should it be refactored to a more reusable pattern, or is this acceptable at this stage?
* Is the code over-engineered? Does it build for reusability that isn’t required now? How does the team balance considerations of reusability with [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)?

## Readability & Maintainability

* Do the names (of fields, variables, parameters, methods and classes) actually reflect the things they represent?
* Can I understand what the code does by reading it?
* Can I understand what the tests do?
* Do the tests cover a good subset of cases? Do they cover happy paths and exceptional cases? Are there cases that haven’t been considered?
* Are the exception error messages understandable?
* Are confusing sections of code either documented, commented, or covered by understandable tests (according to team preference)?

## Functionality

* Does the code actually do what it was supposed to do? If there are automated tests to ensure correctness of the code, do the tests really test that the code meets the agreed requirements?
* Does the code look like it contains subtle bugs, like using the wrong variable for a check, or accidentally using an and instead of an or?

## Have you thought about…?

* Are there potential security problems with the code?
* Are there regulatory requirements that need to be met?
* For areas that are not covered with automated performance tests, does the new code introduce avoidable performance issues, like unnecessary calls to a database or remote service?
* Does the author need to create public documentation, or change existing help files?
* Have user-facing messages been checked for correctness?* Are there obvious errors that will stop this working in production? Is the code going to accidentally point at the test database, or is there a hardcoded stub that should be swapped out for a real service?

## Tests

* Are there tests for this new/amended code?
* Do the tests at least cover confusing or complicated sections of code?
* Can I understand the tests?
* Do the tests match the requirements?
* Can I think of cases that are not covered by the existing tests?
* Are there tests to document the limitations of the code?
* Are the tests in the code review the right type/level?
* Are there tests for security aspects?
* Is the performance test for the code valuable?

## Performance

* Does this piece of functionality have hard performance requirements?
* Has the fix/new functionality negatively impacted the results of any existing performance tests?
* What if there are no hard performance requirements for this code review?

## Resource Management 

* Is there something in the code which could lead to a memory leak?
* Is there a possibility the memory footprint of the application could grow infinitely?
* Does the code close connections/streams?
* Are resource pools correctly configured?

## Correctness

* Is the code using the correct data structure for a multi-threaded environment?
* Is the code susceptible to race conditions?
* Is the code using locks correctly?
* Does code use caching where it is needed?

## Code-level optimizations

* Does the code use synchronization/locks when they’re not required? If the code is always run on a single thread, locks are unnecessary overhead. 
* Is the code using a thread-safe data structure where it’s not required? For example, can Vector be replaced with ArrayList?
* Is the code using a data structure with poor performance for the common operations? For example, using a linked list but needing to regularly search for a single item in it.
* Is the code using locks or synchronization when it could use atomic variables instead?
* Could the code benefit from lazy loading?
* Can if statements or other logic be short-circuited by placing the fastest evaluation first?
* Is there a lot of string formatting? Could this be more efficient?
* Are the logging statements using string formatting? Are they either protected by an if to check logging level, or using a supplier which is evaluated lazily?

## Security

* Does your data need to be encrypted (in-rest; in-transit)?
* Are secrets being managed correctly?
* Should the code be logging/auditing behavior? Is it doing so correctly?

