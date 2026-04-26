---
title: Maximising involvement in mixed seniority engineering teams
permalink: /my-blog/maximising-involvement-in-mixed-seniority-engineering-teams/
layout: default
---

I’ve been meaning to write on this topic for some time now, but Tito’s recent blog post on “[The resilience of mixed seniority engineering teams](https://rbs-tito.medium.com/the-resilience-of-mixed-seniority-engineering-teams-eacb98f185d1)“ gave me some extra motivation to actually make it happen.

Plus, you asked for it too…

> Would you be interested in reading about any of these topics?  
>   
> Effective _____ techniques
> 
> — Craig J. Bass (@craigjbass) [November 2, 2020](https://twitter.com/craigjbass/status/1323333634317799424?ref_src=twsrc%5Etfw)

## Involvement

Often we look at involvement in the work as a good measure of success. This is definitely something that I keep my finger firmly on the pulse with, and as soon as I sense some people are being excluded from certain aspects of the team workload, I know I need to take action.

Most leads have realised this, and do appropriately keep on top of this.

It often goes like this: How involved are all our engineers in the broad array of engineering backlog items we have in play? 

The problem? Downplaying the value of non-engineering work. 

## Non-Engineering work is first-class

High-performing teams are self-sensing, self-regulating, self-organising organisms. They cannot function effectively if only the senior individuals or, worst case, the lead, has a monopoly on strategy, process, architecture, product, customer interaction, etc.

First, recognise that involvement isn’t just about engineering work; it needs measuring for all work types. This means devolving things like product strategy and process innovation to the most junior and most senior folks on your team alike.

## Psychological safety

Or most commonly just “safety”. What I have noticed is that there are numerous guides on how to achieve this, and they talk about why it is important to have as “involvement in discussions” or something really hand-wavey like “to get the most out of your team”. 

Have you thought about why you want everyone on your team to feel comfortable raising anything at any time? 

If you are a leader, are you comfortable with your most junior team members raising opinions on your high-level strategy or team process? What about if they were empowered to change team process with quite a high degree of autonomy? What is your comfort level here?

**A leader's role is to maximise how distributed the team(s) decision-making is, not to centralise it.**

Decentralising decision making requires resilience against the dangers [of it], but before you can start to build in that resilience effectively, you need to tackle the problem of involvement.

**You can’t decentralise decision-making if you can’t involve people in decision-making.**

## Lowering the barrier to entry

Many teams struggle to lower the barrier for engineering work. However, I’m not going to discuss potential options to tackle this (like TDD, pipelines, and trunk-based development) in this article.

Let’s consider the product strategy. How might leadership guide but devolve it to the whole team?

I think about this as sort of an accessibility problem. Most senior individuals have developed mental models to sense-adapt, navigate, and use their experience to notice gaps or flaws within (mostly) verbally communicated strategies. These strategies then get translated into backlog items, often disconnected from the true value chain and decision making.

This typical approach leaves people on your team either entirely clued in and involved, guessing why decisions were made, or totally in the dark and unable to contribute.

With the first two scenarios, you will see active engagement and questioning, and sometimes frustrating back and forth as you attempt to justify “the strategy”. With the last scenario, you will see people picking up backlog items without questioning why they are doing the work.

We can do better.

We need Maps. Maps that expose assumptions, bets, the value chain, our user’s needs. These maps also can’t just be presented to the team; everyone has to be equally involved in creating, maintaining and eventually disposing of out of date content.

## Mapping vs Verbal Strategy

I think it’s useful to think about the downsides of verbal strategy, and what it actually means in terms of comprehension and accessibility. 

Verbally communicated strategies are comprised of words strung together, interpreted by others, strategies communicated this way are ubiquitous but often result in fundamental misunderstandings. 

**A word or phrase may have subtly different meanings for different listeners** , and while**** this can be mitigated by carefully crafting questions while considering the ladder of inference. In my experience, this careful crafting has to come from multiple individuals to be effective. It just does not scale, and certainly isn’t a resilient way of lowering the barrier to entry.

On the other hand, maps are targetted tools to expose assumptions, highlight risks, and agree (or disagree) on both the current state of play and future intentions. By limiting the scope of the conversation and illustrating the dimensions of the data, there is much less room for error when interpreting the information.**Maps are a way of providing a sort of error checking protocol into discussions.**

One of my favourite maps is a Lean Value Tree. These break down strategies against a mission into tangible bets that the whole team can scrutinise and contribute to. Using these as a tool, leaders can begin to avoid discussions about why we’re not building X, and crucially help engineers tie every line of code back to some user need.

[ ![](https://images.squarespace-cdn.com/content/v1/5dac5323a864e01a45e394ff/1612450042201-YIOSLVKS8HLE2PQWDA7V/image-0d05c7dec26ad530acda131a281542fd.png) ](https://www.google.co.uk/books/edition/_/Z-yoDwAAQBAJ?gbpv=0&hl=en)

I recommend this book for further reading on Lean Value Trees.

Another useful map is a prioritisation grid. An excellent example of this is Technical Debt mapped onto a Prioritisation Grid. Instead of silos of knowledge in various team members’ heads, the team has a constantly evolving shared view of what low hanging refactoring fruit is on the horizon. There is also a view of what technical debt is absolutely not worth tackling, avoiding the scenario where developers go rogue to refactor unimportant structural issues. 

Lastly, I couldn’t mention maps without, at least, a reference to Wardley Maps. I find them immensely helpful for visualising value chains, and helping teams understand what they should expend effort on building themselves vs buying off the shelf. When used at a higher level, it can help you understand where your team shapes will need to be in the future. 

## Why do I invest in maps?

A big detractor for some is the cost of mapping. These maps are likely going to be drawn up in “big” meetings. Often there is serious hatred for big meetings, which can be a barrier for entry… ironically to lower the barrier to entry. **Remember, it is often not the output (the map) that is valuable;** it is the understanding built during the creation, amendment and decommissioning of the maps. 

**My answer to this is that we often have to invest time upfront to move at pace later.** Taking this approach can save an awful amount of back and forth and disagreements, but it also brings the whole team together. Regardless of seniority is enables people to understand and engage in the strategy, and in return, it enables the team to leverage the brains of everyone within it.
