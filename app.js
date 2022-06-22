
let generareDomain = () => {

   let pronouns = ["the", "our", "a"];
   let adjs = ["great", "big", "small", "tiny"];
   let nouns = ["jogger", "racoon", "cyclist", "cat", "surfer"];
   let doms = [".com", ".net", ".us", ".io"];

pronouns.forEach((pronoun) => {
  adjs.forEach((adj) => {
    nouns.forEach((noun) => {
    doms.forEach((dom)=>{
    console.log(pronoun + adj + noun + dom)
     })
    })
})
})
}

generareDomain()


