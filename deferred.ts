import * as Promise from 'bluebird'

const createDeferred = () => {
  const deferred = {}

  // @ts-ignore
  deferred.promise = new Promise((resolve, reject) => {
    // @ts-ignore
    deferred.resolve = resolve
    // @ts-ignore
    deferred.reject = reject
  })

  return deferred
}

export = createDeferred
