export default {
  redirect(route, id) {
    console.log("redirect")
    this.$router.push("/" + route + "/" + id)
  }
}

