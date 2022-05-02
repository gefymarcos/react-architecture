export class Queue<T> {
  _store: T[] = [];

  push(val: T) {
    this._store.push(val);
  }

  shift(): T | undefined {
    return this._store.shift();
  }

  pop(): T | undefined {
    return this._store.pop();
  }

  clean() {
    this._store = [];
  }

  isEmpty() {
    return this._store.length === 0;
  }
}
