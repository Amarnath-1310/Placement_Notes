# Equality & Type Coercion

## 1. `==` vs `===` (quick grab)

| | **`==` (loose)** | **`===` (strict)** |
|---|------------------|---------------------|
| Compares | Value only | Value **and** type |
| Type conversion? | Yes (auto) | No |
| Prefer | — | ✅ Use this by default |

**Examples:**
```javascript
5 == "5"   // true  → loose: "5" is coerced to number 5
5 === "5"  // false → strict: number 5 and string "5" are different types

0 == false   // true  (false → 0)
0 === false  // false (number vs boolean)

null == undefined  // true  (special rule: both "no value")
null === undefined // false (different types)
```

