using System;
using System.Collections;
using System.Collections.Generic;

public class Vector : IEnumerable<int> {
    private List<int> _elements;

    public Vector(int size) {
        _elements = new List<int>(size);
        var rand = new Random();
        for (int i = 0; i < size; i++) {
            _elements.Add(rand.Next(0, 101));
        }
    }

    public Vector(IEnumerable<int> elements) {
        _elements = new List<int>(elements);
    }

    public int this[int index] {
        get => _elements[index];
        set => _elements[index] = value;
    }

    public IEnumerator<int> GetEnumerator() {
        return _elements.GetEnumerator();
    }

    IEnumerator IEnumerable.GetEnumerator() {
        return GetEnumerator();
    }

    public int Length => _elements.Count;

    public int[] ToArray() {
        return _elements.ToArray();
    }
}
