// module.exports = {
//   "lintOnSave": false,
//   "transpileDependencies": [
//     "vuetify"
//   ]
// }
// test
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
