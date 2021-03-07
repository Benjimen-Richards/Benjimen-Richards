const cacheName = "React App"

const cacheFile=[
    '/','/index.html'
]

self.addEventListener('install',async(e)=>{
    const Reactappcache = await caches.open(cacheName)
    await Reactappcache.addAll(cacheFile)
    console.log("serive worker successfully installed")
})
self.addEventListener('activate',(e)=>{
    console.log("serive worker successfully activated")
})
self.addEventListener('fetch',(e)=>{
    console.log("serive worker successfully fetched")
})
