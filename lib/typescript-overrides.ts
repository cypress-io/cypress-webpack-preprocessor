let sourceMapOverride: null | boolean = null

export const tryRequireTypescript = () => {
  try {
    // reset each time this is called
    sourceMapOverride = null

    const typescript = require('typescript')

    const { createProgram } = typescript

    typescript.createProgram = (...args: [any]) => {
      const [programOptions] = args
      const { options } = programOptions

      // if sourceMap has been set then apply
      // these overrides to force typescript
      // to generate the right sourcemaps
      if (sourceMapOverride !== null) {
        options.sourceMap = sourceMapOverride

        delete options.inlineSources
        delete options.inlineSourceMap
      }

      return createProgram.apply(typescript, args)
    }

    return typescript
  } catch (err) {
    // for testing
    return err
  }
}

export const overrideSourceMaps = (val: boolean) => {
  sourceMapOverride = val
}

export const getSourceMapOverride = () => {
  return sourceMapOverride
}

tryRequireTypescript()
