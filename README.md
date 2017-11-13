# My presentation on Higher Order Components

> See the accompanying presentation [here](https://docs.google.com/presentation/d/1YIDVbovuDpMepMTG5YZF8jxRVwCwDGA2g2UZB2HCJ68/edit?usp=sharing)

## What we're building

* We're going to build a higher order component that calculates whether a child is on the screen, and passes an `isOnScreen` prop.
* The child will then only render an image if it's on the screen, cutting down on unnecessary network requests.

## Exercises left for the reader:

* Change `isOnScreen` from a boolean to an integer, indicating how far the component is from the screen. Then, start rendering the image when it is 50px from the screen.
* Make another HOC that causes `isOnScreen` to never turn false, i.e. to turn it into a flag that turns on and stays on.
