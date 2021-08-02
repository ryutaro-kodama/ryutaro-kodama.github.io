def func(i):
    if i == 0:
        x = 10
        y = 0
    else:
        x = "OK"
        y = 1

    if y == 0:
        return x

    return i

a = func(0)
b = func(1)

assert isinstance(a, int)
assert isinstance(b, int)