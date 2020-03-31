## 实现promise
``` js
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise(excutor) {
    let that = this
    that.status = PENDING
    that.value = undefined
    that.reason = undefined
    that.resolvedCallbacks = []
    that.onRejectedCallbacks = []
    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        setTimeout(()=>{
            if (that.status === PENDING) {
                that.status = RESOLVED
                that.value = value
                that.resolvedCallbacks.map(cb=>cb(that.value))
            }
        }, 0) 
    }
    function reject(reason) {
        setTimeout(()=>{
            if (that.status === PENDING) {
                that.status = REJECTED
                that.reson = reason
                that.onRejectedCallbacks.map(cb => cb(that.reason))
            }
        }, 0)
    }
    try {
        excutor(resonn, reject)
    } catch (e) {
        reject(e)
    }
}
```
``` js
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this
    onFulfilled = onFulfilled instanceof Function ? onnFulfilled : v => v
    onRejected = onRejected instanceof Function ? onRejected : r => {throw r}
    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if (that.state === RESOLVED) {
        onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}
```