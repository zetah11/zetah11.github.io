"use strict";

/* language data - top secret! don't hack! no cheating! don't copy! -------- */

const DATA = {
  "ada": {
    "title": "Ada 2022",
    "insensitive": true,
    "source": "http://www.ada-auth.org/standards/22rm/html/RM-2-9.html",
    "keywords": [
      "abort", "abs", "abstract", "accept", "access", "aliased", "all", "and",
      "array", "at", "begin", "body", "case", "constant", "declare", "delay",
      "delta", "digits", "do", "else", "elsif", "end", "entry", "exception",
      "exit", "for", "function", "generic", "goto", "if", "in", "interface",
      "is", "limited", "loop", "mod", "new", "not", "null", "of", "or",
      "others", "out", "overriding", "package", "parallel", "pragma",
      "private", "procedure", "protected", "raise", "range", "record", "rem",
      "renames", "requeue", "return", "reverse", "select", "separate", "some",
      "subtype", "synchronized", "tagged", "task", "terminate", "then", "type",
      "until", "use", "when", "while", "with", "xor",
    ],
  },

  "c23": {
    "title": "C23 (including optional)",
    "source": "https://en.cppreference.com/w/c/keyword",
    "keywords": [
      "alignas", "alignof", "asm", "auto", "bool", "break", "case", "char",
      "const", "constexpr", "continue", "default", "do", "double", "else",
      "enum", "extern", "false", "float", "for", "fortran", "goto", "if",
      "inline", "int", "long", "nullptr", "register", "restrict", "return",
      "short", "signed", "sizeof", "static", "static_assert", "struct",
      "switch", "thread_local", "true", "typedef", "typeof", "typeof_unqual",
      "union", "unsigned", "void", "volatile", "while", "_Alignas", "_Alignof",
      "_Atomic", "_BitInt", "_Bool", "_Complex", "_Decimal128", "_Decimal32",
      "_Decimal64", "_Generic", "_Imaginary", "_Noreturn", "_Static_assert",
      "_Thread_local",
    ],
  },

  "c99": {
    "title": "C99",
    "source": "https://en.cppreference.com/w/c/keyword",
    "keywords": [
      "auto", "break", "case", "char", "const", "continue", "default", "do",
      "double", "else", "enum", "extern", "float", "for", "goto", "if",
      "inline", "int", "long", "register", "restrict", "return", "short",
      "signed", "sizeof", "static", "struct", "switch", "typedef", "union",
      "unsigned", "void", "volatile", "while",
    ],
  },

  "c++20": {
    "title": "C++20",
    "source": "https://en.cppreference.com/w/cpp/keyword",
    "keywords": [
      "alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel",
      "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "bool",
      "break", "case", "catch", "char", "char8_t", "char16_t", "char32_t",
      "class", "compl", "concept", "const", "consteval", "constexpr",
      "constinit", "const_cast", "continue", "co_await", "co_return",
      "co_yield", "decltype", "default", "delete", "do", "double",
      "dynamic_cast", "else", "enum", "explicit", "export", "extern", "false",
      "final", "float", "for", "friend", "goto", "if", "import", "inline",
      "int", "long", "module", "mutable", "namespace", "new", "noexcept",
      "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override",
      "private", "protected", "public", "reflexpr", "register",
      "reinterpret_cast", "requires", "return", "short", "signed", "sizeof",
      "static", "static_assert", "static_cast", "struct", "switch",
      "synchronized", "template", "this", "thread_local", "throw",
      "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef",
      "typeid", "typename", "union", "unsigned", "using", "virtual", "void",
      "volatile", "wchar_t", "while", "xor", "xor_eq ",
    ],
  },

  "c#": {
    "title": "C#",
    "source": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/",
    "keywords": [
      "abstract", "add", "alias", "and", "args", "as", "ascending", "async",
      "await", "base", "bool", "break", "by", "byte", "case", "catch", "char",
      "checked", "class", "const", "continue", "decimal", "default",
      "delegate", "descending", "do", "double", "dynamic", "else", "enum",
      "equals", "event", "explicit", "extern", "false", "file", "finally",
      "fixed", "float", "for", "foreach", "from", "get", "global", "goto",
      "group", "if", "implicit", "in", "init", "int", "interface", "internal",
      "into", "is", "join", "let", "lock", "long", "managed", "nameof",
      "namespace", "new", "nint", "not", "notnull", "nuint", "null", "object",
      "on", "operator", "or", "orderby", "out", "override", "params",
      "partial", "private", "protected", "public", "readonly", "record", "ref",
      "remove", "required", "return", "sbyte", "scoped", "sealed", "select",
      "set", "short", "sizeof", "stackalloc", "static", "string", "struct",
      "switch", "this", "throw", "true", "try", "typeof", "uint", "ulong",
      "unchecked", "unmanaged", "unsafe", "ushort", "using", "value", "var",
      "virtual", "void", "volatile", "when", "where", "while", "with", "yield",
    ],
  },

  "clojure": {
    "title": "Clojure",
    "source": "https://github.com/clojure/clojure/blob/master/src/jvm/clojure/lang/Compiler.java#L105-L138",
    "keywords": [
      "def", "loop*", "recur", "if", "case*", "let*", "letfn*", "do", "fn*",
      "quote", "var", "clojure.core/import*", ".", "set!", "deftype*",
      "reify*", "try", "throw", "monitor-enter", "monitor-exit", "catch",
      "finally", "new", "&",
    ]
  },

  "haskell": {
    "title": "Haskell 2010",
    "source": "https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-180002.4",
    "keywords": [
      "_", "case", "class", "data", "default", "deriving", "do", "else",
      "foreign", "if", "import", "in", "infix", "infixl", "infixr", "instance",
      "let", "module", "newtype", "of", "then", "type", "where",
    ],
  },

  "ghc": {
    "title": "Haskell (all GHC extensions)",
    "source": "https://github.com/ghc/ghc/blob/d784bdeb62a6b11831c5235a97449ff2a86dcc52/compiler/parser/Lexer.x#L708-L765",
    "keywords": [
      "_", "as", "case", "class", "data", "default", "deriving", "do", "else",
      "hiding", "if", "import", "in", "infix", "infixl", "infixr", "instance",
      "let", "module", "newtype", "of", "qualified", "then", "type", "where",
      "forall", "mdo", "family", "role", "pattern", "static", "group", "by",
      "using", "foreign", "export", "label", "dynamic", "safe",
      "interruptible", "unsafe", "stdcall", "ccall", "capi", "prim",
      "javascript", "rec", "proc", 
    ],
  },

  "java": {
    "title": "Java 19",
    "source": "https://docs.oracle.com/javase/specs/jls/se19/html/jls-3.html#jls-3.9",
    "keywords": [
      "_", "abstract", "assert", "boolean", "break", "byte", "case", "catch",
      "char", "class", "const", "continue", "default", "do", "double", "else",
      "enum", "exports", "extends", "false", "final", "finally", "float",
      "for", "goto", "if", "implements", "import", "instanceof", "int",
      "interface", "long", "module", "native", "new", "non-sealed", "null",
      "open", "opens", "package", "permits", "private", "protected",
      "provides", "public", "record", "requires", "return", "sealed", "short",
      "static", "strictfp", "super", "switch", "synchronized", "this", "throw",
      "throws", "to", "transient", "transitive", "true", "try", "uses", "var",
      "void", "volatile", "while", "with", "yield",
    ]
  },

  "javascript": {
    "title": "JavaScript (strict)",
    "source": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords",
    "keywords": [
      "abstract", "arguments", "as", "async", "await", "boolean", "break",
      "byte", "case", "catch", "char", "class", "const", "continue",
      "debugger", "default", "delete", "do", "double", "else", "enum", "eval",
      "export", "extends", "false", "final", "finally", "float", "for", "from",
      "function", "get", "goto", "if", "implements", "import", "in",
      "instanceof", "int", "interface", "let", "long", "native", "new", "null",
      "of", "package", "private", "protected", "public", "return", "set",
      "short", "static", "super", "switch", "synchronized", "this", "throw",
      "throws", "transient", "true", "try", "typeof", "var", "void",
      "volatile", "while", "with", "yield",
    ]
  },

  "lua": {
    "title": "Lua 5.4",
    "source": "https://www.lua.org/manual/5.4/manual.html#3.1",
    "keywords": [
      "and", "break", "do", "else", "elseif", "end", "false", "for",
      "function", "goto", "if", "in", "local", "nil", "not", "or", "repeat",
      "return", "then", "true", "until", "while",
    ],
  },

  "ocaml": {
    "title": "OCaml",
    "source": "https://v2.ocaml.org/manual/lex.html#sss:keywords",
    "keywords": [
      "and", "as", "asr", "assert", "begin", "class", "constraint", "do",
      "done", "downto", "else", "end", "exception", "external", "false", "for",
      "fun", "function", "functor", "if", "in", "include", "inherit",
      "initializer", "land", "lazy", "let", "lor", "lsl", "lsr", "lxor",
      "match", "method", "mod", "module", "mutable", "new", "nonrec", "object",
      "of", "open", "or", "private", "rec", "sig", "struct", "then", "to",
      "true", "try", "type", "val", "virtual", "when", "while", "with",
    ],
  },

  "python": {
    "title": "Python 3.10",
    "source": "https://docs.python.org/3/reference/lexical_analysis.html#keywords",
    "keywords": [
      "_", "and", "as", "assert", "async", "await", "break", "case", "class",
      "continue", "def", "del", "elif", "else", "except", "False", "finally",
      "for", "from", "global", "if", "import", "in", "is", "lambda", "match",
      "None", "nonlocal", "not", "or", "pass", "raise", "return", "True",
      "try", "while", "with", "yield",
    ],
  },

  "rust": {
    "title": "Rust 2021",
    "source": "https://doc.rust-lang.org/stable/reference/keywords.html",
    "keywords": [
      "as", "break", "const", "continue", "crate", "else", "enum", "extern",
      "false", "fn", "for", "if", "impl", "in", "let", "loop", "match", "mod",
      "move", "mut", "pub", "ref", "return", "self", "Self", "static",
      "struct", "super", "trait", "true", "type", "unsafe", "use", "where",
      "while", "async", "await", "dyn", "abstract", "become", "box", "do",
      "final", "macro", "override", "priv", "typeof", "unsized", "virtual",
      "yield", "try", "union",
    ],
  },
};