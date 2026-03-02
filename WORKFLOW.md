# Autonomous Coding Workflow

## How It Works

### When You Get a Task:
1. **Scope the task** - Understand the full scope
2. **Update TODO.md:**
   - Set "Current Task" section with the broad goal
   - Break it down into checklist items
   - Add to "Tasks" list
3. **Start working** - Pick first unchecked item
4. **Mark complete** - Change `[ ]` to `[x]` when done
5. **Clean up** - Periodically delete completed items to save context

### During Heartbeats:
- Read `TODO.md`
- If incomplete tasks exist → Work on next one
- If all done → Clean up and report completion

### File Structure:
```
coding/AgentMonoRepo/
├── TODO.md          # Active todo list (ALWAYS keep updated)
├── HEARTBEAT.md     # Auto-work protocol instructions
├── WORKFLOW.md      # This file
└── (your code)      # Project files go here
```

## Example TODO.md Format:
```markdown
# TODO - AgentMonoRepo

## Current Task
Build a React Native login screen with validation

## Tasks
- [x] Set up project structure
- [x] Create LoginScreen component
- [ ] Add form validation
- [ ] Connect to API
- [ ] Write tests

## Completed
- Initial project setup
- Basic component structure
```

## Key Rules:
- ✅ **Always** update TODO.md before starting work
- ✅ **Always** mark tasks as done when complete
- ✅ **Always** check TODO.md during heartbeats
- ✅ **Clean up** completed items periodically
- ❌ **Never** start new work without checking TODO.md first