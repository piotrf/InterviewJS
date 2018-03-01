## 02-03-2017

* it is now possible to delete interviewees
* added a simple google auth screen, working sign out cta in the listing
* extended bubble styles to support 'typing' animation
* documented Animator wrappers
* integrated icons throughout
* make composer fetch srctext on load, save back on blur
* srctext is now dynamic based on active interviewee

## 22-02-2017

* integrated simple speech bubble groups in the storyline pane with react-stay-scrolled
* stories dataset has been remodelled, added a simple chat `Meeting Ava` to test this dataset model against display logic
* interviewees switch features a direct link to interviewees’s tab in story details modal (the button next to the avatar)
* composer has now interviewees switch that toggles between interviewees’ storylines (avatars in the top center below the title)
* composer’s interviewee panel’s (left) has now tabs setup for all different speech bubble types
* forms have now field validation where necessary (i.e. prevents the user from saving a story without a title, ecc.)
* managing story details (meta, intro, interviewees, style) has been merged into a single modal dialog with tabs
* if listing is empty, there is now a CTA to create a new story
* there is now a `welcome` screen with a brief intro as per prototype, it appears only on first visit
* new story flow is now finalised, last step redirects to the composer
* it is now possible to add and edit interviewees both in the `create story` flow as well as listing and the composer itself
* new stories are assigned formatted creation date automatically
* story delete confirmation modal

## 15-02-2017

…
