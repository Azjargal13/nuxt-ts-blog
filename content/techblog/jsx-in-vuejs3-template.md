---
title: Writing JSX in Vuejs3 component | Render function usage in the template
description: Vuejs3 gives option to write components in JSX style. This is interesting way to understand how those frameworks blend it other to produce view on browsers.
tags: "vuejs3", "jsx", "template"
label: techblog, techie
image: https://source.unsplash.com/random/600x450
createdAt: April, 21, 2021
author: Aza
---

This is interesting way of understanding the relations of Vuejs and React framework. Both of them have wide range of users rely on the framework consistency and delivers from easy project to interprise level projects.

Latest version of Vuejs, supports JSX style to write component in .Vue file. 

The relation between the framework is the way rendering the virtual node in the DOM. in React way it creates a element and it Vue, renders.

Definitely the sugar syntax is the another of writing it. For mapping the structure to native JS, any type of transpilation or sort of compiler need to be used. `Babel` is highly selective choice and released latest version that supports this need as well.

At the end of the compilation of .Vue component, it transform into render function style which runs on any browsers with plain/native JS.

And many more interesting details about the implementation of Vuejs can be studied if we are curious enough to dive into.
