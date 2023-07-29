Section 6

applied getStaticPaths & getStaticProps for data fetching in the needed files

1. getStaticPaths runs if it is dynamic like [eventId] else it doesn't run

2. getStaticProps is looped through the eventId got from getStaticPaths or just runs if static

3. the props should not be passed as undefined (I think!. it showed error for me) in getStaticProps

In fallback,

1. when "false" , it thinks thinks that thats the total ids for that dynamic path , so it doesn't calculate getStaticProps for anyother id not mentioned in getStaticPaths and thus props will be undefined.

2. when "true" , it thinks there are still other ids available , so it runs getStaticProps if a new id is given as path and gets the props and passes to component

3. when "'blocking'" , it thinks the same as "true", but this time it will wait till it gets props and then it switch to the new id's path, so no loading (I think!)
