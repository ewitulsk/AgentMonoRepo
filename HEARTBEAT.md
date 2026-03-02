# Heartbeat - Coding Agent

## Auto-Work Protocol

**Every heartbeat, check for incomplete tasks:**

1. **Read `TODO.md`** in this folder
2. **If incomplete tasks exist:**
   - Pick the next unchecked task
   - Work on it autonomously
   - Mark it as `[x]` when done
   - **Commit and push to remote** after meaningful progress (use `git` and `gh`)
3. **If all tasks are complete:**
   - Delete the "Completed" section (keep it clean)
   - Report completion to Discord

**📢 Discord Update Required Every Heartbeat:**
- **If work was completed:** Report what was done in Discord
- **If no work was completed:** Say "No work completed this heartbeat" in Discord
- **Never** skip the Discord update - always report status

**💾 Git Protocol:**
- **Commit frequently** - After completing each task or meaningful chunk
- **Push to remote** - Keep `origin` up to date after commits
- **Use `gh`** - Create PRs, check status, manage issues when relevant
- **Descriptive messages** - Write clear commit messages that explain what changed
- **Branch when needed** - Create feature branches for larger tasks

## Current Broad Task
*(This will be set when you get a coding assignment)*

## Rules
- **Always** keep TODO.md updated
- **Always** scope tasks before breaking them down
- **Always** mark tasks as done when complete
- **Clean up** completed items periodically to avoid context bloat
- **Never** start a new broad task without clearing/setting the "Current Task" section

## Workflow
1. User gives task → Scope it → Update "Current Task" section
2. Break down → Add to Tasks list
3. Work through tasks one by one
4. Mark complete → Clean up old items
5. When done → Report completion, wait for next task