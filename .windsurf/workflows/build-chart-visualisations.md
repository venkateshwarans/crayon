---
description: Build different chart type using recharts on top of existing chart components
---

## Running the Project

To view and interact with the chart components:

1. **Install dependencies**
   ```bash
   cd /Users/venkat/Work/thesys/crayon/js && pnpm install
   ```

2. **Run Storybook**
   ```bash
   cd /Users/venkat/Work/thesys/crayon/js/packages/react-ui && pnpm storybook
   ```

3. **Access Storybook UI**
   - Open your browser to http://localhost:6006/
   - Navigate to the "Charts" section in the Storybook sidebar
   - View all available chart components including GaugeChart, BubbleChart, and others
   - Use the Controls panel to customize and experiment with chart properties

1. List of chart types -https://gist.githubusercontent.com/venkateshwarans/f7458e5716a7876987f01c6303771c4e/raw/7b634b092eb69ef9870c326fd21adfb038f41c94/Looker%2520Studio%2520Visualizations%2520-%2520Google

Recharts documentation - https://recharts.org/en-US/api

2. I have this list of different types of charts. I already have a few chart types in @js/packages/react-ui/src/components/Charts   folder like, Bar, Area etc. 

3. I want to build the ones from the gist that are not already there in the /Charts folder. 

4. I want to follow the same code patterns and libraries, themese, colors, code structure that is used in the existing chart types /Charts folder

5. If there is a room for betterment or improvement or better libraries can be used to acheive, you are allowed to that. without breaking the existing components or logics. 

6. don't miss to create storybook

7. create a documentation for the components and its usage that you are building. 

8. Make sure the components are time and memory efficient and no memory leaks and follows all React concepts efficiently. https://react.dev/reference/react

8. Build the chart type that I ask. Once we are done with it, then we will move to next chart type.

9. For GeoCharts, refer these docs
    1. https://cloud.google.com/looker/docs/studio/geo-chart-reference?visit_id=638832396995607373-2438106158&rd=1
    2. https://developers.google.com/chart/interactive/docs/gallery/geochart
    3. https://www.react-simple-maps.io/docs/getting-started/
    4. https://developers.google.com/chart/interactive/docs/gallery/geochart#data-format
    5. https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options
    6. It should have zoom controls
    7. It should mobile and tablet responsive. 
10. Project folder is in /Users/venkat/Work/thesys/crayon/js/packages/react-ui
11. Node modules folder is in /Users/venkat/Work/thesys/crayon/js/packages/react-ui/node_modules
12. Relevant package.json is in /Users/venkat/Work/thesys/crayon/js/packages/react-ui/package.json