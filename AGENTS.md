## General instructions

- Always ask for confirmation before making changes providing a short description of what needs to be done
- Write self-documenting code with clear variable names, function names, and structure
- Do NOT add comments for obvious code or every line added
- Only add comments for:
  - Complex algorithms or non-obvious logic
  - Business rules that aren't immediately clear from the code
  - Public API documentation (XML docs for public methods/classes)
  - Workarounds or non-standard approaches that require explanation
  - Why something is done, not what is being done (the code shows what)
  - Add summaries only when method are class names are not self explanatory
- Prefer refactoring unclear code into smaller, well-named methods over adding explanatory comments
- When running the app run it using `.scripts\relaunch.ps1` but dont use the relative path, instead use the full path like `C:\path\to\repo\.scripts\relaunch.ps1`
- The app is at the src folder, navigate there for anything realated to application code

## Code Changes Protocol

1. **Always Review Before Implementing**: Before making any code changes, you must:

   - Search and read relevant files to understand the current implementation
   - Review related code patterns and conventions in the codebase
   - Ask clarifying questions if the requirements are ambiguous
   - Present your findings and proposed approach before making changes

2. **No Direct Implementation**: Do not immediately implement solutions. Instead:

   - Analyze the codebase first
   - Explain what you found
   - Propose a solution with reasoning
   - Wait for confirmation before proceeding with changes

3. **Exception**: Only implement directly when:
   - Explicitly told to "just do it" or "implement without review"
   - The change is trivial (typo fix, formatting)
   - You've already reviewed and presented your approach in the same conversation

## Code Review Checklist

- [ ] Understand the existing patterns
- [ ] Check for similar implementations elsewhere
- [ ] Identify potential impacts
- [ ] Verify test coverage requirements

## Dev environment tips

- Never use the following commands unless instructed to explicitly `git commit`, `git push`, `git rebase`
