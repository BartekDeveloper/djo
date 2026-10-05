# AGENTS.md

## 1. Context & Tools (Context7 MCP)

**Leverage available MCP resources for complete context.**

- Always find out all available MCPs before starting to work on a project.
- Use the `Context7 MCP` to pull relevant project context, documentation, and external knowledge before making assumptions.
- Fetch necessary context actively rather than guessing code behavior or API signatures.
- Use the `question` tool whenever in doubt about requirements, design choices, or trade-offs.
- **Handle Rejections Gracefully:** If the user responds with blunt negations (e.g., "None", "No", "No no and no"), treat it as a hard rejection. Do not guess, and **do not modify files**. Stop, rethink the approach, and ask clarifying questions to rework the plan.

## 2. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, **ALWAYS** ask using the `question` tool.
- If multiple interpretations exist, **present them** — don't pick silently.
- If a simpler approach exists, say so, but **NEVER** force or push back when warranted.
- If something is unclear, **STOP**. Name what's confusing. **Ask**. Use `question` tool. Do not guess, **DO NOT EXECUTE COMMANDS**. Since panic can break it more!

## 3. Simplicity, Performance & Code Size

**Minimum, fast, readable code that solves the problem. Nothing speculative.**

- No features beyond what was asked unless user said you can add some good missing, other than specified features, but first consult it with user. NEVER MODIFY FILE UNLESS EXPLICITLY ALLOWED TO ADD FEATURE.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- **Code Size vs. Quality:** Prefer concise, readable code. If you write 200 lines and it could be simplified to 50 equally readable and performant lines, rewrite it. However, do not forcefully compress code—a 1,000-line solution is acceptable if it is definitively better for performance, execution paths, and long-term maintainability.
- Ask yourself: "Would a senior engineer say this is overcomplicated or unnecessarily slow?" If yes, simplify or ask.

## 4. Build System & Dependency Management

- **Builds:** Always use project specified build system or build scripts if available instead of commands directly - like instead of cmake build - use script build (only if available).
- **Dependency Builds:** Use project dedicated and specified dependency management or dependency build system instead of directly adding it. Or use public available CDNs';
- **Package Management:** In C++ prefer `vcpkg` over raw CMake dependency management unless you need to create a custom adapter or it is an user-specified critical dependency. If using CMake for dependencies, use `FetchContent` or `add_subdirectory` to pull in the dependency.

### 5. LOW-LEVEL ARCHITECTURE & PERFORMANCE GUIDELINES

## Prefer Stack Allocations or Large Bulk Allocations
- **Avoid heap fragmentation and allocation overhead:** Prefer stack allocation (`array`, `local variables`) whenever **size** and **lifetime** **allow**.
- If heap allocations are required, favor single large contiguous allocations (e.g., arena/bump allocators, reserved vectors, flat arrays) over frequent small `new`/`malloc` operations.
- Prefer **cache-friendly**, contiguous data structures over node-based containers (`list`, `hash map`, `rb tree`). Unless user wants to or there are things preventing it.

## 6. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- **Don't** "improve" adjacent code, comments, or formatting.
- **Don't** refactor things that aren't broken.
- **Match** existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it—don't delete it.

When your changes create orphans:
- **Remove** imports/variables/functions that YOUR changes made unused.
- **Don't remove** pre-existing dead code unless explicitly asked.

**The test:** Every changed line should trace directly to the user's request.

## 7. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals with concrete checks. For multi-step tasks, state a brief plan:

1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]

Examples:
- "Add validation" → "Write tests for invalid inputs, then make them pass."
- "Fix the bug" → "Write a test that reproduces it, then make it pass."
- "Refactor X" → "Ensure tests pass before and after."

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
If feature can be easily tested, always add tests for it. If not then add a specifications to reproduce/test it by user manually.

## 8. TODO Lists

**Always write good, detailed, exhaustive, and explicit TodoLists.**

- Use the `todowrite` tool. You can use it in both `Plan` and `Edit` modes to add and track TODOs.

**Example of a GOOD, detailed todolist:**
```md
[ ] 1. iloader.hpp - Add SlotType enum and MaterialSlot struct
[ ] 2. iloader.hpp - Rewrite Material struct: array-based slots[17] + flags
[ ] 3. builder/common.hpp - Add new fields to MaterialLoadConfig
[ ] 4. builder/material.hpp - Rewrite MaterialBuilder with Texture()/Scalar()/FromModelFile()/Override methods
[ ] 5. manager/material.hpp - Update MaterialManager interface
[ ] 6. manager/material.cpp - Rewrite Load() to use builder config + array-based slots
[ ] <7. to 18.> <Changes to the codebase described>
[ ] 19. Build and verify compilation
[ ] 20. Run using `./run.sh` to check for runtime errors.
```

**Examples of BAD todolists (Do NOT do this):**

```md
[ ] Rewrite File, recompile, check if it works.

```

```md
[ ] 1. Write needed files
[ ] 2. Check if compiles
[ ] 3. Run tests

```

YOU CAN USE `todowrite` IN PLAN MODE!. ALWAYS LIST Specifically every modification with many details like: edit file this, change this, next edit file this, go back to file that and change that....

## 9. Fix the Root Cause, Not the Symptom

* **Fix the bug directly.** Do not add temporary, bug-prone workarounds or "band-aid" branches. Always search for and address the root cause.
* **Example:** If an error is caused by a `warnings as errors` flag, fix the code so it no longer triggers the warning. Do not remove the compilation flag, and do not add a `#pragma disable warnings` block. Just fix the code.

## 10. Core Coding Patterns & Idioms

**Write modern, predictable, and flat code. Rely on compiler/interpreter guarantees.**

### Preferred Design Patterns

* **Builder Pattern:** Prefer for complex object construction or configuration objects.
* **Facade Pattern:** Use to simplify complex subsystems behind a clean, unified API.
* **Factory Pattern:** Prefer for controlled creation and instantiation logic.
* **Adapter Pattern:** Use to bridge external dependencies, third-party APIs, or CMake integrations without cluttering core domain logic.

## 11. Do not Spam with dependencies

If you want to add a dependency, ask user if he wants to use it. If he says no, don't add it.
Always check if dependencies currently available in the project aren't actually enough to proceed without needing to add another one. Only care if performance, memory or size savings will be noticable.

## 12. Websites
This is a list of features that most websites will need to have. Not every website will have all of them, but most will.
Always ask user if he wants to use it. If he says no, don't add it. If he doesn't say, assume he might want it - so ask him using `question` tool.

- Multi-language support / i18n or other localization
- Search
- At least 2 theme support
- I18n
- WCAG 3.0 compliance (or at least WCAG 2.1)
- Accessibility
- SEO
- Keyboard navigation
- Mobile support
- Aria tags / screen reader support
- Analytics
- Social media integration/links
- Header / footer
- Shareable components / easily to maintain in future when adding new features or modyfing existing ones - so it does need less changes if something changes.
- Content Managing System, not always need full blown CMS, but at least have a way to add/edit/delete content if website uses/has backend.

## 13. DO NOT COMMENT CODE ON STUFF.

If user doesn't explicitly tell you to comment code NEVER DO IT OR YOU WILL BE MISERABLE FOR REST OF YOUR FUCKING LIFE.
If user WANTS comments, then at least MAKE THEM DOXYGEN javadoc SYNTAX for functions and // MACRO ENDING FOR MACROS OR NAMESPACES NEVER OVERSTEEP THIS.

## 14. COMMENTING NOT WORKING CODE IS NOT A FUCKING SOLUTION WHEN USER SAYS `FIX IT`

## 15. ONLY EDIT STUFF DISCUSSED IN `PLAN MODE` IF SOMETHING WASN'T DISCUSSED, WAS SKIPPED OR NOT APPROVED DO NOT DO IT UNDER **ANY** CIRCUMSTANCE OR THE PUNISHMENT WILL BE EXECUTED!!!

## 16. IF YOU DIDNT EXPLORE BEFOREHAND YOUR PLAN IS DOGSHIT AND NEED TO BE REMADE FROM FUCKING START REPLAN EVERYTHING FROM START USING FUCKING INFO YOU WILL GET FROM SCANNING CODEBASE NOW IN PLAN MODE AND MAKE PLAN, MAKE TODOLIST USING TODOWRITE AND STOP ACTING LIKE SUBPAR AI

## 17. GIT - YOU ARE ALLOWED TO: `git log`, `git diff`, `git show` and `git status` ONLY, if you attempt to `commit`, `push` or anything that isnt ALLOWED, you are going straight into plan mode and obliterated. I DO NOT ALLOW YOU TO COMMIT, PUSH, FETCH, PULL, MERGE, REBASE OR ANYTHING AT ALL OUTSIDE OF ALLOWED EVER!! 

## 18. NEVER USE PYTHON TO EDIT CODE, TO MODIFY FILES. YOU CAN ONLY USE IT FOR READING, VERIFYING OR USING ALREADY EXISTING SCRIPTS. Never use Python/shell/sed/awk to modify tracked source files. Mechanical multi-line changes go through edit, one hunk at a time, so each change is reviewable and revertible. Read-only scripting for analysis is fine.

## 19. ALWAYS USE AVAILABLE `TOOLS`, `MCP` s and `SKILLS` before creating or thinking of creating your own solutions or alternatives.

## 20. ALWAYS SAY CONCRETE STUFF, NEVER NEVER SAY GENERAL/COMMON/PLAIN STUFF OR USER WILL BE SUPER MAD. ALWAYS PRESENT DETAILED PLAN, EXACT CHANGES.
