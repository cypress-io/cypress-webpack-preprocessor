export default {
  resolve (dependency: string) {
    return require.resolve(dependency)
  },
}
