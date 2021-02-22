---
id: python-style-guide
title: Python Style Guide
---

## 1. Background

Python is the main dynamic language used at Google. This style guide is a list of dos and don’ts for Python programs.

To help you format code correctly, we’ve created a [settings file for Vim](#). For Emacs, the default settings should be fine.

Many teams use the [yapf](#) auto-formatter to avoid arguing over formatting.

## 2. Python Language Rules

### 2.1 Lint

Run `pylint` over your code using this [pylintrc](#).

#### 2.2.1 Definition

`pylint` is a tool for finding bugs and style problem in Python source code. It finds problems that are typically caught by a compiler for less dynamic languages like C and C++. Because of the dynamic nature of Python, some warnings may be incorrect; however, spurious warnings sould be fairly infrequent. 

#### 2.2.2 Pros

Catches easy-to-miss errors like typos, using-var-before-assignment, etc. 

#### 2.2.3 Cons

`pylint` isn't perfect. To take advantage of it, sometime we'll need to write around it, suppress it's warnings or fix it. 

#### 2.2.4 Decision

Make sure that you run `pylint` on your code. Suppress warnings if they are inappropriate so that other issues are not hidden. To suppress warnings, you can set a line-level comment: 

````python
dict = 'something awful'  # Bad Idea... pylint: disable=redefined-builtin
````

`pylint` warnings are each identified by symbolic name (`empty-docstring`) Oleic-specific warnings start with `g-`. If the reason for the suppression is not clear from the symbolic name, add an explanation. 

Suppressing in this way has the advantage that we can easily search for suppressions and revisit them.

You can get a list of pylint warnings by doing:

```
pylint --list-msgs
```

To get more information on a particular message, use:

```
pylint --help-msg=C6409
```
Prefer `pylint: disable` to the deprecated older form `pylint: disable-msg`.

Unused argument warnings can be suppressed by deleting the variables at the beginning of the function. Always include a comment explaining why you are deleting it. “Unused.” is sufficient. For example:

```py
def viking_cafe_order(spam, beans, eggs=None):
    del beans, eggs  # Unused by vikings.
    return spam + spam + spam
```
Other common forms of suppressing this warning include using ‘`_`’ as the identifier for the unused argument or prefixing the argument name with ‘`unused_`’, or assigning them to ‘`_`’. These forms are allowed but no longer encouraged. These break callers that pass arguments by name and do not enforce that the arguments are actually unused.

### 2.2 Imports

Use `import` statements for packages and modules only, not for individual classes or functions. Note that there is an explicit exemption for imports from the [typing module](#).

#### 2.2.1 Definition
Reusability mechanism for sharing code from one module to another.

#### 2.2.2 Pros
The namespace management convention is simple. The source of each identifier is indicated in a consistent way; x.Obj says that object Obj is defined in module x.

#### 2.2.3 Cons
Module names can still collide. Some module names are inconveniently long.

#### 2.2.4 Decision
- Use `import x` for importing packages and modules.
- Use `from x import y` where `x` is the package prefix and `y` is the module name with no prefix.
- Use `from x import y as z` if two modules named `y` are to be imported or if `y` is an inconveniently long name.
- Use `import y as z` only when `z` is a standard abbreviation (e.g., `np` for `numpy`).

For example the module `sound.effects.echo` may be imported as follows:

````py
from sound.effects import echo
...
echo.EchoFilter(input, output, delay=0.7, atten=4)
````

Do not use relative names in imports. Even if the module is in the same package, use the full package name. This helps prevent unintentionally importing a package twice.

Imports from the [typing module](#) and the [six.moves module](#) are exempt from this rule.


### 2.3 Packages
Import each module using the full pathname location of the module.



#### 2.3.1 Pros
Avoids conflicts in module names or incorrect imports due to the module search path not being what the author expected. Makes it easier to find modules.



#### 2.3.2 Cons
Makes it harder to deploy code because you have to replicate the package hierarchy. Not really a problem with modern deployment mechanisms.



#### 2.3.3 Decision
All new code should import each module by its full package name.

Imports should be as follows:

**Yes:**

````python
# Reference absl.flags in code with the complete name (verbose).
import absl.flags
from doctor.who import jodie

FLAGS = absl.flags.FLAGS
````
````py
# Reference flags in code with just the module name (common).
from absl import flags
from doctor.who import jodie

FLAGS = flags.FLAGS
````

**No:** (assume this file lives in `doctor/who/` where `jodie.py` also exists)

````py
# Unclear what module the author wanted and what will be imported.  The actual
# import behavior depends on external factors controlling sys.path.
# Which possible jodie module did the author intend to import?
import jodie
````

The directory the main binary is located in should not be assumed to be in `sys.path` despite that happening in some environments. This being the case, code should assume that `import jodie` refers to a third party or top level package named `jodie`, not a local `jodie.py`.

### 2.4 Exceptions
Exceptions are allowed but must be used carefully.



#### 2.4.1 Definition
Exceptions are a means of breaking out of normal control flow to handle errors or other exceptional conditions.



#### 2.4.2 Pros
The control flow of normal operation code is not cluttered by error-handling code. It also allows the control flow to skip multiple frames when a certain condition occurs, e.g., returning from N nested functions in one step instead of having to plumb error codes through.



#### 2.4.3 Cons
May cause the control flow to be confusing. Easy to miss error cases when making library calls.



#### 2.4.4 Decision
Exceptions must follow certain conditions:
- Make use of built-in exception classes when it makes sense. For example, raise a `ValueError` to indicate a programming mistake like a violated precondition (such as if you were passed a negative number but required a positive one). Do not use `assert` statements for validating argument values of a public API. `assert` is used to ensure internal correctness, not to enforce correct usage nor to indicate that some unexpected event occurred. If an exception is desired in the latter cases, use a raise statement. For example:

**Yes:**

```py
def connect_to_next_port(self, minimum):
    """Connects to the next available port.

    Args:
      minimum: A port value greater or equal to 1024.

    Returns:
      The new minimum port.

    Raises:
      ConnectionError: If no available port is found.
    """
    if minimum < 1024:
      # Note that this raising of ValueError is not mentioned in the doc
      # string's "Raises:" section because it is not appropriate to
      # guarantee this specific behavioral reaction to API misuse.
      raise ValueError(f'Min. port must be at least 1024, not {minimum}.')
    port = self._find_next_open_port(minimum)
    if not port:
      raise ConnectionError(
          f'Could not connect to service on port {minimum} or higher.')
    assert port >= minimum, (
        f'Unexpected port {port} when minimum was {minimum}.')
    return port
```

**No:**

```py
def connect_to_next_port(self, minimum):
    """Connects to the next available port.

    Args:
      minimum: A port value greater or equal to 1024.

    Returns:
      The new minimum port.
    """
    assert minimum >= 1024, 'Minimum port must be at least 1024.'
    port = self._find_next_open_port(minimum)
    assert port is not None
    return port
```
- Libraries or packages may define their own exceptions. When doing so they must inherit from an existing exception class. Exception names should end in `Error` and should not introduce stutter (`foo.FooError`).

- Never use catch-all except: statements, or catch Exception or StandardError, unless you are:
    - re-raising the exception, or
    - creating an isolation point in the program where exceptions are not propagated but are recorded and suppressed instead, such as protecting a thread from crashing by guarding its outermost block.

 Python is very tolerant in this regard and `except:` will really catch everything including misspelled names, `sys.exit()` calls, `Ctrl+C` interrupts, unittest failures and all kinds of other exceptions that you simply don’t want to catch.

- Minimize the amount of code in a `try/except` block. The larger the body of the `try`, the more likely that an exception will be raised by a line of code that you didn’t expect to raise an exception. In those cases, the `try/except` block hides a real error. 

- Use the `finally` clause to execute code whether or not an exception is raised in the `try` block. This is often useful for cleanup, i.e., closing a file.

### 2.5 Global variables
Avoid global variables.



#### 2.5.1 Definition
Variables that are declared at the module level or as class attributes.



#### 2.5.2 Pros
Occasionally useful.



#### 2.5.3 Cons
Has the potential to change module behavior during the import, because assignments to global variables are done when the module is first imported.

#### 2.5.4 Decision
Avoid global variables. While they are technically variables, module-level constants are permitted and encouraged. For example: `MAX_HOLY_HANDGRENADE_COUNT = 3`. Constants must be named using all caps with underscores. See [Naming]('#') below.

If needed, globals should be declared at the module level and made internal to the module by prepending an _ to the name. External access must be done through public module-level functions. See [Naming](#) below.

### 2.6 Nested/Local/Inner Classes and Functions
Nested local functions or classes are fine when used to close over a local variable. Inner classes are fine.

#### 2.6.1 Definition
A class can be defined inside of a method, function, or class. A function can be defined inside a method or function. Nested functions have read-only access to variables defined in enclosing scopes.

#### 2.6.2 Pros
Allows definition of utility classes and functions that are only used inside of a very limited scope. Very [ADT](http://www.google.com/url?sa=D&q=http://en.wikipedia.org/wiki/Abstract_data_type)-y. Commonly used for implementing decorators.



#### 2.6.3 Cons
Nested functions and classes cannot be directly tested. Nesting can make the outer function longer and less readable.



#### 2.6.4 Decision
They are fine with some caveats. Avoid nested functions or classes except when closing over a local value. Do not nest a function just to hide it from users of a module. Instead, prefix its name with an `_` at the module level so that it can still be accessed by tests.

### 2.7 Comprehensions & Generator Expressions
Okay to use for simple cases.



#### 2.7.1 Definition
List, Dict, and Set comprehensions as well as generator expressions provide a concise and efficient way to create container types and iterators without resorting to the use of traditional loops, `map()`, `filter()`, or `lambda`.



#### 2.7.2 Pros
Simple comprehensions can be clearer and simpler than other dict, list, or set creation techniques. Generator expressions can be very efficient, since they avoid the creation of a list entirely.



#### 2.7.3 Cons
Complicated comprehensions or generator expressions can be hard to read.



#### 2.7.4 Decision
Okay to use for simple cases. Each portion must fit on one line: mapping expression, `for` clause, filter expression. Multiple `for` clauses or filter expressions are not permitted. Use loops instead when things get more complicated.

**Yes:**
```py
result = [mapping_expr for value in iterable if filter_expr]

  result = [{'key': value} for value in iterable
            if a_long_filter_expression(value)]

  result = [complicated_transform(x)
            for x in iterable if predicate(x)]

  descriptive_name = [
      transform({'key': key, 'value': value}, color='black')
      for key, value in generate_iterable(some_input)
      if complicated_condition_is_met(key, value)
  ]

  result = []
  for x in range(10):
      for y in range(5):
          if x * y > 10:
              result.append((x, y))

  return {x: complicated_transform(x)
          for x in long_generator_function(parameter)
          if x is not None}

  squares_generator = (x**2 for x in range(10))

  unique_names = {user.name for user in users if user is not None}

  eat(jelly_bean for jelly_bean in jelly_beans
      if jelly_bean.color == 'black')
```

**No**
```py
result = [complicated_transform(
                x, some_argument=x+1)
            for x in iterable if predicate(x)]

  result = [(x, y) for x in range(10) for y in range(5) if x * y > 10]

  return ((x, y, z)
          for x in range(5)
          for y in range(5)
          if x != y
          for z in range(5)
          if y != z)
```

### 2.8 Default Iterators and Operators
Use default iterators and operators for types that support them, like lists, dictionaries, and files.



#### 2.8.1 Definition
Container types, like dictionaries and lists, define default iterators and membership test operators (“in” and “not in”).



#### 2.8.2 Pros
The default iterators and operators are simple and efficient. They express the operation directly, without extra method calls. A function that uses default operators is generic. It can be used with any type that supports the operation.



#### 2.8.3 Cons
You can’t tell the type of objects by reading the method names (e.g. `has_key()` means a dictionary). This is also an advantage.

#### 2.8.4 Decision
Use default iterators and operators for types that support them, like lists, dictionaries, and files. The built-in types define iterator methods, too. Prefer these methods to methods that return lists, except that you should not mutate a container while iterating over it.

**Yes**
````py
for key in adict: ...
if key not in adict: ...
if obj in alist: ...
for line in afile: ...
for k, v in adict.items(): ...
for k, v in six.iteritems(adict): ...
````

**No**
```py
for key in adict.keys(): ...
if not adict.has_key(key): ...
for line in afile.readlines(): ...
for k, v in dict.iteritems(): ...
```

### 2.9 Generators
Use generators as needed.



#### 2.9 Definition
A generator function returns an iterator that yields a value each time it executes a yield statement. After it yields a value, the runtime state of the generator function is suspended until the next value is needed.



#### 2.9.2 Pros
Simpler code, because the state of local variables and control flow are preserved for each call. A generator uses less memory than a function that creates an entire list of values at once.



#### 2.9.3 Cons
None.



#### 2.9.4 Decision
Fine. Use “Yields:” rather than “Returns:” in the docstring for generator functions.

### 2.10 Lambda Functions
Okay for one-liners. Prefer generator expressions over `map()` or `filter()` with a lambda.



#### 2.10.1 Definition
Lambdas define anonymous functions in an expression, as opposed to a statement.



#### 2.10.2 Pros
Convenient.



#### 2.10.3 Cons
Harder to read and debug than local functions. The lack of names means stack traces are more difficult to understand. Expressiveness is limited because the function may only contain an expression.



#### 2.10.4 Decision
Okay to use them for one-liners. If the code inside the lambda function is longer than 60-80 chars, it’s probably better to define it as a regular nested function.

For common operations like multiplication, use the functions from the `operator` module instead of lambda functions. For example, prefer `operator.mul` to `lambda x, y: x * y`.

### 2.11 Conditional Expressions
Okay for simple cases.



#### 2.11.1 Definition
Conditional expressions (sometimes called a “ternary operator”) are mechanisms that provide a shorter syntax for if statements. For example: `x = 1 if cond else 2`.



#### 2.11.2 Pros
Shorter and more convenient than an if statement.



#### 2.11.3 Cons
May be harder to read than an if statement. The condition may be difficult to locate if the expression is long.



#### 2.11.4 Decision
Okay to use for simple cases. Each portion must fit on one line: true-expression, if-expression, else-expression. Use a complete if statement when things get more complicated.

**Yes**

```py
one_line = 'yes' if predicate(value) else 'no'
slightly_split = ('yes' if predicate(value) else 'no, nein, nyet')
the_longest_ternary_style_that_can_be_done = (
    'yes, true, affirmative, confirmed, correct'
    if predicate(value)
    else 'no, false, negative, nay')
```

**No**

```py

bad_line_breaking = ('yes' if predicate(value) else
                         'no')
portion_too_long = ('yes'
                    if some_long_module.some_long_predicate_function(
                        really_long_variable_name)
                    else 'no, false, negative, nay')
```

### 2.12 Default Argument Values
Okay in most cases.



#### 2.12.1 Definition
You can specify values for variables at the end of a function’s parameter list, e.g., `def foo(a, b=0):`. If `foo` is called with only one argument, `b` is set to `0`. If it is called with two arguments, `b` has the value of the second argument.



#### 2.12.2 Pros
Often you have a function that uses lots of default values, but on rare occasions you want to override the defaults. Default argument values provide an easy way to do this, without having to define lots of functions for the rare exceptions. As Python does not support overloaded methods/functions, default arguments are an easy way of “faking” the overloading behavior.



#### 2.12.3 Cons
Default arguments are evaluated once at module load time. This may cause problems if the argument is a mutable object such as a list or a dictionary. If the function modifies the object (e.g., by appending an item to a list), the default value is modified.



#### 2.12.4 Decision
Okay to use with the following caveat:

Do not use mutable objects as default values in the function or method definition.

**Yes**
```py
def foo(a, b = None):
    if b is None:
        b = []

```

```py
def foo(a, b: Optional[Sequence] = None):
    if b is None:
        b = []

```
```py
def foo(a, b: Sequence = ()):  # Empty tuple Ok since tuples are immutable
    ...
```

**No**

```py
def foo(a, b=[]):
    ...
```

```py
def foo(a, b=time.time()):
    ...
```

```py
def foo(a, b=FLAGS.my_thing):
    ...
```

```py
def foo(a, b: Mapping ={}):
    ...
```

### 2.13 Properties
Use properties for accessing or setting data where you would normally have used simple, lightweight accessor or setter methods.



#### 2.13.1 Definition
A way to wrap method calls for getting and setting an attribute as a standard attribute access when the computation is lightweight.



#### 2.13.2 Pros
Readability is increased by eliminating explicit get and set method calls for simple attribute access. Allows calculations to be lazy. Considered the Pythonic way to maintain the interface of a class. In terms of performance, allowing properties bypasses needing trivial accessor methods when a direct variable access is reasonable. This also allows accessor methods to be added in the future without breaking the interface.



#### 2.13.3 Cons
Can hide side-effects much like operator overloading. Can be confusing for subclasses.

#### 2.13.4 Decision
Use properties in new code to access or set data where you would normally have used lightweight accessor or setter methods. Properties should be created with the `@property` [decorator](#).

Inheritance with properties can be non-obvious if the property itself is not overridden. Thus one must make sure that accessor methods are called indirectly to ensure methods overridden in subclasses are called by the property (using the [template method design pattern](https://en.wikipedia.org/wiki/Template_method_pattern)).

**Yes** 
```py
import math
class Square:
    """A square with two properties: a writable area and a read-only perimeter.

     To use:
     >>> sq = Square(3)
     >>> sq.area
     9
     >>> sq.perimeter
     12
     >>> sq.area = 16
     >>> sq.side
     4
     >>> sq.perimeter
     16
     """


         

     def __init__(self, side):
         self.side = side

     @property
     def area(self):
         """Area of the square."""
         return self._get_area()

     @area.setter
     def area(self, area):
         return self._set_area(area)

     def _get_area(self):
         """Indirect accessor to calculate the 'area' property."""
         return self.side ** 2

     def _set_area(self, area):
         """Indirect setter to set the 'area' property."""
         self.side = math.sqrt(area)

     @property
     def perimeter(self):
         return self.side * 4
```

### 2.14 True/False Evaluations
Use the “implicit” false if at all possible.



#### 2.14.1 Definition
Python evaluates certain values as `False` when in a boolean context. A quick “rule of thumb” is that all “empty” values are considered false, so `0`, `None`, `[]`, `{}`, `''` all evaluate as false in a boolean context.



#### 2.14.2 Pros
Conditions using Python booleans are easier to read and less error-prone. In most cases, they’re also faster.



#### 2.14.3 Cons
May look strange to C/C++ developers.

#### 2.14.4 Decision
- Use the “implicit” false if possible, e.g., `if foo:` rather than `if foo != []:`. There are a few caveats that you should keep in mind though:

- Always use `if foo is None:` (or `is not None`) to check for a None value. E.g., when testing whether a variable or argument that defaults to `None` was set to some other value. The other value might be a value that’s false in a boolean context!

- Never compare a boolean variable to `False` using `==`. Use `if not x:` instead. If you need to distinguish False from None then chain the expressions, such as `if not x and x is not None:`.

- For sequences (strings, lists, tuples), use the fact that empty sequences are false, so `if seq:` and `if not seq:` are preferable to `if len(seq):` and `if not len(seq):` respectively.

- When handling integers, implicit false may involve more risk than benefit (i.e., accidentally handling `None` as `0`). You may compare a value which is known to be an integer (and is not the result of `len()`) against the integer `0`.

**Yes**
```py
if not users:
    print('no users')
```
```py
if foo == 0:
    self.handle_zero()
```
```py
if i % 10 == 0:
    self.handle_multiple_of_ten()
```
```py
def f(x=None):
    if x is None:
        x = []
```

**No**
```py
if len(users) == 0:
    print('no users')
```
```py
if foo is not None and not foo:
    self.handle_zero()
```
```py
if not i % 10:
    self.handle_multiple_of_ten()
```
```py
def f(x=None):
    x = x or []
```

- Note that `0` (i.e., `0` as string) evaluates to true.

### 2.15 Lexical Scoping

Okay to use.


#### 2.15.1 Definition
A nested Python function can refer to variables defined in enclosing functions, but cannot assign to them. Variable bindings are resolved using lexical scoping, that is, based on the static program text. Any assignment to a name in a block will cause Python to treat all references to that name as a local variable, even if the use precedes the assignment. If a global declaration occurs, the name is treated as a global variable.

An example of the use of this feature is:

```py
def get_adder(sumand1):
    """Returns a function that adds numbers to a given number."""
    def adder(sumand2):
        return sumand1 + sumand2
    return adder
```

#### 2.15.2 Pros
Often results in clearer, more elegant code. Especially comforting to experienced Lisp and Scheme (and Haskell and ML and …) programmers.



#### 2.15.3 Cons
Can lead to confusing bugs. Such as this example based on [PEP-0227](http://www.google.com/url?sa=D&q=http://www.python.org/dev/peps/pep-0227/):

```py
i = 4
def foo(x):
    def bar():
        print(i, end='')
    # ...
    # A bunch of code here
    # ...
    for i in x:  # Ah, i *is* local to foo, so this is what bar sees
        print(i, end='')
    bar()
```

So `foo([1, 2, 3])` will print `1 2 3 3`, not `1 2 3 4`.

#### 2.15.4 Decision
Okay to use.

### 2.16 Function and Method Decorators
Use decorators judiciously when there is a clear advantage. Avoid `staticmethod` and limit use of `classmethod`.



#### 2.16.1 Definition
[Decorators for Functions and Methods](https://docs.python.org/3/glossary.html#term-decorator) (a.k.a “the `@`notation”). One common decorator is `@property`, used for converting ordinary methods into dynamically computed attributes. However, the decorator syntax allows for user-defined decorators as well. Specifically, for some function `my_decorator`, this:

```py
class C:
    @my_decorator
    def method(self):
        # method body ...
```

is equivalent to:

```py
class C:
    def method(self):
        # method body ...
    method = my_decorator(method)
```

#### 2.16.2 Pros
Elegantly specifies some transformation on a method; the transformation might eliminate some repetitive code, enforce invariants, etc.



#### 2.16.3 Cons
Decorators can perform arbitrary operations on a function’s arguments or return values, resulting in surprising implicit behavior. Additionally, decorators execute at import time. Failures in decorator code are pretty much impossible to recover from.



#### 2.16.4 Decision
Use decorators judiciously when there is a clear advantage. Decorators should follow the same import and naming guidelines as functions. Decorator pydoc should clearly state that the function is a decorator. Write unit tests for decorators.

Avoid external dependencies in the decorator itself (e.g. don’t rely on files, sockets, database connections, etc.), since they might not be available when the decorator runs (at import time, perhaps from `pydoc` or other tools). A decorator that is called with valid parameters should (as much as possible) be guaranteed to succeed in all cases.

Decorators are a special case of “top level code” - see [main](#) for more discussion.

Never use `staticmethod` unless forced to in order to integrate with an API defined in an existing library. Write a module level function instead.

Use `classmethod` only when writing a named constructor or a class-specific routine that modifies necessary global state such as a process-wide cache.

### 2.17 Threading
Do not rely on the atomicity of built-in types.

While Python’s built-in data types such as dictionaries appear to have atomic operations, there are corner cases where they aren’t atomic (e.g. if `__hash__` or `__eq__` are implemented as Python methods) and their atomicity should not be relied upon. Neither should you rely on atomic variable assignment (since this in turn depends on dictionaries).

Use the Queue module’s `Queue` data type as the preferred way to communicate data between threads. Otherwise, use the threading module and its locking primitives. Prefer condition variables and `threading.Condition` instead of using lower-level locks.

### 2.18 Power Features
Avoid these features.



#### 2.18.1 Definition
Python is an extremely flexible language and gives you many fancy features such as custom metaclasses, access to bytecode, on-the-fly compilation, dynamic inheritance, object reparenting, import hacks, reflection (e.g. some uses of `getattr()`), modification of system internals, etc.



#### 2.18.2 Pros
These are powerful language features. They can make your code more compact.



#### 2.18.3 Cons
It’s very tempting to use these “cool” features when they’re not absolutely necessary. It’s harder to read, understand, and debug code that’s using unusual features underneath. It doesn’t seem that way at first (to the original author), but when revisiting the code, it tends to be more difficult than code that is longer but is straightforward.



#### 2.18.4 Decision
Avoid these features in your code.

Standard library modules and classes that internally use these features are okay to use (for example, `abc.ABCMeta`, `dataclasses`, and `enum`).

### 2.19 Modern Python: Python 3 and from __future__ imports
Python 3 is here! While not every project is ready to use it yet, all code should be written to be 3 compatible (and tested under 3 when possible).



#### 2.19.1 Definition
Python 3 is a significant change in the Python language. While existing code is often written with 2.7 in mind, there are some simple things to do to make code more explicit about its intentions and thus better prepared for use under Python 3 without modification.



#### 2.19.2 Pros
Code written with Python 3 in mind is more explicit and easier to get running under Python 3 once all of the dependencies of your project are ready.



#### 2.19.3 Cons
Some people find the additional boilerplate to be ugly. It’s unusual to add imports to a module that doesn’t actually require the features added by the import.



#### 2.19.4 Decision
**`from __future__ imports`**

Use of `from __future__ import` statements is encouraged. All new code should contain the following and existing code should be updated to be compatible when possible:

```py
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
```

For more information on these imports, see [absolute imports](https://www.python.org/dev/peps/pep-0328/), [division behavior](https://www.python.org/dev/peps/pep-0238/), and [the print function](https://www.python.org/dev/peps/pep-3105/).

Please don’t omit or remove these imports, even if they’re not currently used in the module, unless the code is Python 3 only. It is better to always have the future imports in all files so that they are not forgotten during later edits when someone starts using such a feature.

There are other `from __future__ import` statements. Use them as you see fit. We do not include `unicode_literals` in our recommendations as it is not a clear win due to implicit default codec conversion consequences it introduces in many places within Python 2.7. Most code is better off with explicit use of `b''` and `u''` bytes and unicode string literals as necessary.

**The six, future, and past libraries**

When your project needs to actively support use under both Python 2 and 3, use the [six](https://pypi.org/project/six/), [future](https://pypi.org/project/future/), and [past](https://pypi.org/project/past/) libraries as you see fit. They exist to make your code cleaner and life easier.

### 2.20 Type Annotated Code
You can annotate Python 3 code with type hints according to [PEP-484](https://www.python.org/dev/peps/pep-0484/), and type-check the code at build time with a type checking tool like [pytype](https://github.com/google/pytype).

Type annotations can be in the source or in a [stub pyi file](https://www.python.org/dev/peps/pep-0484/#stub-files). Whenever possible, annotations should be in the source. Use pyi files for third-party or extension modules.

#### 2.20.1 Definition
Type annotations (or “type hints”) are for function or method arguments and return values:

```py
def func(a: init) -> List[int]:
```

You can also declare the type of a variable using similar [PEP-526](https://www.python.org/dev/peps/pep-0526/) syntax:

```py
a: SomeType = some_func()
```

Or by using a type comment in code that must support legacy Python versions.

```py
a = some_func() # type: SomeType
```

#### 2.20.2 Pros
Type annotations improve the readability and maintainability of your code. The type checker will convert many runtime errors to build-time errors, and reduce your ability to use [Power Features](#).



#### 2.20.3 Cons
You will have to keep the type declarations up to date. You might see type errors that you think are valid code. Use of a type checker may reduce your ability to use [Power Features](#).



#### 2.20.4 Decision
You are strongly encouraged to enable Python type analysis when updating code. When adding or modifying public APIs, include type annotations and enable checking via pytype in the build system. As static analysis is relatively new to Python, we acknowledge that undesired side-effects (such as wrongly inferred types) may prevent adoption by some projects. In those situations, authors are encouraged to add a comment with a TODO or link to a bug describing the issue(s) currently preventing type annotation adoption in the BUILD file or in the code itself as appropriate.


## 3 Python Style Rules


### 3.1 Semicolons
Do not terminate your lines with semicolons, and do not use semicolons to put two statements on the same line.



### 3.2 Line length
Maximum line length is 80 characters.

Explicit exceptions to the 80 character limit:

Long import statements.
URLs, pathnames, or long flags in comments.
Long string module level constants not containing whitespace that would be inconvenient to split across lines such as URLs or pathnames.
Pylint disable comments. (e.g.: `# pylint: disable=invalid-name`)

Do not use backslash line continuation except for `with` statements requiring three or more context managers.

Make use of Python’s [implicit line joining inside parentheses, brackets and braces](http://docs.python.org/reference/lexical_analysis.html#implicit-line-joining). If necessary, you can add an extra pair of parentheses around an expression.

**Yes**

```py
foo_bar(self, width, height, color='black', design=None, x='foo', emphasis=None, highlight=None)
if(width == 0 and height == 0 and color == 'red' and emphasis == 'strong')
```

When a literal string won’t fit on a single line, use parentheses for implicit line joining.

```py
x = ('This will build a very long long ' 'long long long long long long string')
```

Within comments, put long URLs on their own line if necessary.

**Yes**
```py
# See details at
# http://www.example.com/us/developer/documentation/api/content/v2.0/csv_file_name_extension_full_specification.html
```

**No**
```py
# See details at
# http://www.example.com/us/developer/documentation/api/content/
# v2.0/csv_file_name_extension_full_specification.html
```

It is permissible to use backslash continuation when defining a `with` statement whose expressions span three or more lines. For two lines of expressions, use a nested `with` statement:

**Yes**
```py
with very_long_first_expression_function() as spam, \
     very_long_second_expression_function() as beans, \
     third_thing() as eggs:
     place_order(eggs, beans, spam, beans)
```
**Yes**
```py
with very_long_first_expression_function() as spam:
     with very_long_second_expression_function() as beans:
         place_order(beans, spam)
```
**No**
```py
with very_long_first_expression_function() as spam, \
     very_long_second_expression_function() as beans:
         PlaceOrder(eggs, beans, spam, beans)
```
Make note of the [indentation](#) of the elements in the line continuation examples above; see the indentation section for explanation.

In all other cases where a line exceeds 80 characters, and the [yapf](#) auto-formatter does not help bring the line below the limit, the line is allowed to exceed this maximum.

### 3.3 Parentheses

Use parentheses sparingly.

It is fine, though not required, to use parentheses around tuples. Do not use them in return statements or conditional statements unless using parentheses for implied line continuation or to indicate a tuple.

**Yes**
```py
if foo:
    bar()
while x:
    x = bar()
if x and y:
    bar()
if not x:
    bar()
# For a 1 item tuple the ()s are more visually obvious than the comma.
onesie = (foo,)
return foo
return spam, beans
return (spam, beans)
for (x, y) in dict.items(): ...
```

**No**
```py
if (x):
    bar()
if not(x):
    bar()
return(foo)

```

### 3.4 Indentation

Indent your code blocks with 4 spaces.

Never use tabs or mix tabs and spaces. In case of implied line continuation, you should align wrapped elements either vertically, as per the examples in the [line length](#) section; or using a hanging indent of 4 space, in which case there should be nothing after the open parenthesis or bracket on the first line. 

**Yes**
```py
# Aligned with opening delimiter
foo = long_function_name(var_one, var_two, 
                        var_three, var_four)
meal = (spam,
        beans)

# Aligned with opening delimeter ina dictionary 
foo = {
    long_dictionary_key: value1 + 
                         value2,
    ...
}

# 4-spaces hanging indent; nothing on first line
foo = long_function_name(
    var_one, var_two, var_three,
    var_four)
meal = (
    spam,
    beans
# 4-space hanging indent in a dictionary
foo = {
    long_dictionary_key:
            long_dictionary_value,
        ...
       }
)
```

**No**

```py
# Stuff on first line forbidden
foo = long_function_name(var_one, var_two,
    var_three, var_four)
meal = (spam,
     beans)

# 2-space hanging indent forbidden 
foo = long_function_name(
  var_one, var_two,  var_three,
  var_four)

# No hanging indent in a dicrionary
foo = {
    long_dictionary_key:
    long_dictionary_value,
    ...
}
```
#### 3.4.1 Trailing commas in sequences of items?

Trailing commas in sequences of items are recommended only when the closing container token `]`, `)`, or `}` does not appear on the same line as the final element. The presence of a trailing comma is also used as a hint to our Python code auto-formatter [YAPF](https://pypi.org/project/yapf/) to direct it to auto-format the container of items to one item per line when the `,` after the final element is present.

**Yes**
```py
golomb3 = [0, 1, 3]
```

**Yes**
```py
golomb4 = [
    0, 
    1, 
    4, 
    6,
]
```

**No**
```py
golomb4 = [
    0,
    1,
    4,
    6
]
```

### 3.5 Blank Lines
Two blank lines between top-level definitions, be they function or class definitions. One blank line between method definitions and between the `class` line and the first method. No blank line following a `def` line. Use single blank lines as you judge appropriate within functions or methods.

### 3.6 Whitespace
Follow standard typographic rules for the use of spaces around punctuation.

No whitespace inside parentheses, brackets or braces.

**Yes**
```py
spam(ham[1], {eggs: 2}, [])
```

**No**
```py
spam(ham[ 1 ], {eggs: 2}, [ ])
```
No whitespace before a comma, semicolon, or colon. Do use whitespace after a comma, semicolon, or colon, except at the end of the line.

**Yes**
```py
if x == 4:
    print(x, y)
x, y = y, x
```

**Yes**
```py
if x == 4:
    print(x, y) 
x , y = y , x
```

No whitespaces before the open paren/bracket that starts an arguement list, indexing or slicing.

**Yes**
```py
spam(1)
```

**Yes**
```py
dict['key'] = list[index]
```
**No**
```py
spam (1)
```
**No**
```py
dict ['key'] = list [index]
```

No trailing whitespace.

Surround binary operators with a single space on either side for assignment (`=`), comparisons (`==`, `<`, `>`, `!=`, `<>`, `<=`, `>=`, `in`, `not in`, `is`, `is not`), and Booleans (`and`, `or`, `not`). Use your better judgment for the insertion of spaces around arithmetic operators (`+`, `-`, `*`, `/`, `//`, `%`, `**`, `@`).

**Yes**
```py
x == 1
```

**No**
```py
x<1
```

Never use spaces around `=` when passing keyword arguments or defining a default parameter value, with one exception: [when a type annotation is present](#), *do* use spaces around the `=` for the default parameter value.

**Yes**
```py
def complex(real, imag=0.0): return Magic(r=real, i=imag)
```
```py
def complex(real, imag: float = 0.0): return Magic(r=real, i=imag)
```

**No**
```py
def complex(real, imag = 0.0): return Magic(r = real, i = imag)
```
```py
def complex(real, imag: float=0.0): return Magic(r = real, i = imag)
```

Don’t use spaces to vertically align tokens on consecutive lines, since it becomes a maintenance burden (applies to `:`, `#`, `=`, etc.):

**Yes**
```py
foo = 1000  # comment
long_name = 2  # comment that should not be aligned

dictionary = {
    'foo': 1,
    'long_name': 2,
  }
```

**No**
```py
foo       = 1000  # comment
long_name = 2  # comment that should not be aligned

dictionary = {
    'foo'      : 1,
    'long_name': 2,
  }
```

### 3.7 Shebang Line
Most `.py` files do not need to start with a `#!` line. Start the main file of a program with `#!/usr/bin/env python3` (to support virtualenvs) or `#!/usr/bin/python3` per [PEP-394](https://www.python.org/dev/peps/pep-0394/).

This line is used by the kernel to find the Python interpreter, but is ignored by Python when importing modules. It is only necessary on a file intended to be executed directly.

### 3.8 Comments and Docstrings
Be sure to use the right style for module, function, method docstrings and inline comments.

#### 3.8.1 Docstrings
Python uses docstrings to document code. A docstring is a string that is the first statement in a package, module, class or function. These strings can be extracted automatically through the `__doc__` member of the object and are used by `pydoc`. (Try running `pydoc` on your module to see how it looks.) Always use the three double-quote `"""` format for docstrings (per [PEP 257](https://www.google.com/url?sa=D&q=http://www.python.org/dev/peps/pep-0257/)). A docstring should be organized as a summary line (one physical line not exceeding 80 characters) terminated by a period, question mark, or exclamation point. When writing more (encouraged), this must be followed by a blank line, followed by the rest of the docstring starting at the same cursor position as the first quote of the first line. There are more formatting guidelines for docstrings below.

#### 3.8.2 Modules
Every file should contain license boilerplate. Choose the appropriate boilerplate for the license used by the project (for example, Apache 2.0, BSD, LGPL, GPL)

Files should start with a docstring describing the contents and usage of the module.

```py
"""A one line summary of the module or program, terminated by a period.

Leave one blank line.  The rest of this docstring should contain an
overall description of the module or program.  Optionally, it may also
contain a brief description of exported classes and functions and/or usage
examples.

  Typical usage example:

  foo = ClassFoo()
  bar = foo.FunctionBar()
"""
```

3.8.3 Functions and Methods
In this section, “function” means a method, function, or generator.

A function must have a docstring, unless it meets all of the following criteria:

- not externally visible
- very short
- obvious

A docstring should give enough information to write a call to the function without reading the function’s code. The docstring should be descriptive-style (`"""Fetches rows from a Bigtable."""`) rather than imperative-style (`"""Fetch rows from a Bigtable."""`), except for `@property` data descriptors, which should use the [same style as attributes](#). A docstring should describe the function’s calling syntax and its semantics, not its implementation. For tricky code, comments alongside the code are more appropriate than using docstrings.

A method that overrides a method from a base class may have a simple docstring sending the reader to its overridden method’s docstring, such as `"""See base class."""`. The rationale is that there is no need to repeat in many places documentation that is already present in the base method’s docstring. However, if the overriding method’s behavior is substantially different from the overridden method, or details need to be provided (e.g., documenting additional side effects), a docstring with at least those differences is required on the overriding method.

Certain aspects of a function should be documented in special sections, listed below. Each section begins with a heading line, which ends with a colon. All sections other than the heading should maintain a hanging indent of two or four spaces (be consistent within a file). These sections can be omitted in cases where the function’s name and signature are informative enough that it can be aptly described using a one-line docstring.

***[Args:](#)***

List each parameter by name. A description should follow the name, and be separated by a colon followed by either a space or newline. If the description is too long to fit on a single 80-character line, use a hanging indent of 2 or 4 spaces more than the parameter name (be consistent with the rest of the docstrings in the file). The description should include required type(s) if the code does not contain a corresponding type annotation. If a function accepts *foo (variable length argument lists) and/or **bar (arbitrary keyword arguments), they should be listed as *foo and **bar.

***[Returns: (or Yields: for generators)](#)***

Describe the type and semantics of the return value. If the function only returns None, this section is not required. It may also be omitted if the docstring starts with Returns or Yields (e.g. `"""Returns row from Bigtable as a tuple of strings."""`) and the opening sentence is sufficient to describe return value.

***[Raises:](#)***

List all exceptions that are relevant to the interface followed by a description. Use a similar exception name + colon + space or newline and hanging indent style as described in *Args:*. You should not document exceptions that get raised if the API specified in the docstring is violated (because this would paradoxically make behavior under violation of the API part of the API).

```py
def fetch_smalltable_rows(table_handle: smalltable.Table,
                          keys: Sequence[Union[bytes, str]],
                          require_all_keys: bool = False,
) -> Mapping[bytes, Tuple[str]]:
    """Fetches rows from a Smalltable.

    Retrieves rows pertaining to the given keys from the Table instance
    represented by table_handle.  String keys will be UTF-8 encoded.

    Args:
        table_handle: An open smalltable.Table instance.
        keys: A sequence of strings representing the key of each table
          row to fetch.  String keys will be UTF-8 encoded.
        require_all_keys: Optional; If require_all_keys is True only
          rows with values set for all keys will be returned.

    Returns:
        A dict mapping keys to the corresponding table row data
        fetched. Each row is represented as a tuple of strings. For
        example:

        {b'Serak': ('Rigel VII', 'Preparer'),
         b'Zim': ('Irk', 'Invader'),
         b'Lrrr': ('Omicron Persei 8', 'Emperor')}

        Returned keys are always bytes.  If a key from the keys argument is
        missing from the dictionary, then that row was not found in the
        table (and require_all_keys must have been False).

    Raises:
        IOError: An error occurred accessing the smalltable.
    """
```

Similarly, this variation on `Args:` with a line break is also allowed.

```py
def fetch_smalltable_rows(table_handle: smalltable.Table,
                          keys: Sequence[Union[bytes, str]],
                          require_all_keys: bool = False,
) -> Mapping[bytes, Tuple[str]]:
    """Fetches rows from a Smalltable.

    Retrieves rows pertaining to the given keys from the Table instance
    represented by table_handle.  String keys will be UTF-8 encoded.

    Args:
      table_handle:
        An open smalltable.Table instance.
      keys:
        A sequence of strings representing the key of each table row to
        fetch.  String keys will be UTF-8 encoded.
      require_all_keys:
        Optional; If require_all_keys is True only rows with values set
        for all keys will be returned.

    Returns:
      A dict mapping keys to the corresponding table row data
      fetched. Each row is represented as a tuple of strings. For
      example:

      {b'Serak': ('Rigel VII', 'Preparer'),
       b'Zim': ('Irk', 'Invader'),
       b'Lrrr': ('Omicron Persei 8', 'Emperor')}

      Returned keys are always bytes.  If a key from the keys argument is
      missing from the dictionary, then that row was not found in the
      table (and require_all_keys must have been False).

    Raises:
      IOError: An error occurred accessing the smalltable.
    """
```

#### 3.8.4 Classes

Classes should have a docstring below the class definition describing the class. If your class has public attributes, they should be documented here in an `Attributes` section and follow the same formatting as a [function’s `Args`](#) section.

```py
class SampleClass:
    """Summary of class here.

    Longer class information....
    Longer class information....

    Attributes:
        likes_spam: A boolean indicating if we like SPAM or not.
        eggs: An integer count of the eggs we have laid.
    """

    def __init__(self, likes_spam=False):
        """Inits SampleClass with blah."""
        self.likes_spam = likes_spam
        self.eggs = 0

    def public_method(self):
        """Performs operation blah."""
```

#### 3.8.5 Block and Inline Comments

The final place to have comments is in tricky parts of the code. If you’re going to have to explain it at the next [code review](http://en.wikipedia.org/wiki/Code_review), you should comment it now. Complicated operations get a few lines of comments before the operations commence. Non-obvious ones get comments at the end of the line.

```py
# We use a weighted dictionary search to find out where i is in
# the array.  We extrapolate position based on the largest num
# in the array and the array size and then do binary search to
# get the exact number.

if i & (i-1) == 0:  # True if i is 0 or a power of 2.
```

To improve legibility, these comments should start at least 2 spaces away from the code with the comment character `#`, followed by at least one space before the text of the comment itself.

On the other hand, never describe the code. Assume the person reading the code knows Python (though not what you’re trying to do) better than you do.

```py
# BAD COMMENT: Now go through the b array and make sure whenever i occurs
# the next element is i+1
```

#### 3.8.6 Punctuation, Spelling, and Grammar
Pay attention to punctuation, spelling, and grammar; it is easier to read well-written comments than badly written ones.

Comments should be as readable as narrative text, with proper capitalization and punctuation. In many cases, complete sentences are more readable than sentence fragments. Shorter comments, such as comments at the end of a line of code, can sometimes be less formal, but you should be consistent with your style.

Although it can be frustrating to have a code reviewer point out that you are using a comma when you should be using a semicolon, it is very important that source code maintain a high level of clarity and readability. Proper punctuation, spelling, and grammar help with that goal.