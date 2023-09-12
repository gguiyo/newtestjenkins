// module.exports = {
//   "lintOnSave": false,
//   "transpileDependencies": [
//     "vuetify"
//   ]
// }
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}