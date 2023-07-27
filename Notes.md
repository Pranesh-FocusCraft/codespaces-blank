added server site fetch code

1. added static props return properties
2. added static props function params

getting props as undefifed bug fix

1. getStaticPaths func is needed for
   specifying the wanted preloading dynamic pages
2. also fixed the error that shows for dynamic file and not shiws for static file

fallback

1. fallback as true allows to specify the optional pages
2. in tutorial it is said that since page is optional , the prop (loadedProduct) might be undefined when given page path in address bar directly, so have given 'Loading state'

if fallback = 'blocking', then page waits till the data is got and renders the content , so no undefined check needed

since the data used in getStaticProps and getStaticPaths are same usually it has common function

getServerSideProps render when the link is visited , so it doesnt need getStaticProps or getStaticPaths, as it render the page in server and sends to client

useSWR has built in feature for caching, and so on , it is an alternate for fetch
