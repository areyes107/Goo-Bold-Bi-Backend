
async function rootResolver(request, response){
  try {
    response.send({ message:"200" });
  } catch(error){
    console.error(error);
  }
}

module.exports  = {
  rootResolver,
}