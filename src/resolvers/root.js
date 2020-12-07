
async function rootResolver(request, response){
  try {
    response.send({ message:"200" });
  } catch(Error){}
}

module.exports  = {
  rootResolver,
}