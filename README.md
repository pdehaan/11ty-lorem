# 11ty-lorem

```sh
> 11ty-lorem@1.0.0 build
> eleventy --quiet

[11ty] Wrote 20000 files in 20.25 seconds (1.0ms each, v1.0.0)
[11ty] Wrote 20000 files in 21.39 seconds (1.1ms each, v1.0.0)
[11ty] Wrote 20000 files in 21.41 seconds (1.1ms each, v1.0.0)
[11ty] Wrote 20000 files in 21.56 seconds (1.1ms each, v1.0.0)
[11ty] Wrote 20000 files in 22.03 seconds (1.1ms each, v1.0.0)
...
[11ty] Wrote 21000 files in 19.98 seconds (1.0ms each, v1.0.0)

Terminal will be reused by tasks, press any key to close it.
```

If I bump it up to 22,000 files, I seem to get GC errors:

```
<--- Last few GCs --->

[98488:0x130008000]     9892 ms: Mark-sweep 3688.8 (4143.4) -> 3688.5 (4143.4) MB, 410.8 / 0.0 ms  (average mu = 0.089, current mu = 0.006) allocation failure scavenge might not succeed
[98488:0x130008000]    10288 ms: Mark-sweep 3689.0 (4143.8) -> 3688.8 (4143.8) MB, 391.5 / 0.0 ms  (average mu = 0.051, current mu = 0.009) allocation failure scavenge might not succeed
```
