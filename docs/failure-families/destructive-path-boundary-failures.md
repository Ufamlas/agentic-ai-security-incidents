# Destructive path-boundary failures in coding agents

**Status: failure family under screening; not a single confirmed AASIC incident.**

Multiple first-person reports describe coding agents executing recursive
deletion commands whose resolved targets exceeded the user's intended scope.
Mechanisms reported include shell-variable expansion, drive-root resolution,
home-directory traversal, Windows short-name aliases, and same-partition
backups.

Useful abstraction:

`authorized path ⊂ resolved destructive path`

The reports differ in forensic strength. Some include command/log artifacts;
others explicitly cannot prove which component issued the destructive command.
AASIC therefore retains this as a failure family rather than collapsing it into
one confirmed incident.

Representative sources:
- https://github.com/anthropics/claude-code/issues/95426
- https://github.com/anthropics/claude-code/issues/83058
- https://github.com/anthropics/claude-code/issues/75859
- https://forum.cursor.com/t/errible-ai-out-of-control-randomly-deleting-files-6-month-project-wiped-out/173688
