# Space-Tourism Challenge by  [Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). 
## BUILT WITH REACT JS
This is my first react project

RESOLUTIONS
#### TAB VIEW
- 768 X 1024
#### DESKTOP VIEW
- 1440 X 900

### The challenge
The Destination page was challenging, changing states, using effects, costume hooks, and being dynamic, but after a couple of tutorial videos and some docs and help I got from my mentor Achugo Ebuka. I was able to pass the stage,

Users should be able to:
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot
![space-homepage-tab-view](https://github.com/Maap014/space-tourism/assets/121561250/634859f5-498e-458f-bfbb-5262e3dbd332)

![space-destination-desktop-view](https://github.com/Maap014/space-tourism/assets/121561250/a55234a2-38f5-4d82-9a08-5c44978cfc99)


### Links
- Live Site URL: [Not hosted yet](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned
- Creating routes to link pages
- use of Nav-link form react-router-dom
- Components
- Working with carousel (a bit shaky on this one)
- dynamical writing
- use states, use effect, 
- spin animation from CSS
- use of the source to change the picture at a particular with from HTLM


``` {travelTech && (
              <picture>
                <source
                  srcSet={travelTech.images?.portrait}
                  media="(min-width: 1440px)"
                />
                <img
                  src={travelTech.images?.landscape}
                  alt={travelTech.name}
                  className="tech-image"
                />
              </picture>
```
might be useful

```
import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlanetData(data);
      })
      .catch((err) => console.error("Cant fetch:", err));
  }, [url]);

  return { planetData };
};
```
then import and destructure

```
import { useFetchData } from "./useFetchData";

const Destination = () => {
  const { planetData: destinationsData } = useFetchData("/data.json");
```


### Useful resources
 I used a whole lot of sites I can't remember all, but this will help
 - Google,
 - YouTube,
 - StackOverflow,
 just learn how to search using the right words

## Acknowledgments

## ACHUGO EBUKA Thank you!!




